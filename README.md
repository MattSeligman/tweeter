# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

This repository is the starter code for the project: Students will fork and clone this repository, then build upon it to practice their HTML, CSS, JS, jQuery and AJAX front-end skills, and their Node, Express back-end skills.

## Getting Started

1. [Create](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) a new repository using this repository as a template.
2. Clone your repository onto your local device.
3. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- body-parser
- chance
- compression
- timeago.js
## Features

- Communicates with a server via AJAX
- Tweets instantly without refresh
- Error handling setup for Tweets
- Prevents XSS injection
- Supports all device sizes
## Screenshots

* *Fully Responsive - Supports all devices*
  ![Responsive Design](https://github.com/MattSeligman/tweeter/blob/master/docs/responsive-design.jpg?raw=true)

* Includes Scroll to the top
  ![Scroll to the Top](https://github.com/MattSeligman/tweeter/blob/master/docs/includes-scroll-to-the-top.jpg?raw=true)

* Prevents using more than the limited amount of characters.
  ![Limits Characters](https://github.com/MattSeligman/tweeter/blob/master/docs/limits-characters.jpg?raw=true)

* Detects if "require" removed from input and prohibits blank tweets.
  ![Prevents Input](https://github.com/MattSeligman/tweeter/blob/master/docs/detects-missing-information.jpg?raw=true)

* *Tests for Inputs if they haven't been included*
  ![Tests for Inputs](https://github.com/MattSeligman/tweeter/blob/master/docs/tests-for-inputs.jpg?raw=true)

* *Wraps Text (Preventing Design breakage)*
  ![Wraps text](https://github.com/MattSeligman/tweeter/blob/master/docs/text-wraps.jpg?raw=true)