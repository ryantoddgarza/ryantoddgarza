---
category: 'music'
featured: true
title: 'Superimposed Recursive Metric Modulation - Rough Draft'
date: '2020-08-23T23:44:00.000Z'
tags: ['music', 'rhythm', 'meter']
summary: 'Through subsequent modulations to closely related meters, distantly related meters can be accessed while maintaining a relationship to the original.'
images: ['https://images.unsplash.com/photo-1532908336432-6ab8ec3d56c1?ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&w=1600&q=80']
---

## Concept

It is my intention to posit "superimposed recursive metric modulation" as a musical device used to alter the substructure upon which commonly used rhythmic devices are based.

Metric modulation as such is a change in meter based on a note value from an existing meter. Recursion is a repeating process whose output at each stage is applied as input in the succeeding stage. Thus, recursive metric modulation suggests that through subsequent modulations to closely related meters, distantly related meters can be accessed while maintaining a relationship to the original.

More specifically, the technique I would like to propose is the superimposition of metric modulations over one or more of the preceding iterations to create rhythmic dissonance.

## Rhythm Basics

A brief overview of basic rhythmic concepts for sake of clarity in the terms used throughout.

### Organization of Time

The organization of time in music can be reduced fundamentally to _pulse_, _tempo_, and _meter_. [^1]

Each occupies a specific role in the way time is perceived with varying degrees of correlation to one another. When considering a state of modification, all three are highly correlated. Changes to any one results in the perceived alteration of another. However, attempting to abstract the autonomous nature of each, meter appears to be the most agnostic of the three as it can exist as data devoid of tempo and pulse.

**Pulse**, or beat, is the regularly recurring underlying pulsation we perceive that compels music to progress through time. Pulse makes us react kinesthetically to music. We tap our feet, we dance, we march, or we may just “feel” the pulse internally. In a piece of music, some durational value is assigned to be the pulse and all other durations are proportionally related.

**Tempo** is the relative speed or rate at which metrical pulses occur over time. Tempo is expressed as either a descriptive term or a metronomic value.

**Meter** is a ratio that determines which durational value is assigned to represent the fundamental background pulse, how these pulses are grouped together in discrete segments, how these pulses naturally subdivide into lesser durational values, and the relative strength of perceived accents within segments or groupings of pulses.

### Metric Levels

Meter can be separated into three basic levels: _beat level_, _multiple levels_, and _division levels_. In relation to the _beat level_, multiples yield slower and quotients faster durational values.

An elementary example being that a value of 1/4 (quarter note) at the **beat level** multiplied by 2 results in 1/2 (half note), a value at the **multiple level**; divided by 2 results in 1/8 (eighth note), a value at the **division level**.

## Metric Modulation

> ...metric modulation is a technique in which a rhythmic pattern is superposed on another, heterometrically, and then supersedes it and becomes the basic meter.
> <cite>-- Nicolas Slonimsky [^2]</cite>

What differentiates a metric modulation from any other tempo change is that the superposed rhythm is based on a note value from the preceding meter, making the duration of the minimal denominator consistent. For example, the superposition of 6/8 over 4/4 yields a consistent 1/8 note value.

The formula for a modulation is:

`newTempo / oldTempo = newNumberOfMinDenominator / oldNumberOfMinDenominator`.

## Recursion

A process exhibits recursive behavior when the procedure refers to itself. So a distinction must be made between the process and the execution of the process. The Fibonacci sequence is a classic example of recursion as each step requires input from a previous step's output to be executed.

## Process

The process to be iterated:

- Quantify the metric levels in a given meter
- Designate a metric level as the basis for a new grid (_beat level_)
- Apply an operation to the _beat level_

### Quantify Metric Levels

Quantify the durational values that make up a given meter as the appropriate metric levels.

### Designate a Beat Level

Once the existing metric levels have been identified, we can designate a durational value to define the basis for the modulation; referred to here as the _beat level_.

### Basic Operations

There are three basic operations that can be applied to a durational value.

- Group
- Multiply
- Divide

**Grouping** is the process of segmenting lesser values to imply a desired pulse.

**Multiply** the _beat level_ value to render larger segments of time.

**Divide** the _beat level_ value to render smaller segments of time.

### Example 1

Here is a simple example to show how a complex rhythmical grid can be achieved with just one iteration of recursivity.

_Iteration 1_

- From a 4/4 meter
- Take the quarter note
- Regroup from 4 into 5

What results is a 5 beat phrase superimposed over 4. The common minimum denominator remaining 1/4.

_Iteration 2_

- From the new 5/4 meter
- Take the length of the 5 note phrase
- Divide by 2

What results is a half note in relation to the downbeat of the 5/4 phrase but something vastly different in relation to the original 4/4 meter.

#### Example 1 - Video

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/wlntlvO6x6g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Step by Step Abstraction

Simple operations can imply complexity. This example shows the step by step abstraction from a common meter in small increments. In western music, we are typically comfortable with operations based on 2 and 3, so all it takes is one unfamiliar prime (5 in this case) to detach a listener's ear from what is expected and create rhythmic tension.

- Original meter is 4/4
- Divide the entire measure by 5. 1/5 is the beat level
- Multiply 1/5 by 2. 2/5 is the beat level
- Multiply 1/5 by 3. 3/5 is the beat level
- Divide 3/5 by 2. 3/10 is the beat level

#### Step by Step Abstraction - Video

_Apologies. The 3/5 section is incorrectly performed in this video. New video soon._

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/0Ym9WgisuBw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<!-- Footnotes -->

[^1]: [Music Theory](https://2012books.lardbucket.org/books/music-theory/index.html) by Mark Andrew Cook is licensed under [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/)
[^2]: Slonimsky, Nicolas. "Metric Modulation." _A Dictionary of the Avant-Gardes_, third edition, edited by Richard Kostelanetz, Routeledge, 2019, pp. 281.
