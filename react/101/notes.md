# React 101
## A brief introduction to React

### React
- React is a library available at [NPM](https://www.npmjs.com/package/react)
- As such, any project built with React will have the file package.json even though React is used to write front-end code
- A React project is built from separate components which keep the code compartmentalized
- It was created and is maintained by developers at Facebook
- React uses a **shadow DOM** to update the HTML DOM; your React code should not manipulate the HTML DOM directly
- React attaches itself to the DOM through the entry point which is located in **src/index.js**
- All of the code related to components is contained with the **src** directory

### Components
- Components are functions that share similarities with JavaScript render functions
- They must always `return` JSX
- JSX stands for JavaScript XML
- It looks like HTML but it is not HTML
- Each element in JSX must have either a corresponding closing tag or self-closing tag
- JSX can have only one parent element; all others must be nested inside of it
- Components are exposed and consumed for use through `import` and `export` statements; this makes it quite easy to pass them around as needed
- Elements within JSX have props, short for *properties*, but they look like HTML attributes
- Some of them are actually identical to HTML attributes, such as `id`, but others are different, such as `className` instead of `class`
- Unlike the functions you have learned about up until now, a component is not called but is rendered instead
- Rendering happens when the component is included within the entry point of another component
- The components form a tree whose root is contained within React's render method of the entry point.
- Each component name in React must begin with a capital letter but the filename itself does not have to be capitalized.
- The extension of the filename can be **.js** or **.jsx** but .jsx is preferred
- A component's `return` is not followed by any data type or data structure that you have previously learned about
- If the component returns a single element, it is written on one line
```jsx
return <p>Hello world</p>;
```
- However, a multi-line return needs parentheses.
```jsx
return (
  <div>
    <p>Hello</p>
    <p>world</p>
  </div>
);
```

---

#### Key terms and phrases
a capital letter
capitalized
`className`
components
data structure
data type
entry point
entry point
`export`
Facebook
functions
HTML
HTML
`id`
`import`
JavaScript XML
.jsx
JSX
JSX
library
manipulate
package.json
parent
parentheses
props
render
render
rendered
self-closing
shadow DOM
single element
src