![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# ShreddIt

[![Known Vulnerabilities](https://snyk.io/test/github/terezakinnert/ga-2-shreddit/badge.svg?targetFile=package.json)](https://snyk.io/test/github/terezakinnert/ga-2-shreddit?targetFile=package.json)

#### General Assembly's Web Development Immersive: Project 2

Fully RESTful single page web application built solo in a 7 days during a 12 week course. It was meant to solidify the basics of back end development and front end with EJS.


### Table of Contents

- [Getting Started](#getting-started)
  - [Live app](#live-version-of-the-app)
  - [Installation Instructions](#to-run-locally)
- [Description](#description)
  - [Brief](#brief)
  - [Tools and Technologies Used](#tools-and-technologies-used)
  - [Wireframes](#wireframes)
  - [Screenshots](#screenshots)
  - [Known Issues](#known-issues)
- [Challenges and Wins](#challenges-and-wins)
- [Future Work](#future-work)
- [Contact](#contact)


## Getting Started

#### [Live version of the app](https://shred-dit.herokuapp.com)

#### To run locally

Prerequisites: MongoDB installed and `mongod` running

- clone or download repo
- install dependencies in the same directory: `yarn` (or your package manager's equivalent command)
- `yarn start` and visit `http://localhost:4000/`


## Description

ShreddIt is a platform for reviewing independent music venues, primarily in London. Users can view venues and other users' reviews. Logged-in users can add other venues, comment/rate any of them, edit and delete them.


### Brief

The project was supposed to fulfil these requirements:

- [x] 2 models: one representing a user and one that represents the main resource
- [x] a user model and user authentication
- [x] complete RESTful routes for at least one of the resources with all CRUD actions
- [x] styled with Bulma
- [x] deployed online and accessible to the public
- [x] includes relationships - embedded or referenced
- [x] includes wireframes designed before building the app


### Tools and Technologies Used

| Back End             | Front End         | Other    |
|----------------------|------------------|----------|
| Node.js (v10.11.0)   | JavaScript (ES6) | Git      |
| Express.js (v4.16.4) | HTML5            | GitHub   |
| MongoDB (v4.0.2)     | CSS3             | InVision |
| Mongoose (v5.3.7)    | SCSS             | Heroku   |
|                      | EJS (v2.6.1)     |          |
|                      | Bulma            |          |


### Wireframes

Before starting to code I made sure I planned the project as thoroughly as I could, including a few wireframes using InVision.

![Wireframes](/wireframes/all-wireframes.png)


### Screenshots

Home page as seen by a user who isn't logged in
![Home page](wireframes/screenshots/shreddit-home.png)

Login page
![Login page](wireframes/screenshots/shreddit-login.png)

Explore page with venues listed
![Index page](wireframes/screenshots/shreddit-explore.png)

Editing a venue
![Edit page](wireframes/screenshots/shreddit-edit.png)


### Known Issues

- layout and styling (elements flow off the screen on the explore page, )
- any user can edit and delete venues and other users' ratings


## Challenges and Wins

When you learn how to code everything you see is new, and even learning how linter works, how it helps you and how to listen to its error messages can be challenging. Mine was under the assumption I was working with React and not EJS, and its messages were at first incomprehensible. However it taught me how to use linter effectively and configure its settings appropriately.

This was the first single page application I ever made, after a week of learning back end basics and templating, and I was battling the flu while working on it. Despite its limitations it was a great way to learn how to put the various web development pieces together and starting to see how things work on the back end.


## Future Work

If I had more time I would make the interface more user friendly and fix the layout issues. I would also add more useful categories to fill in for venues as well as users, calculate average ratings, add like/dislike buttons, and made the app more secure by allowing users to edit and delete only their own venues and ratings.


## Contact

Feel free to check out my [Portfolio](http://terezakinnert.com/) with more projects, or [LinkedIn profile](https://www.linkedin.com/in/terezakinnert/).
