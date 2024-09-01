# Cats Tecnical test 

## Overview
this is a technical test that what it does is that by means of an api retrieves a word which we will use to consult a second api to return an image and thus be able to render both the word of the first api and the image of the second api.

## Table of Contents
- Technologies Used
- Project Structure
- APIS Integrations
- preview
- Installation
- Install Dependencies
- Run the Application

## Technologies Used

- ```React```: Used for building the user interface and managing component states.
- ```Vite```: Utilized as the development environment and build tool for its fast performance and efficient bundling.
- ```CSS```: For styling the application, ensuring a clean and responsive design.

## Project struture
```
┣ docs
 ┃ ┗ images
 ┃ ┃ ┗ doc_1.png
 ┣ public
 ┃ ┗ .gitkeep
 ┣ src
 ┃ ┣ assets
 ┃ ┃ ┗ css
 ┃ ┃ ┃ ┗ index.css
 ┃ ┣ components
 ┃ ┃ ┗ App.jsx
 ┃ ┣ hooks
 ┃ ┃ ┣ useFact.js
 ┃ ┃ ┗ useImageCat.js
 ┃ ┣ services
 ┃ ┃ ┣ fetchinFact.js
 ┃ ┃ ┣ fetchinImageCat.js
 ┃ ┃ ┗ fetchService.js
 ┃ ┣ util
 ┃ ┃ ┗ recoveryWord.js
 ┃ ┗ main.jsx
 ┣ .env
 ┣ .eslintrc.cjs
 ┣ .gitignore
 ┣ index.html
 ┣ package-lock.json
 ┣ package.json
 ┣ README.md
 ┗ vite.config.js
```

##  APIS Integrations
- https://catfact.ninja/fact :get facts
- https://cataas.com/cat/says/{word} : get image cat

##  Preview
![doc_1](/docs/images/doc_1.png)


### Installation
```
git clone https://github.com/JUANDGG/cats-tecnical-test.git
cd cats-tecnical-test
```
### Install Dependencies

```
npm install
```
### Run the Application
```
npm run dev
```