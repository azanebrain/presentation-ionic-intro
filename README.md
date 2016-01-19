# Ionic Intro

This contains the demo app code for my [Ionic Intro Presentation](https://azanebrain.github.io/presentations/ionic-intro). Presented at [Front End Authority](http://FrontEndAuthority.org) in January 2016.

## Setup

You will need [NPM](https://npmjs.com) and [Ionic Cli](http://ionicframework.com/docs/cli/) to get started.

Follow the [official node installation instructions](https://docs.npmjs.com/getting-started/installing-node) to get node on your machine. This will give you *npm* out of the box, which lets you run node commands from the terminal (aka: *Command Line* or *CLI* for short).

Once node is installed, run the following commands to get the Ionic Cli.

```
npm install -g cordova ionic
```

Now that you have the core utilities, you can download this project from GitHub in one of two ways:

1) Clone the repository
`git clone git@github.com:azanebrain/presentation-ionic-intro.git`

2) Download and unzip the package from  [here](https://github.com/azanebrain/presentation-ionic-intro/archive/master.zip)

## Run

In the terminal, from the directory with this project, run:

`npm start`

This runs `ionic serve` which will open up the app at [hocalhost:8100](http://localhost:8100) in your main browser with livereload. As you make changes to this code, they will instantly update 

If this command complains and throws errors, make sure you've installed all of the dependencies with

`npm install`

You can also run iOS and Android side by side with: `ionic serve --lab`

# Background (what's already been done)

The code in this repo is not an out-of-the-box Ionic app. I made the following changes:

- Installed with Ionic CLI tool and the __Sidemenu__ template.
`ionic start -a "Ionic Intro" sidemenu`
- Added an NPM script that will let you use `npm start` to run the default Ionic serve command
- Add the Android build (iOS is supported out of the box, however, running this command will add some important configuration assets. You will also need the platform installed on your machine. Read the [installation instructions](http://ionicframework.com/docs/guide/installation.html) if you run into errors
```
ionic add platform android
ionic add platform ios
```
- Change the default "Playlist Demo" into an "Event Demo" focused on Front End Authority. This adds a new Home template, and lists the event ID on the event's view.
<<<<<<< HEAD
- Added examples to pull data from a JSON file, a WordPress site, and a saved Meetup API call to pull all of Front End Authority's past events
=======
- Added examples to pull data from a JSON file or a WordPress site

- asana has the rest of the list


Your Ionic project is ready to go! Some quick tips:

 * Add a platform (ios or Android): ionic platform add ios [android]
   Note: iOS development requires OS X currently
   See the Android Platform Guide for full Android installation instructions:
   https://cordova.apache.org/docs/en/edge/guide_platforms_android_index.md.html

 * Build your app: ionic build <PLATFORM>

 * Simulate your app: ionic emulate <PLATFORM>

 * Run your app on a device: ionic run <PLATFORM>
>>>>>>> b02fe05... Add npm start command :shipit:

Good luck, and feel free to submit a [Pull Request](https://github.com/azanebrain/presentation-ionic-intro/pulls) if you notice anything that should be changed.

Happy coding

~ AJ Zane (@azanebrain)
