# Book-A-Meal (IYA PATO) 🍽🥗🍔😋🍗 &middot; [![Build Status](https://travis-ci.com/RIDUMATICS/book_a_meal.svg?branch=develop)](https://travis-ci.com/RIDUMATICS/book_a_meal) [![Coverage Status](https://coveralls.io/repos/github/RIDUMATICS/book_a_meal/badge.svg?branch=develop)](https://coveralls.io/github/RIDUMATICS/book_a_meal?branch=develop) [![Maintainability](https://api.codeclimate.com/v1/badges/8a45c91f27cb5905b15a/maintainability)](https://codeclimate.com/github/RIDUMATICS/book_a_meal/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/8a45c91f27cb5905b15a/test_coverage)](https://codeclimate.com/github/RIDUMATICS/book_a_meal/test_coverage)


>Book-A-Meal is an application that allows customers to make food orders and helps the food vendor know what the customers want to eat.

## Getting Started

> [UI Templates](#ui-templates) &middot; [Trello](#trello) &middot; [Technologies](#technologies-used) &middot; [Testing Tools](#testing-tools) &middot; [Installations](#installations) &middot; [API Endpoints](#api-endpoints) &middot; [Tests](#tests) &middot; [Acknowledgments](#acknowledgments) &middot; [Author](#author)

---

## UI Templates

UI Template for the application can be found here [Github pages](https://ridumatics.github.io/book_a_meal/frontend/index.html).

## Heroku App

Application was deployed to Heroku. Use public URL [http://iya-pato.herokuapp.com/](http://iya-pato.herokuapp.com/) with API endpoints.

## Trello

Trello Stories can found here [Trello](https://trello.com/b/cxO2xaT3/book-a-meal).

---

## Technologies Used

[node]: (https://nodejs.org)

- [Node.js](node) A run time environment based off Chrome's v8 Engines for writing Javascript server-side applications.
- [Express.js](https://expressjs.com) - Web application framework based on Node.js.
- [ESLint](https://eslint.org/) - A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.
- [Airbnb](https://www.npmjs.com/package/eslint-config-airbnb) style guide was followed.
- [Yarn](https://yarnpkg.com/) -  Yarn is a JavaScript Package Manager, a direct competitor of npm, one of the Facebook Open Source projects.

## Testing Tools

- [Mocha](https://mochajs.org/) A javascript testing framework.
- [Chai](https://chaijs.com) A test assertion library for Javascript.

## Installations

#### Getting started

- You need to have Node and Yarn installed on your computer.
- Install [Node](node).
- Install [Yarn](https://yarnpkg.com/lang/en/docs/install/#windows-stable).

#### Clone

- Clone this project to your local machine `https://github.com/RIDUMATICS/book_a_meal.git`

#### Setup

- Installing the project dependencies
  > Run the command below
  ```shell
  $ yarn install
  ```
- Start your node server
  > run the command below
  ```shell
  $ yarn start
  ```
- Use `http://localhost:8080` as base url for endpoints
  
## API Endpoints

| METHOD | DESCRIPTION                             | ENDPOINTS                           |
| ------ | --------------------------------------- | ------------------------------------|
| GET    | Get all the meal options                | `/api/v1/meals`                     |
| GET    | Get a Single meal options               | `/api/v1/meals/:id`                 |
| POST   | Add a meal option                       | `/api/v1/meals`                     |
| PUT    | Update the information of a meal option | `/api/v1/meals/:id`                 |
| DELETE | Remove a meal option                    | `/api/v1/meals/:idd`                |
| POST   | Setup the menu for the day              | `/api/v1/menus`                     |
| GET    | Get the menu for the day                | `/api/v1/menus`                     |
| GET    | Get the menu for specific date          | `/api/v1/menus/:section?date=value` |
| POST   | Add a single Order to record.           | `/api/v1/orders`                    |
| PUT    | Modify an order                         | `/api/v1/orders/:id`                |
| GET    | Get all the orders                      | `/api/v1/orders`                    |

Section = all | breakfast | lunch | dinner
Date format = m-dd-yyyy

Example:
Get all menus for 2-22-2019
iya-pato.herokuapp.com/api/v1/menus/all?date=2-22-2019

Get breakfast menus for 2-22-2019
iya-pato.herokuapp.com/api/v1/menus/breakfast?date=2-22-2019


- Run test for all endpoints
  > run the command below
  ```shell
  $ yarn test
  ```

## Acknowledgments

- [Andela](https://andela.com/)
- [forloop Africa](https://forloop.africa/)

## Author

- Ridwan Onikoyi 
