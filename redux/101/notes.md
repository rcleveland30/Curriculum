# Redux 101
## An overview of managing global state

- When we talk about `global state`, we mean variables that can be accessed throughout the application regardless of what the view may be
- With React and its `useState` hook, state is managed locally– that is, the state variables are exposed only within the component where they are defined
- As such, they are specifically tied the component's corresponding `view` in the browser
- This type of architecture is known as `model-view-controller (MVC)`
- The model means the data, as defined by the state of a variable or variables, available to the view
- The `view` is the data that is rendered in the browser at a given point in time
- And the ``controller` is the logic that decides if the model should change
- Managing global state was possible before Redux but Redux makes it easier
- Redux is based on `flux` which is an `architectural pattern` similar to MVC
- Unlike MVC and Flux, however, Redux is a `library`
- Redux was created by Dan Abramov and Andrew Clark in 2015
- Learning Redux is not easy because there are several pieces to it and they are located in many different files
- Another challenge is that its setup is `non-linear` which means you don't know whether it's working until everything is in place
- Redux introduces several new terms you will need to master
- The `store` is an object that contains keys you defined and whose values may be accessed anywhere in the application
- A `dispatch` is a method provided by the store itself
- It triggers the process which ultimately updates the store and <14> our custom functions
- We do not refer to dispatches as event listeners or event handlers but they play an essential part in responding to events
- The dispatch calls an `action creator` which is a function that does some custom logic and then returns an object
- This object is called the action or the `option object``– it always has a `type` and usually has a `payload`, as well
- You can think of it as the *what* (`payload`) and *where* (`type`) for updating the store
- Once an action object is created, the `reducer` uses it to determine how to update the store
- You can think of a reducer as an `event lister` and an `event hander` in one function
- The reducer has access to the `current state` of the store by default
- This means it can update the store with a value even if said value is dependent on the current value of some key in the store
- These new terms are part of the way `data` flows when state is managed by Redux
- A `selector` is a function that reads a corresponding `slice of state` (e.g. a variable or variables in the store)
- The selector <26> variables in the store to a component or components
- For a component to read variables in the store, it needs the `useSelector` hook
- For a component to write a value to the store, it needs the `useDispatch` hook
- Although learning Redux can be challenging, it used to be worse– the [@reduxjs/toolkit](https://redux.js.org/) library now does a lot of the work for us and is considered the official way to scaffold a React-Redux application as of 2021

---

#### Key terms and phrases
1. action creator
1. action object
1. architectural pattern
1. controller
1. current state
1. Dan Abramov
1. data
1. dispatch
1. event handler
1. event listener
1. exposes
1. Flux
1. global state
1. library
1. model
1. model-view-controller (MVC)
1. non-linear
1. `payload`
1. reducer
1. selector
1. slice of state
1. store
1. `type`
1. `useDispatch` 
1. `useSelector`
1. view
1. view
1. wraps