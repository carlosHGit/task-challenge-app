# Task-challenge-app

This project allows you to manage and save tasks by using local storage, react context and dedicated frontend to create, remove, update
and filter tasks, according to the user's search parameters, which can be by:
- contents
- labels
- state

## Setting up 🚀

_These instructions will allow you to get a working copy of the project on your local machine for development and testing purposes._

### Requirements 📋


```
- Node js v16+
- npm: 8+
```
### Installation

1.  Install the dependencies and devDependencies:

```sh
  yarn 
```

> Only `yarn` is allowed in order to standardize all node installs, please use [NVM] to manage node versions.

3.  Then start the server:

```sh
  yarn dev
```

## Tests ⚙️

_At the moment there are no dedicated scripts or libraries to carry out the tests_

## Tech Stack🛠️
- [React]
- [Chakra ui] 
- [node.js] 

#
# Documentation

## How did you decide on the technical and architectural options used as part of your solution?

- Considering that it is a small application, it is better to separate the components into small parts, while not exactly applied atomic design, I tried to separate the logic of the components. That is  the reason why you can see component folders like hooks, layouts, helpers, etc.

- The data must be stored in local storage, I considered necessary to make a custom-hook that handles only this purpose

- As css framework, I chose chakra Ui, because it is a framework that allows you to achieve quality UI components in few lines of code, besides that it is completely customizable

- In addition to,  I am using a library to generate the id of the tasks and labels = uuid.


## Are there any improvements I can make to your shipment?

- The application has many helpers, components and constant interactions with the global state, so it would be a great improvement to test the functions (with jest) and components with (react-testing-library), in the critical path. 

- at the moment I have not used routes in the project, on the contrary, the strategy I have chosen for the second view is by modals. But it would be nice to include router to the project and that each task has a personalized view according to the `path/:id`

- the implementation of typescript can be of great help, and since the project is just starting, it is the best time to implement it.

- some components were very loaded with logic, more auxiliary files, functions or refactors could be created to reduce as much as possible the lines of code in the components

- some chakra ui components were too loaded with properties, you could use styles components to create isolated css files for each component to customize the components that have many styles


## How to improve the application?

- The use the local storage is not a very reliable source to manage the information, another improvement would be to use a free backup service to store the application data, an example is firebase.

- An improvement could be to use next js to use vercel as App host and make deploys faster.

- it would be a great help to use prettier, Eslint and with husky to automate the code checks every time a commit is made, thus guaranteeing a standard among all those who want to collaborate with the project.



# Disclaimer
although the project looks very loaded with libraries, in reality it is not, 4 libraries belong to chakra ui, and a fifth one is the one used to generate the uuid, otherwise everything is done based on java script and react.

