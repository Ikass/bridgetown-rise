---
title: Components
description: What components should be made and how
image:
date: 2024-07-02 06:00:00 +0300
categories: todo
---

Generate placeholder description here.

## Components

### Video embed component

Combining `lite-youtube` and `lite-vimeo` plugins, as well as a generic video embed functionality. DSD would make sense, utilizing the `slot` functionality for vimeo and youtube variants.

## DSD Comopnents

Make components, using the Declarative Shadow DOM approach.

## Code snippets

### Images

`picture` element for displaying images in different formats and resolutions.

```html
<picture>
  <source srcset="/images/<%= data.hero_image %>-1200w.webp 1200w,
                  /images/<%= data.hero_image %>-1920w.webp 1920w,
                  /images/<%= data.hero_image %>-2400w.webp 2400w" 
                  type="image/webp">
  <source srcset="/images/<%= data.hero_image %>-1200w.jpg 1200w,
                  /images/<%= data.hero_image %>-1920w.jpg 1920w,
                  /images/<%= data.hero_image %>-2400w.jpg 2400w"
                  type="image/jpeg">
  <img src="images/<%= data.hero_image %>-1200w.jpg" width="1200" height="806" loading="lazy">
</picture>
```

`image-set()` for background images in different resolutions.

```css
/* https://www.debugbear.com/blog/responsive-images#css-syntax-for-responsive-background-images */
/* Fallback */
background-image: var(--hero-gradient-2), url("/images/hero/<%= data.image %>-2400w.jpg");

/* Prefixed */
background-image: var(--hero-gradient-2), -webkit-image-set(
    url("/images/hero/<%= data.image %>-1200w.webp") 1x,
    url("/images/hero/<%= data.image %>-1920w.webp") 2x,
    url("/images/hero/<%= data.image %>-2400w.webp") 4x
      type("image/webp"),
    url("/images/hero/<%= data.image %>-1200w.jpg") 1x,
    url("/images/hero/<%= data.image %>-1920w.jpg") 2x,
    url("/images/hero/<%= data.image %>-2400w.jpg") 4x
    type("image/jpeg")
);

/* Default */
background-image: var(--hero-gradient-2), image-set(
    url("/images/hero/<%= data.image %>-1200w.webp") 1x,
    url("/images/hero/<%= data.image %>-1920w.webp") 2x,
    url("/images/hero/<%= data.image %>-2400w.webp") 4x
      type("image/webp"),
    url("/images/hero/<%= data.image %>-1200w.jpg") 1x,
    url("/images/hero/<%= data.image %>-1920w.jpg") 2x,
    url("/images/hero/<%= data.image %>-2400w.jpg") 4x
    type("image/jpeg")
);
```