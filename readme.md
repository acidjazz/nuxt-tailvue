## nuxt-tailvue
### Nuxt.js module for for tailvue components
> This requires [Nuxt.js](https://nuxtjs.org) with the [Tailwind CSS](https://tailwindcss.nuxtjs.org) module


[![](https://img.shields.io/npm/v/nuxt-tailvue.svg?logo=npm&style=flat-square)](https://www.npmjs.com/package/nuxt-tailvue)
[![](https://img.shields.io/badge/nuxt.js-module-04C690.svg?style=flat-square)](https://nuxtjs.org)
[![](https://img.shields.io/npm/dt/nuxt-tailvue.svg?style=flat-square)](https://www.npmjs.com/package/nuxt-tailvue)
[![](https://img.shields.io/github/license/acidjazz/nuxt-tailvue?style=flat-square)](https://www.npmjs.com/package-nuxt-tailvue)

## Quick Setup
 1. Add the `nuxt-tailvue` dependency to your Nuxt.js project
 ```bash
 npm install nuxt-tailvue
 # OR
 yarn add nuxt-tailvue
 ```
 
 2. Add `nuxt-tailvue` to the `modules` section of `nuxt.config.js` (this enables all tailvue components)
 ```js
 {
   modules: [
     ['nuxt-tailvue', {all: true}],
   ]
 }
 ```
 
 3. If you're using [Purge](https://tailwindcss.com/docs/controlling-file-size), add this line to the content section of `tailwind.config.js`
 
 ```js
 module.exports = {
     content: [
       'node_modules/tv-*/dist/tv-*.umd.min.js',
     ],
   }
````

## TypeScript
Add the types to your "types" array in `tsconfig.json` after the `@nuxt/types` (Nuxt 2.9.0+)

```json
    "types": [
      "@nuxt/types",
      "nuxt-tailvue",
    ]
```

### tv-toast
<p align="center">
  <img src="media/toast.png" width="600" />
</p>

- Please refer to the [tv-toast readme](https://github.com/acidjazz/tv-toast)


### tv-modal
<p align="center">
  <img src="media/modal.gif" width="600" />
</p>

- Please refer to the [tv-modal readme](https://github.com/acidjazz/tv-modal)


### tv-button
<p align="center">
  <img src="media/buttons.gif" width="600" />
</p>

- Please refer to the [tv-button readme](https://github.com/acidjazz/tv-button)

### tv-icon
<p align="center">
  <img src="media/icons.gif" width="600" />
</p>

- Please refer to the [tv-icon readme](https://github.com/acidjazz/tv-icon)
