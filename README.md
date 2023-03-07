# React Redux Simple Website Builder

## Introduction

This task evaluates the candidate's skills in `React` and `Redux`.

Welcome to the Simple Website Builder application. This app is an initial implementation of WYSIWYG editor that enables users to build a simple website just by picking HTML tags from the widget and filling all the attributes they need.

# Setup

This react application was generated using [Create React App](https://github.com/facebook/create-react-app). It has all the standard setups.

Follow these steps if you are using zip/git mode (i.e. not available inside Devskiller in-browser IDE):

1. `npm install` – install dependencies
2. `npm test` – run all tests (this will be used to evaluate your solutions)
3. `npm start` – run the project locally

## Problem Statement

1. Make tests pass by implementing missing features in the production code.
2. Make the app work in a way described below. The majority of the code is committed, but there are some missing pieces that have to be implemented.

## TODOs

1. Reshape the root reducer in order to allow adding new reducers in the future. Currently the root reducer _is_ just the `componentsReducer` (from `store/components/reducer.js`) and the root state object reflects the state object of `componentReducer`. Use reducer composition tools (built in to redux) to nest the `componentsReducer` under `components` key (in other words, `items` should be available under `state.components.items` instead of `state.items`).
2. The `removeComponent` action creator is missing. It should be implemented.
3. Handle the `ADD_COMPONENT` action in `store/components/reducer.js`. It should add the new component to the item's array and store the component as a `currentlyEdited` one.
4. Handle the  `UPDATE_COMPONENT` action in `store/components/reducer.js`. It should update the passed component in the item's array and nullify `currentlyEdited` property. Make sure to not modify the items array if the updated item doesn't exist in the store. 
5. Handle the `REMOVE_COMPONENT` action in `store/components/reducer.js`. It should remove the passed component from the item's array and nullify `currentlyEdited` property.
6. Handle the `SET_EDITED_COMPONENT` action in `store/components/reducer.js`. It should set `currentlyEdited` property to the passed component.
7. The `a` HTML tag (link) has a missing implementation in the `components/Components/A.js` file that needs to be fixed. After clicking on the link, a new tab should open. Pass `values` prop object that will contain `href` (url to open), and `label` (link's label) properties. Browsing context that is created by following this link should not have the opener browsing context (for example, new window shouldn't be able to use `window.opener` JS property to change original page). Furthermore, referrer information shouldn't be passed to the new tab. The component should render just an `<a/>` tag with proper attributes and content.
8. The `img` HTML tag (image) has missing implementation in the `components/Components/Img.js` file that needs to be fixed. Pass `values` prop object that will contain `alt` (alternative text describing image), and `src` (url of the image) properties. The component should render just an `<img/>` tag with `alt` and `src` attributes.
9. The items of the components picker (`<div/>` elements) should be greyed out with the `components-picker__component--disabled` class and they should not be clickable when a component is being edited. Pass `lockedPicker` boolean prop to `ComponentPicker` that will tell it if `components-picker__component--disabled` should be applied. Make `lockedPicker` a required prop. 

## Good Luck!
