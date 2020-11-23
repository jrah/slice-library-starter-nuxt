# Craft Slice

https://craftslice.netlify.app/

- [x] My library contains at least **5 different slices**
- [X] I have updated the [LICENSE](./LICENSE) to credit myself for my library
- [X] The Storybook documentation is hosted here: https://craftslice.netlify.app/
- [X] My library does not contain any non-public licensed assets

> ☝️ For comprehensive rules refer to the contest [blog post](https://prismic.io/blog/slice-contest?utm_campaign=devexp&utm_source=github&utm_medium=slicecontestpost).


## Additional dependencies

- `@nuxtjs/tailwindcss`
- `prismic-dom`
- `nuxt-webfontloader`
- `@storybook/addon-actions`
- `@storybook/addon-knobs`
- `@storybook/addon-essentials`


## Addons and functionality

- `mixins.scss`
Useful Scss mixins mostly for breakpoints. 

- Html Serializers
For ad-hoc use. See inside slice components. 

- Font shades and background colours
Some slice components have a optional background colour. You will need to set the font shade so the text is still visible. 


## Slices

All slices do not have vertical padding to separate concern. 

Functionality has not been extended to all component slices and not all future features have been implement but forms the basis for future development from my personal experience using Prismic. 

### CarouselDisplay

Responsive slider

`htmlserializer` is extended to allow for splitting of text. Can be modified to suit. 

### Splash Display

Responsive splash

- Change direction using direction. Reverse or default.
- Set background colour and font shade
- Remove the image and it becomes a regular text splash

### FAQ section

FAQ sections using `flexbox`

### Pricing Display

- Set background colour and font shade (the top colour is the background color)
- Text split using htmlserializer can be modified in the component
- Buttons can be set to primary, secondary styles (modify array in `Items array`)

### Feature block

`CSS grid` feature block. 

