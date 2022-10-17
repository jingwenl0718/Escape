# Escape

## Description
This project was created with another three students as a part of the MERN full-stack sofeware development course at Coding Dojo (https://www.codingdojo.com/). The application allows hosts to create, read, update and delete (CRUD) stays as well as chatting with each other. I was primarily responsible for implementing the GoogleMaps API and Geocoding API to decode addresses across the globe to be saved in our database. Address markers were also customized using @fortawesome while following the chosen color palette of the application. 

Overall, it was a great development experience! This group project not only allowed me to learn something new entirely on my own but also sharpened my skillsets in terms of collaborating with other developers. During the one-week sprint, our group spent more than 30 hours discussing the implementation of new features, styling the website, and debugging together. 

Key technologies used in this application include REACT, APIs, Express, Mongoose, MongoDB, Multer, and Socket.IO. 

## Demo
https://www.youtube.com/watch?v=6uB1os20bXA

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Credits](#credits)
- [License](#license)

## Prerequisites
- [Node.js v16](https://nodejs.org/en/download/) (LTS)
- Create Maps JavaScript API key and Geocoding API key from Google Maps Platform (https://developers.google.com/maps) 

## Installation
1. Clone the repo
   ```
   git clone https://github.com/jingwenl0718/Escape.git
   ```

2. Navigate into server
   ```
   cd server
   ```
   Install all the dependencies
   ```
   npm install
   ```
   Or
   ```
   npm i
   ```
   Install Nodemon globally (to prevent having to restart the server manually every time we update the code)
   ```
   npm install -g nodemon
   ```
   Note: If you're using a Mac (or Linux) You may need to use sudo in order to install it globally
   ```
   sudo npm install -g nodemon
   ```
   Run the server
   ```
   nodemon server.js
   ```

3. Open another terminal window and navigate into client
   ```
   cd client
   ```
   Install all the dependencies
   ```
   npm install
   ```
   Or
   ```
   npm i
   ```
   Create .env file 
   ```
   touch .env
   ```
   Store API keys inside .env follow the following pattern
   
   "REACT_APP_GOOGLE_MAPS_API_KEY = Your_API_Key"
  
   "REACT_APP_GEOCODE_API_KEY= Your_API_Key"
   
   Run REACT application
   ```
   npm run start
   ```
   Or
   ```
   npm start
   ```

3. Open a browser and navigate to http://localhost:8000. 

## Credits
Special thanks to my group members Caroline Denis, Lee DeJonge, Ryan Janusko for creating an amazing project together! 

## License
MIT License (https://github.com/jingwenl0718/Escape/blob/main/LICENSE)