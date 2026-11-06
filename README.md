# world-capitals-quiz

Browser quiz about world capitals: pick a continent and a number of questions, type the capital of each country, and replay only the ones you missed until you get them all right. A 3D globe flies to each country, and an explorer mode lets you click any country to learn about it.

> **About this repository.** A small study project in plain HTML, CSS and JavaScript, with no build step and nothing to install. The 3D globe library is loaded from a CDN. The interface and the country names are in Portuguese.

## What it does

- **Two modes:** tabs at the top switch between the capitals quiz and the explorer.
- **Setup:** choose the whole world or one continent, and 5, 10, 20 or all questions.
- **Questions:** a country appears with its flag and you type its capital. The globe rotates and zooms to that country and highlights it. The answer is checked right away, with the correct capital and a short fact about the place.
- **Forgiving check:** answers are compared after trimming spaces, lowercasing and removing accents (`normalizeAnswer` in `quiz.js`), so "brasilia" matches "Brasília".
- **Results:** score, plus the list of countries you got wrong.
- **Review mode:** a new round with only the missed countries, repeated until none is left, then a final screen with the total and the number of review rounds.
- **Explorer:** click a country on the globe, or search it by name, to see its flag, capital, population, area, languages, currency and a fact. Countries too small for the outline map appear as dots.

## Tech stack

HTML · CSS · JavaScript (no framework) · [Globe.gl](https://globe.gl) (three.js) · [FlagCDN](https://flagcdn.com)

## Data sources

- Country outlines: Natural Earth 1:110m (public domain)
- Coordinates, area, languages and currency: [mledoze/countries](https://github.com/mledoze/countries) (ODbL)
- Population: World Bank, indicator `SP.POP.TOTL`

The data is saved in the repository, so the site does not call any API at runtime.

## Project layout

```
index.html          screens and styles
data.js             192 countries with capital, continent, a fact and ISO code
countries-info.js   extra data per country, keyed by ISO code
countries-geo.js    country outlines for the globe
quiz.js             quiz state, answer check, review rounds
globe.js            3D globe and explorer mode
```

## Getting started

Open `index.html` in a browser. Nothing to install.
