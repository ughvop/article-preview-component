# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

First JavaScript project, I learned the following:

- addEventListener()
  used it for Click event

- classList.add() and classList.remove
  
  for add():

```js
lightShare.addEventListener("click", function () {
  beforeClicked.classList.add("hide");
  afterClicked.classList.add("show");
});
```

for remove():

```js
darkShare.addEventListener("click", function () {
  afterClicked.classList.remove("show");
  beforeClicked.classList.remove("hide");
});
```

## Author

- Frontend Mentor - [@ughvop](https://www.frontendmentor.io/profile/ughvop)
- Twitter - [@ughvop](https://www.twitter.com/ughvop)
