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



### Using the Prismic CLI

For convenience and to be sure you are running the correct version of Prismic CLI it has been installed as part of `devDependencies` and aliased to the `prismic` script in this project. Thanks to that you can run the CLI as a package script:

```bash
# Using Yarn
$ yarn prismic <command> <options>
# Using npm
$ npm run prismic -- <command> <options>
```

If you still wish to use the CLI installed globally make sure you are running version `3.8.3-beta.0` or greater:

```bash
# Installing the CLI globally using Yarn (optional)
$ yarn global add prismic-cli@3.8.3-beta.0
# Installing the CLI globally using npm (optional)
$ npm install --global prismic-cli@3.8.3-beta.0

# You can then use the CLI globally...
$ prismic <command> <options>
```

> In the following sections only the Yarn version from above (recommended) will be used in the examples for the sake of simplicity.

### Setting up Prismic and Slice Machine

If you do not own a Prismic account yet you can **create one** for free [here](https://prismic.io/dashboard/signup?redirectUri=/dashboard) or by using the CLI:

```bash
$ yarn prismic signup
# The CLI will then guide you through the process...
```

Once you have a Prismic account, or if you already had one, **log in** within the CLI:

```bash
$ yarn prismic login
# The CLI will then guide you through the process...
```

When logged in, you can then **bootstrap** your Slice Machine project, this will create you a Prismic repository for this project:

```bash
$ yarn prismic sm --bootstrap
# The CLI will then prompt you for a Prismic repository name...
```

Finally, and since that's a requirement for this contest, you will want to bootstrap a Storybook project. Thankfully Slice Machine comes with a handy command for that:

```bash
$ yarn prismic sm --add-storybook
```

This should create a simple Storybook inside your project. Bear in mind though that this one is still quite basic, feel free to go fancy by adding [addons](https://storybook.js.org/addons) and more! (although you might want to [stick with version `5.x.x`](https://github.com/prismicio-community/slice-library-starter-nuxt/issues/2#issuecomment-721650137) of those addons because Slice Machine installs version `2.2.2` of `@nuxtjs/storybook` to prevent some issues) Here's an example of a more elaborated Storybook documentation of a slice library for inspiration: [sms-hoy-storybook.netlify.app](https://sms-hoy-storybook.netlify.app)

> ⚠ Storybook is known for being quite picky with its dependencies. If you experience a blank page when running it with a lot of errors in the browser console try deleting your lock file and installing dependencies again, should fix the issue.

Well done! You are now ready to start developing your slice library with Slice Machine.

## 👩‍💻 &nbsp;Developing

Some quick reminders to help you developing your library with Slice Machine and the Slice Builder. Please refer to the [documentation](https://www.slicemachine.dev/documentation) if you are looking for more in-depth knowledge.

### Creating a Slice

To create a slice run:

```bash
$ yarn prismic sm --create-slice
# The CLI will then guide you through the process...
```

This will create a new directory inside `./slices` named after the provided slice name. Inside it `index.vue` is the slice component itself.

Slices behave just like any regular Nuxt.js component but receives a `slice` prop containing its slice fields. They are run in a Nuxt context meaning that any configuration / module you add to your `nuxt.config.js` file will reflect as expected on those. For example, if you want to use Tailwind CSS, its [setup](https://tailwindcss.nuxtjs.org/setup) remains exactly the same with `@nuxtjs/tailwindcss`.

For comprehensive documentation about creating your own slices check the dedicated [documentation](https://www.slicemachine.dev/documentation/create-your-own-slices-components).

### Launching the Slice Builder

To launch the Slice Builder you need to run 2 terminals: one for Storybook, one for the Slice Builder itself.

```bash
# On a first terminal
$ yarn storybook # or with npm: `$ npm run storybook`

# On the second terminal
$ yarn prismic sm --develop
```

This will launch Storybook on port `3003` and the Slice Builder on port `9999`, you can open a third terminal to create slices from or launch other commands...

> ℹ We are aware that it will be more convenient to launch Storybook and the Slice Builder with a single command and are working on it~

> ⚠ Storybook is known for being quite picky with its dependencies. If you experience a blank page when running it with a lot of errors in the browser console try deleting your lock file and installing dependencies again, should fix the issue.

> ⚠ We noticed that in some rare case you can get stuck in a `401 [Unauthorized]` loop prompting you to log in when running the Slice Machine develop command. If this happens to you check if your Prismic repository was created, if not, try running `$ yarn prismic login` and `$ yarn prismic sm --bootstrap` again.

For comprehensive documentation about using the Slice Builder check the dedicated [documentation](https://www.slicemachine.dev/documentation/slice-builder#using-the-slice-builder).

## 🚀 &nbsp;Deploying Your Storybook

One of the requirements of this contest if to have your Storybook documentation hosted somewhere.

If you are not familiar with hosting no worries! We recommend to either use [Netlify](https://netlify.com) **or** [Vercel](https://vercel.com) and have done most of the setup for you already!

You only need to host the documentation once, no need to have it at multiple location, so just pick one that works for you~

### Hosting on Netlify

To host your Storybook documentation on Netlify go to: [app.netlify.com/start](https://app.netlify.com/start), you might need to create an account or to log in if not already.

Once on the page click "**GitHub**". After granting access to your account you should now be able to see a list of your repositories. Pick the one you worked on.

On the last build options step every default should be good. We already took care of configuring the build command and publish directory through a [netlify.toml](https://docs.netlify.com/configure-builds/file-based-configuration/) file. Click "**Deploy site**" and wait for the magic to happen.

Once the build is finished, head over to the "**Site overview**" tab. The URL of the hosted documentation should be available at the top left of the tab (if Netlify is still building it will display you the build status instead). You can customize it by changing the site name under the "**Site settings**" tab.

Congratulations! You documentation is now hosted and will update itself whenever you commit to your repository.

