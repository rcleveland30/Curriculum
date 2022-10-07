# React 104
## Controlled components

- The state of form elements in an HTML/JavaScript project is tracked by `HTML`.
- A controlled component in React is really just a regular `component` that you are already familiar with.
- But the term refers to a component that has a form element whose `state` is tracked by `React`.
- The `value` of an `<input />`, for example, in a controlled component is set by the noun part of the `useState` hook.
- If an `<input />` does not have a `value` attribute, its state is controlled by HTML.
- Changes in state cause a React component to `re-render`.
- When component goes from controlled to uncontrolled, React will throw a `warning`.
- The `onChange` event listener listens to every `keypress`.
- The `<input />` of a controlled component will always have the `onChange` event listener as one of its attributes.
- A controlled component must implement the `useState` hook as well as have attributes for `value` and `onChange` on the `<input />` element.

---

#### Key terms and phrases
1. keypress
1. `onChange`
1. re-render
1. React
1. state
1. `useState` hook
1. `value`
1. warning

