This project is using the [Bulma CSS framework](http://bulma.io/documentation/overview/start/) as
a base framework for building custom styles and applications. All styles for the application are written using SCSS.

The application can customize the styles and elements provided by Bulma in two ways:

1. Adding custom styles or overriding Bulma styles through inclusion of new styles added in the `src/styles/` folder.  The application provides a `custom_variables.scss` which allows the projec to override Bulma variables/styles and may define global application wide styles within this directory (`@import`ed into the `src/styles/index.scss`).
2. Using CSS Modules at the React Component level.  This allows each React Component to include it's own specific styles (_these should be layout focused and not presentation_).  Those local CSS Modules also use SCSS syntax and are imported directly into the React Component `.js`. 
