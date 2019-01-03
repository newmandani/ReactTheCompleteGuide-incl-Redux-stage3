# Basic syntax assignment problem
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)
  - Create TWO new components: UserInput and UserOutput
  - UserInput should hold an input element, UserOutput two paragraphs
  - Output multiple UserOutput components in the App component (any paragraph texts of your choice)
  - Pass a username (of your choice) to UserOutput via props and display it there
  - Add state to the App component (=> the username) and pass the username to the UserOutput component
  - Add a method to manipulate the state (=> an event-handler method)
  - Pass the event-handler method reference to the UserInput component and bind it to the input-change event
  - Ensure that the new input entered by the user overwrites the old username passed to UserOutput
  - Add two-way-binding to your input (in UserInput) to also display the starting username
  - Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets

### Installation

This solution use [Node.js](https://nodejs.org/) v6+ to run as standalone app.
Also App is written with [React](https://reactjs.org) & ReactDOM components you also have if you can start create-react-app or reed about oninstallation section of this document.
Install the dependencies and start the server.

```sh
$ cd ReactTheCompleteGuide-incl-Redux-stage3
$ npm install
$ npm start
```

### Plugins

```sh
$ npm install -g create-react-app
```
Instructions on how to use this great app in your own application are linked below.

| Plugin |
| ------ |
| https://github.com/facebook/create-react-app  |
