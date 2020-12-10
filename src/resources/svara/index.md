---
type: 'portfolio'
title: 'Svara'
date: '2020-08-08:00:00.000Z'
path: '/portfolios/svara/'
featured: true
summary: 'Svara is a generative music application based on the traditional rules of Hindustani ragas.'
images: [
  'svara/images/svara-01.jpg',
]
---

# Svara

Svara is a generative music application based on the traditional rules of Hindustani ragas. Ragas being rule based systems in which to improvise, they are a perfect source for a generative framework and a great opportunity to execute a historical tradition in a modern medium.

The application currently exists as a proof of concept and can be found at [svara.dev](https://svara.dev).

## Role

Concept, Developer and Design

## Details

<article class="tech-card">

Tech stack

- ReactJS
- SASS
- Webpack
- Web Audio API
- Canvas API
- Web Worker API

[Visit site →](https://svara.dev)
<br>
[GitHub →](https://github.com/ryantoddgarza/svara)

</article>

### Overview

Being truly generative, musical motifs are not predetermined and the time which a user accesses the application defines parameters such as tempo, favored musical intervals, and random seeding. All musical processes occur in real time.

The visualization section of the app shows the user frequency and amplitude feedback as well as relevant information about the raga. For example, one of the rules of a raga is the _prahar_ or time of day in which it should be performed. The traditional system divides a day into eight equal parts beginning at 6 am and this application references the user’s local time to make the appropriate selection.

Additional rules implemented in generating the piece are the ascending scale, an altered descending scale, primary character note, supporting character note, common melodic themes, and suggested rhythmic structure.

### Ongoing

In future iterations of the application, I plan to expand the raga API, make the resource publicly available, and add an additional dataset comprised of traditional rhythmic structures called _taals_. I will continue to evolve the app with more advanced synthesis techniques and refine the logic of the improvisation logic. It takes time to learn how to play music and this app just started.
