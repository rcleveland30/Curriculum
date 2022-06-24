# DOM 102
## Modifying the DOM comes down to learning a few methods and properties.

### Creating Elements
```javascript
const div = document.createElement{'div'}
div.innerText = 'Hello World';
div.innerHTML = ` <h1> Hello World </h1> ` ;
root.appened<div>;

```
### Selecting Elements
// returns a list of nodes
```javascript
document.getElementsByTagName('p');
document.getElementsByClassName('items');
document.querySelectorAll('.items');

// returns a single node
document.getElementbyID('root');
document.querySelector('article #root');

```
### Modifying Elemnts
```javascript
const root = document.getElementbyID('root')
root.setAttribute('data-id', 'someID');
root.style.color = 'crimson';
root.innerText = 'Some new text here';
root.removeAttribute('data-id');

```