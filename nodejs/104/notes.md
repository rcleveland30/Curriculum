# NodeJS 104
## Modules make it easier to scale and maintain Node applications

### Modules
- compartmentalize code
- act as building blocks in application
- adhere to an import-export pattern

### Types
- core
- local
- third-party

### Import
```javascript
const someModule = require('someModule')

```
### Export
```javascript
function someFunction() {
    // code here
}

module.exports = someFunction;
```