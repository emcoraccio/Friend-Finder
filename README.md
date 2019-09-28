# Friend-Finder

## Description

This is a website which has 10 statement questions which users can rate on a scale from strongly agree to strongly disagree. After they fill out all of the questions and submit it, they will be provided with the info for the person who is their best match, giving the percent that they match on the questions.

## Technologies Used

* Express
* Node
* JQuery
* HTML5/CSS3


## Organization

The data for the friends are stored in the 'data' folder in a json object within the 'friends.js' file

All static files are served from within the 'public' folder

Routing is stored within the 'routing' directory which contains two files: 
* apiRoutes.js
* htmlRoutes.js 

express and path are the only npm dependencies for this application

## Code 

The code calculates the closest match by calculating the difference between the values which the user chooses for each question and the scores of each user in the friends file. 

It uses ajax to get the friends data and also to post to the api when the user finishes the survey.


Take a look at it. It's deployed here: 
https://still-waters-30880.herokuapp.com/