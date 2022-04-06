# Tweeter Project

Tweeter is an amazing single-page Twitter clone.

This repository is a demonstration of the HTML, CSS, JS, jQuery and AJAX front-end knowledge, along with my Node, Express back-end knowledge.

## Getting Started

1. Install dependencies using the `npm install` command.
2. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
3. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- body-parser
- chance
- compression
- timeago.js
- MD5
- normalize.css
- lottie-player
- jQuery
- fonts.googleapis.com

## Features
- Communicates with a server via AJAX
- Tweets instantly without refresh
- Error handling setup for Tweets
- Prevents XSS injection
- Supports all device sizes
- LottieFile Animation for Background
- SVG Icon's from Font generated from https://icomoon.io/ 

## Screenshots

* *Fully Responsive - Supports all devices*
  ![Responsive Design](https://github.com/MattSeligman/tweeter/blob/master/docs/responsive-design.jpg?raw=true)

* Includes Scroll to the top
  ![Scroll to the Top](https://github.com/MattSeligman/tweeter/blob/master/docs/includes-scroll-to-the-top.jpg?raw=true)

* Prevents using more than the limited amount of characters.
  ![Limits Characters](https://github.com/MattSeligman/tweeter/blob/master/docs/limits-characters.jpg?raw=true)

* *Tests for Inputs if they haven't been included*
  ![Tests for Inputs](https://github.com/MattSeligman/tweeter/blob/master/docs/tests-for-inputs.jpg?raw=true)

* Detects if "require" removed from textarea and prohibits blank tweets.
  ![Prevents Input](https://github.com/MattSeligman/tweeter/blob/master/docs/detects-missing-information.jpg?raw=true)

* *Wraps Text (Preventing Design breakage)*
  ![Wraps text](https://github.com/MattSeligman/tweeter/blob/master/docs/text-wraps.jpg?raw=true)

* High Optimization though room for improvement.
  ![Wraps text](https://github.com/MattSeligman/tweeter/blob/master/docs/room-for-improvement.jpg?raw=true)


## Functional Requirements
-----------------------

*   A client-side Single Page App (SPA)
*   Communicates with a server via AJAX

### Display Requirements

*   Navigation Bar:
    
    *   is fixed to the top
    *   has padding on both sides
    *   contains Compose button  
        
*   Compose Tweet box:
    
    *   is displayed above the list of tweets
    *   contains a `form` for submitting tweets, which itself contains:
        *   a `textarea` for new tweet content
        *   a left-aligned `button` for submitting new tweets
    *   contains a Character Counter, right-aligned, which by default shows 140
*   List of Tweets:
    
    *   displays tweets in reverse-chronological order (that is, by creation time descending)
*   Individual Tweets have a:
    
    *   header, which contains the user's:
        *   avatar, on the left
        *   name, on the left and after the avatar
        *   handle, on the right
    *   body, which contains the tweet text
    *   footer, which displays:
        *   how long ago the tweet was created, on the left
        *   "Flag", "Re-tweet" and "Like" action icons on the right

### Behaviour

#### Individual Tweets

*   When the user hovers over a tweet, that tweet should display a box shadow.

#### Action Icons

*   When the user hovers over an icon ("Flag", "Re-tweet" and "Like") the icon should change colour.

#### Character Counter

*   When a user types into the Compose Tweet `textarea`, the Character Counter is updated to show how many characters a user may still type (subtracting the number of characters they've typed from the maximum allowable character count of 140)
    
*   The Character Counter turns red (or similar) when more than 140 characters have been typed into the Compose Tweet `textarea`, and it shows how many characters over the 140 limit have been typed (using a negative number)
    

#### Compose Tweet

*   When a user submits an invalid tweet (the tweet `textarea` is empty or contains more than 140 characters), an appropriate error message is displayed
    
*   When a user submits a valid tweet, the list of tweets is refreshed (displaying the new tweet), the Compose Tweet `textarea` is cleared, and the Character Counter is reset (to 140)