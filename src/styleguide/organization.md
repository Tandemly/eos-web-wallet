The general setup for the projet is a `create-react-app` project, with the 
usual folder structures.  The additional folder structure used by the project is described below:

| Folder             | Description   |
| :---               | :---          |
| `/src/`             | top level source folder |
| ` |- components/`   | all ui/presentational components |
| ` |- containers/`   | HOCs for mapping application state |
| ` |- images/`       | images for importing directly into `.js` files |
| ` |- styles/`       | custom and overridding styles for application |
| ` |- styleguide/`   | contains all styleguide related files/components |
| ` | |- components/` | customized Styleguidist components for rendering the styleguide |
| ` | |- styles/`   | styles specific to the styleguide only |
| `` | `- *.md/`` | static styleguide sections not-generated from components |
| ``|- thunks/``       | async action creators |
| `` `- util/``       | HOCs and other app-wide utilities |
| `/server/`          | \[*optional*\] if the application needs a node server it should go here |

Images not imported directly into a `.js` file should be added to the `/public/images` folder and referenced using the `%PUBLIC_URL%` token provided by `create-react-app` for `.html` files or the `process.env.PUBLIC_URL` environment variable in Javascript code. 
