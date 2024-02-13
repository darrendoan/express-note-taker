# Express-note-taker

## Description
This simple app allows you to keep track of notes and allows you to add, update or delete them. 

## Table of Contents
- [Overview](#Overview)
- [The Challenge](#The-Challenge)
- [Usage Intructions](#Usage-Instructions)
- [Installation Process](#Installation-Process)
- [Built With](#Built-With)
- [What I Learned](#What-I-Learned)
- [Credits](#Credits)

# Overview

## The Challenge
In this module's challenge, we were tasked with creating an application that uses express.js to save and retrieve note data from a JSON file. After that, we were tasked with creating routes to link the sample code with our code and then to deploy it on heroku. 

## User Story

```md
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Acceptance Criteria

```md
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```

## Usage Instructions
1) Click this link to view the deployed app on heroku: https://shrouded-fjord-07146-0342a75c2501.herokuapp.com/
2) Click get started
3) Fill out desired areas and click the save notes button
4) You may also delete the notes aswell

## Usage Instructions (Local)
1) Open a new terminal in `Command Prompt` or `Git Bash` or `Visual Studio Code Terminal`
2) Change directory to the parent folder of `server.js`
3) Initiate the `Nodemon` by typing the following, which will automatically restart the server everytime the server-side code is changed.
    ```
    npm run dev
    ```
4) Type the following in the broswer to open the app
    ```
    localhost:3001
    ```

## Installation Process
1. Install `NPM` by typing
    ```       
    npm init -y
    ```
2. Install `Express`     
    ```         
    npm i express
    ```
3. Install `Nodemon` Plugin as  Dev Dependency
    ```
    npm i -D nodemon
    ```
After installation of all the required plugins and packages, change the `script` value to  the following:            
       
    {            
        "start": "node server",               
        "dev": "nodemon server"                  
    }                  

## Built With
- Express.js
- Node.js
- VsCode

## What I Learned
During the course of this challenge, I learnt how to link the front end of an app to its backend (express). I learnt how to create api and html routes. I also learnt how to deploy to heroku. 

## Credits 
I'd like to thank my peers and my teachers for their insight regarding my code. 
