# Project 4 - By Saeid Kalantari

ENGO 651 - Adv. Topics on Geospatial Technologies
The goal of Lab 0 is to:
* Gain experience with the MQTT protocol.
* Learn to build a simple IoT Geoweb app

## Table of Contents

   * [Introduction](#introduction)
      * [Pages](#pages)
      * [CSS](#css)
      * [SCSS](#scss)
   * [Uploads](#uploads)
      * [Easter-Egg](#easteregg)
   * [Imports](#imports)
      * [Links](#links)
      * [Scripts](#Scripts)
   * [Contributors](#contributors)



## Introduction
My name is Saeid Kalantari, and this is my project for Lab 0. In this project, we use HTML, CSS, and Javascript to build and design a personal webpage about ourselves, one of our interests, or any other topic of our choice. I used Bootstrap to design the overall theme of the webpage and then customized it based on the project requirements. One of the main challenges was to select the subject for this project. I designed a resume webpage, and at the end, I included a Nostalgia part in the "Skills" page. Then I built an easter egg that is hidden, and you should uncomment it in the "main.css" file to see the results on the "Skills" page.
### Pages
There are four main pages in this project: 1. index.html (Home) 2. education.html 3. skills.html 4. contact.html
If you navigate to the project folder and run "http-server" in the terminal, you can access the website at http://localhost:8080.
You can navigate between each of these pages using the Navbar at the top of the pages. You can go back and browse all of the pages that are built in this project. I pushed the finished version of this project to heroku.com. You can access it using this link: https://saeidresume.herokuapp.com/
This can not show you the easter-egg part. For that, you need to download the project and uncomment the main.css file yourself.
1. index.html (Home): this page is an introduction about me and the recent videos I posted on YouTube.com
2. education.html: You can see my background and research interests on this page.
3. skills.html: this page is a showcase of my skills. You also can play a game if you're bored:) This page also has the easter-egg on it.
4. contact.html: On this page, you can see the various ways you can contact me. The contact form needs a backend. Therefore, it's just for demonstration.

### CSS
There is a "main.css" file in the CSS folder that holds more than five different CSS properties and different types of CSS selectors. I used the #id selector and the .class selector in this file. Also, it includes one mobile-responsive @media query, such that something about the styling changes for smaller screens.
### SCSS
There is an "extra.scss" file in the CSS folder that holds one SCSS variable, one example of SCSS nesting, and one use of SCSS inheritance. 
For changing this file, you should head to CSS folder then run: "sass extra.scss:extra.css" in the terminal. Then go back to the project folder and run "http-server" again.



## Uploads
This folder consists of pictures, gifs, a pdf, and favicons that are used in this project.
### Easter-Egg
There is an "easter" folder under the "uploads" folder. This folder is used for the easter-egg hidden on the "Skills" page. By uncommenting the easter-egg part of the "main.css" and refreshing (Shift+F5) the "Skills" page, you can see these items in practice.

## Imports
In this project, I used links and scripts to change the UI and UX of the web pages.
### Links
1. bootstrap.min.css stylesheet
2. bootstrap.bundle.min.js
3. popper.min.js
### Scripts
1. jquery-1.12.4.min.js
2. bootstrap.min.js
3. function myFunction()

## Contributors
Saeid Kalantari - Geomatics Engineering Ph.D. student University of Calgary, Canada 1-21-2022

