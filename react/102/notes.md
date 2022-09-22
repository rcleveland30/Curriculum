# React 102
## Managing state in React with `onClick`

### State
- The term we use to refer to the value of some variable in memory at a given moment in time is state.
- Understanding how and when state changes is critical to becoming a strong developer
- A hook is simply a function (before hooks, some developers would have called it a helper function)
- All hooks in React are named exports so to import a React hook, curly braces are necesary
- Managing state requires a named noun and a named verb of your choice (the former holds a value while the latter sets the value)
- The syntax includes a destructuring assignment on an array. 
- The `useState` hook is executed with `useState()`
- Passing an argument to the `useState` hook is optional but doing so will set the initial state.
- The value for state can be accessed anywhere within the component but must be enclosed within a set of curly braces.

### Click handlers
- With React components, we no longer need the `.addEventListener` method to listen for events, such as clicks
- And we don't need to worry about event delgation either since it is no longer necessary ([source](https://github.com/facebook/react/issues/13635))
- For click events, we use the `onClick` prop directly on the element
- The value for this prop is known as the event handler.
- The event handler can be defined inline or as a separate function; in either case, it changes state via the named data-type defined in the syntax that calls the `useState` hook
- Whenever state changes, React automatically re-renders the component so that UI properly reflects the change

---

#### Key terms and phrases
`.addEventListener`
argument
array
changes
curly braces
curly braces
destructuring assignment
event handler
event handler
event delegation
executed
function
helper function
initial state
JSX
memory
named
noun
`onClick`
re-renders
state
verb
verb