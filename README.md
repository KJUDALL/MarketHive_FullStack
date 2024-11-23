# MarketHive

## Description

Who says being a shopaholic is a bad thing? If you're looking for a website that will knock your socks off with all the latest and greatest styles in fashion, then look no further! You've come to the right place. MarketHive prides itself on being a functional, user friendly, and responsive full stack application. We use data models (Postgres & Sequelize), CRUD routes (Node.js & Express.js for RESTful API's), servers, and user auth (via JWT) to name a few. Additionally, React has been utilized for our frontend framework. We are also protecting our API keys and sensitive information with environment variables. And lastly, we are deployed using Render.

From a folder structure standpoint, we've created a PERN full stack app. We have our client side folder structure, which includes our React components (ie. Header, Footer, Login Form and Product Card). We also have API routes being used. Our App.jsx exports our frontend components, and Main.jsx renders the App.jsx and is the main entry point for our app. The backend includes database creation, sequelize models, controllers and routes for our API endpoints, middleware for our JWTs, and seeding for our user and product data being added to the site. We include a .env file to store our DB and JWT credentials, and ensure that file is added to our .gitignore for added project-wide security.

Overall, we envision our app being a marketplace where store owners and shoppers alike can display and find products easily on our homepage. From there, clicking into a product will populate a new page, providing images in a carousel format, product descriptions, and the ability to purchase or add said item(s) to your cart. We obviously still have our work cut out for us when it comes to the frontend, but for now the backend services are functioning as expected. Enjoy!

## Table of Contents

- [Description](#description)
- [Deployment Link](#deployment)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions](#questions)

## Deployment

Here is a link to our deployed application: https://markethive-fullstack.onrender.com

## Screenshots

Unfortunately, we did not get a chance to finish out the frontend portion of our full stack app. However, here are screenshots of the wireframe to depict what we would like it to appear as.

![Wireframe Screenshot 1](./assets/homepage.png)
![Wireframe Screenshot 2](./assets/product_card.png)

## Installation

Users can clone this code repo using an IDE of choice. They must ensure node.js and express.js files are present in the repo. User must install pg as a postgreSQL package manager. Because this code base uses JavaScript + React (JSX), users must utilize the correct npm scripts to build the app. The client and server side package.json scripts differ due to utilizing varying frameworks (vite vs node.js). The project should build and run successfully if using the root package.json scripts - npm render-build will do an npm install and npm build. From there, npm start will route to the client directory and start the build. The application should populate without any issues if all of this has been done correctly.

You can test the backend API's by using either Postman or Insomnia.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Questions

    If you would like to contact us, you can do so at the following email: markethive@hotmail.com

If you would like to view this repo, you can visit GitHub at [kjudall](https://github.com/KJUDALL/project2).
