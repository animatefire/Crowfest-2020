# Crowfest 2020
## Overview
 In 2019, before the great pandemic, I was approached to make a website for a local music festival called *Crowfest 2020*, located in the Southern Tier region of Upstate New York. This is that website.
 
 Unfortunately, due to the pandemic, the festival never happened. But working on the website with Vue was a fulfilling and educational experience at the time. Mistakes were made, hair was pulled, teeth were gnashed.

## Features
Crowfeset 2020 features a list of artists that can display certain art and other information about them, such as social proof, websites, as well as time and location of performance at the festival.

## Running the project
You'll need to provide your own Google *Maps* API key. This can be set up in a config.js file in the root of the application, and exported via object syntax.
```
git clone https://github.com/animatefire/Crowfest-2020.git
```
Using terminal, navigate to the root of the cloned repo and run 
```
npm install
npm start
```
## Dependencies 
Unfortunately the project is now 3 years old, and so are all of its dependencies. Below is a list.
- core-js: ^3.6.4,
- mapbox-gl: ^1.8.1,
- vue: ^2.6.11,
- vue-router: ^3.1.6,
- vue2-google-maps: ^0.10.7