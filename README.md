# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Project Setup Guide

A brief guide on setting up the database, backend, and frontend for the project.

## Table of Contents

- [Setup](#setup)
  - [Database](#database)
  - [Backend](#backend)
  - [Frontend](#frontend)

## Setup

1. **Install Docker:**
   - https://docs.docker.com/engine/install/

2. **Install Maven:**
   - Linux: `sudo apt update, sudo apt install maven`
   - mac: `brew install maven`
   - window: https://maven.apache.org/install.html
   - java: 17v
   - Nodejs: 21.4
   - Mongo-campass: https://www.mongodb.com/try/download/compass (1.41 stable)

3. **Install MongoDB Docker Image:**
   - pull image by `docker pull mongo`
   - run the imge `docker run -p 8081:27017 --name leetCodeDB -d mongo:latest` 

4. **Start Project:**
   - FrontEnd : `npm run dev`
   - BackEnd : `mvn clean install, java -jar target/ROOT.jar`
