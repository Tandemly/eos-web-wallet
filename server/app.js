// server/app.js
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const session = require('express-session');
const bodyParser = require("body-parser");
const compress = require("compression");
const methodOverride = require("method-override");
const cors = require("cors");
const helmet = require("helmet");
const appRoutes = require("./routes/app.routes");
const error = require("./middleware/error");
const MongoStore = require("connect-mongo")(session)
const { logs, env, port, mongo, sessionKey } = require("./vars");

// Create express application
const app = express();

console.log('Using session key:', sessionKey);


// request logging. dev: console | production: file
app.use(morgan(logs));

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// gzip compression
app.use(compress());

// lets you use HTTP verbs such as PUT or DELETE
// in places where the client doesn't support it
app.use(methodOverride());

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors({ credentials: true }));

// Get status of server
app.use("/status", (req, res) => res.send("OK"));

// Session handling (session cookies)
app.use(session({
  name: 'eos-wallet',
  secret: sessionKey,
  cookie: { 
    maxAge: 3600000,    // 1 hour
    httpOnly: true      // server-side only, client encrypted
  },
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({ url: mongo.uri })
}));

// mount app routes
app.use("/app", appRoutes);

// Serve static assets (create-react-app build directory)
app.use(express.static(path.resolve(__dirname, "..", "build")));

// Always return the main index.html, so react-router render the route in the client
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

// if error is not an instanceOf APIError, convert it.
app.use(error.converter);

// catch 404 and forward to error handler
app.use(error.notFound);

// error handler, send stacktrace only during development
app.use(error.handler);

module.exports = app;
