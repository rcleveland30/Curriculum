# JavaScript Data 301
## Understanding immutability comes down to understanding how data is stored in memory.

**Definition of Immutability**
Primitive data types are immutable...Immutability means that whenever a variable is declared, it lives at a unique address in memory. And if it is later reinitialized or re-assigned, it will live at a new, unique address. If a variable is initialized by reference, instead of by value, its unique address points to the referred address. 

**List of Primitive Data Types**
* strings
* booleans
* numbers
* null
* undefined

**Example**
```
let age = 32; //initializes by value, it gets a unique address (ex Hx78)
let marysAge = age; initializes by reference, it gets unique address (ex Rw33) but this doesn't hold a value, it simply points to Hx78
age = 33 // with reinitialization, the new value is stored at a new address. (ex Xa15)
```

**Definition of Mutability**
Collections of primitive data types ARE mutable, which means that when they are modified or updated, the data is not stored at a new address but remains at the original address when the variable was first declared.

**List of Collections**
* arrays
* objects