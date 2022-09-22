# React 103
## React props are similar to the argument and parameter of a JavaScript function

A JavaScript function that takes one or more arguments is defined with the same number of params
```javascript
// definition --> `name` is the <3>
function greeting(name) {
  return `Hello ${name}`;
}

// execution --> `'Andrea'` is the <4>
greeting('Andrea');

````
- As such, they are related and we could say that a parameter and its corresponding argument form a key/value pair
- React components do not have parameters or arguments; instead they have prop name and prop value.
- A prop is a key/value pair where the key acts as the parameter and value acts as the argument.
- In React parlance, we say that props are passed down to a component
- Under the hood, React passes the props to a component on an object, usually called props, although you could name it whatever you want
- In order for the component to access the props being sent to it, it must capture the passed-in `props` object
- To save writing some code, you can also destructuring the object with a set of curly braces.
- Once captured, a prop value can be used within a component by wrapping its corresponding values within a set of curly braces
- Below is a React Greeting component
```jsx
function Greeting(props) {
  return <p>Hello {props.name}</p>;
}
```
- And rendering it looks like this
```jsx
<Greeting name="Andrea" />
```
- Its destructuring equivalent is
```jsx
function Greeting({name}) {
  return <p>Hello {name}</p>;
}
```

---

#### Key terms and phrases
argument
argument
arguments
capture
curly braces
destructure
destructuring
Greeting
key/value
`{name}`
`{name}`
parameter
parameter
parameters
passed down
prop name
props
props
`props`
rendering