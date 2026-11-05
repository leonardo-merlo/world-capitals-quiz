# world-capitals-quiz

Browser quiz about world capitals: pick a continent and a number of questions, type the capital of each country, and replay only the ones you missed until you get them all right.

> **About this repository.** A small study project in plain HTML, CSS and JavaScript, with no build step and no dependencies. The interface and the country names are in Portuguese.

## What it does

- **Setup:** choose the whole world or one continent, and 5, 10, 20 or all questions.
- **Questions:** a country appears and you type its capital. The answer is checked right away, with the correct capital and a short fact about the place.
- **Forgiving check:** answers are compared after trimming spaces, lowercasing and removing accents (`normalizeAnswer` in `quiz.js`), so "brasilia" matches "Brasília".
- **Results:** score, plus the list of countries you got wrong.
- **Review mode:** a new round with only the missed countries, repeated until none is left, then a final screen with the total and the number of review rounds.

## Tech stack

HTML · CSS · JavaScript (no framework)

## Project layout

```
index.html   screens and styles
data.js      192 countries with capital, continent and a fact
quiz.js      quiz state, answer check, review rounds
```

## Getting started

Open `index.html` in a browser. Nothing to install.
