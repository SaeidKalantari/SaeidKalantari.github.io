# Project 4 - By Saeid Kalantari

ENGO 651 - Adv. Topics on Geospatial Technologies
The goal of Lab 4 is to:
* Gain experience with the MQTT protocol.
* Learn to build a simple IoT Geoweb app

## Table of Contents

   * [Introduction](#introduction)
      * [Pages](#pages)
      * [CSS](#css)
      * [MQTT](#MQTT)
      * [Leaflet](#Leaflet)
      * [Geolocation Javascript API](#GeolocationJavascriptAPI)
   * [Imports](#Imports)
      * [Links](#links)
      * [Scripts](#Scripts)
   * [Contributors](#contributors)



## Introduction
My name is Saeid Kalantari, and in this project, we’ll build a simple web application that uses the javascript geolocation API and turn any smartphone into an IoT sensor. We will also build a simple web mapping application to visualize the location of the smartphone sensor.
### Pages
There are a main page in this project: 1. index.html (Home)
If you navigate to the project folder and run "http-server" in the terminal, you can access the website at http://localhost:8080. I pushed the finished version of this project to github.com. You can access it using this link: https://saeidkalantari.github.io/

### CSS
There is a "main.css" file in the CSS folder that holds more than five different CSS properties and different types of CSS selectors. I used the #id selector and the .class selector in this file. Also, it includes one mobile-responsive @media query, such that something about the styling changes for smaller screens.
### MQTT
MQTT stands for Message Queuing Telemetry Transport which is known as one of the most used protocols in IoT networks. MQTT is designed to enable Machine to Machine communication in a publish/subscribe architecture. You will no longer need to stack your messages in the queue and wait for a response to send other messages to a server. MQTT is a lightweight protocol that is able to work in low-bandwidth networks as well as networks with various latency levels. One of the most popular applications of MQTT is to get the latest changes of devices/sensors' status and visualize them on a web client application. In this project, you will get the latest location of your device by MQTT protocol and visualize it on the map.
### Leaflet
For this project, you’ll need to use Leaflet.js as the JavaScript library for interactive maps. Leaflet is one of the most popular web mapping APIs.
### GeolocationJavascriptAPI
From Mozilla.org, “the Geolocation API allows the user to provide their location to web applications if they so desire. For privacy reasons, the user is asked for permission to report location information.” You can learn more about it here: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API

## Imports
In this project, I used links and scripts to change the UI and UX of the web pages and showing the map.
### Links
1. Bulma
2. leaflet.css
3. leaflet.js
4. mqttws31.js
5. jquery.min.js
### Scripts
1. map_style.js: Javascript code for showing the Leaflet map.

## Contributors
Saeid Kalantari - Geomatics Engineering Ph.D. student University of Calgary, Canada 3-29-2022

