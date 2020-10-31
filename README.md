# all-product.com E-commerce

## Description 

A Back End application that can be used to interact with the database.

You can Create, Read, Update, and Delete (CRUD) information that is contained in the database via and interface develop in this application

It has developed with Express.js, MySQL Database, Sequelize, Dotenv, MySQL2 packages and ES6.


## Table of Contents

* [URLs](#urls)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#Contributing)
* [License](#license)
* [Test](#Test)
* [Questions](#questions)
* [Screenshots](#screenshots)


## URLs

* GitHub Repository:
    - [HTTPS: https://github.com/rogers0404/13-all-product.com.git](https://github.com/rogers0404/13-all-product.com.git)    
    - [GIT: git@github.com:rogers0404/13-all-product.com.git](git@github.com:rogers0404/13-all-product.com.git)

* Link Video
    - [Youtube Video: https://youtu.be/66aD5Yslw_Y](https://youtu.be/66aD5Yslw_Y)
    - [Google Drive Video: https://drive.google.com/file/d/1L_ZzRqjHDop5IUXWi7qdfTzaSazX2p2V/view](https://drive.google.com/file/d/1L_ZzRqjHDop5IUXWi7qdfTzaSazX2p2V/view)


## Installation

You need some packages to run this application, 

- `git clone git@github.com:rogers0404/13-all-product.com.git        //clone the repository`
- `npm i                                   // or npm install to get all packages and dependencies of NPM`
- `npm init                                // to get package.json`
- `npm install express                     // check wether you have installed npm packages or just install express`
- `npm install --save mysql2               // Install npm package for MySQL`
- `npm install dotenv                      // Install npm dotenv package`
- `npm npm i sequelize                     // Install npm sequelize `
- `mysql -u root -p                        // Initial Setting to Database`
- `Inside mysql you must run the following command line. source db/schema.sql`
- `Run in the terminal. npm run seed       // Initial data into Database`


## Usage 

Defining Express in the application:

`const express = require('express');`
`const mysql = require('mysql2');`
`require('dotenv').config();`
`const Sequelize = require('sequelize');`
`const router = require('express').Router();`

The starting command-line is:

`mysql -u root -p                          // Initial Setting to Database`
`npm run seed                              // run the query for initial data`
`npm start                                 // to run the server`


Examples of methods in Express.js, MySQL2, dotenv and Sequelize :

Enviroment Variables
`DB_NAME='ecommerce_db'`
`DB_USER='root'`
`DB_PW='Alejandro1210'`

Connection to DB
`sequelize.sync({ force: false }).then(() => {`  
`    app.listen(PORT, () => console.log(App listening on port ${PORT}!);`
`    });`
`});`

Routes
`router.get('/', (req, res) => {`
`  // find all categories`
`  // be sure to include its associated Products`
`  Category.findAll({`
`    attributes: ['id', 'category_name'],`
`      include: [{`
`                model: Product,`
`                attributes: ['id', 'product_name', 'price', 'stock','category_id']`
`              }]`
`    })`
`    .then((dbGetData) => res.json(dbGetData))`
`    .catch(err => {`
`        console.log(err);`
`        res.status(500).json(err);`
`      });`
`});`


## Contributing

* Rogers Ramirez, Github User: [rogers0404](http://github.com/rogers0404)


## License

all-product.com App with Express.js is licensed under the

![v1](https://img.shields.io/static/v1?label=License&message=None&color=inactive&&style=plastic)

None

Express.js Dependency is licensed under

![v1](https://img.shields.io/static/v1?label=License&message=MIT&color=green&&style=plastic)

MIT

## Test

None

Queries are tested inside package MySQL2


## Questions

If you have any questions about the application, you can check the documentation on my GitHub profile [https://github.com/rogers0404](https://github.com/rogers0404).

for more information you can have a question via email [rogers.ramirez2008@gmail.com](rogers.ramirez2008@gmail.com)  .


## Screenshots

### Screenshot 1

![](./assest/images/image1.JPG)