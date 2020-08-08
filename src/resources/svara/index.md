---
type: 'portfolio'
title: 'svara'
date: '2020-08-08:00:00.000Z'
path: '/portfolios/svara/'
images: [
  'svara/svara-01.png',
]
---

# Svara

Svara is a generative music application based on the traditional rules of Hindustani ragas. Ragas being rule based systems in which to improvise, they are a perfect source for a generative framework and a great opportunity to execute a historical tradition in a modern medium.

The application currently exists as a proof of concept and can be found at [svara.dev](https://svara.dev).

## Links

- [Project web site](https://svara.dev)
- [Github](https://github.com/ryantoddgarza/svara)

## Tech stack

- React.js
- SASS
- Webpack
- Web Audio API
- Canvas API
- Web Worker API

## Details

Being truly generative, no musical motifs are predetermined and parameters such as tempo, favored musical intervals, and random seeding are determined as the user accesses the application. All audio synthesis is done in the browser. Everything heard occurs in real time.

In the visualization section of the app, the user is shown frequency and amplitude feedback as well as relevant information about the raga being performed. For example, one of the rules of a raga is the time of day which it should be performed. The day being traditionally divided into eight equal parts beginning at 6 am, the users local time is used to make the appropriate selection.

Additional rules responsible in generating the piece are the ascending scale, an altered descending scale, primary character note, supporting character note, common melodic themes, and suggested rhythmic structure.

## In progress

In the next iterations of the application, I plan to expand the raga API, make the resource publicly available, and add an additional dataset comprised of traditional rhythmic structures called taals. I will continue to evolve the app with more advanced synthesis techniques and refine the logic of the improvisation logic. It takes time to learn how to play music and this app just started.
