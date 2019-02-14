REPL: (command node is REPL)

1. Read User Input (Read)
2. Evaluate User Input (Eval)
3. Print Output (Print)
4. Wait for new input (Loop)

javascript summary

- Weakly Typed language (`no explicit type assignment`, `data types can be switched dynamically`)
- Object-Oriented language(`data can be organized in logical objects`, `Primitive and reference types`)
- Versatile language (`runs in browser & directly on a pc/Server`, `can perform a broad variety of tasks`)

#"this" and Function References(it's same to arrow function)
this is used in class, this will call function or property inside the class.
this.addName is address of function that will tell the javascript execute when user clink button. we just pass the reference the address of the function to the code
this.addName() will tell the javascript execute imediately

Note: if parentheses this funtion will be executed immediately, if not will executed when user click

`button.addEventListener('click', someFunction);` reference
`button.addEventListener('click', someFunction());` function call

`class MyClass {
constructor() {
const button = ...;
button.addEventListener('click', this.myMethod);
}

myMethod() { ... }
}`

the `this` keyword is important here though. It basically points at the object that is created based on the class. And since `myMehtod` is a method of the class/object, it can only be accessed via `this`

that's how we pass a reference to a function instead of calling it immediately. And that's why you would use this syntax without the parenthese.

define a field in contructor will use everywhere we want. that is global variable

`this` không hoàn toàn lúc nào cũng tham chiếu đến class như ở đây this nó sẽ tham chiếu đến cái đã call nó là btn.addEventListener('click', this.addName). js `this` sẽ tham chiếu đến cái gọi nó và trong đó bạn sử dụng nó. (it is how it work in javascript)

how to change it

- we use a special method(bind() function`this.addName.bind(this)`)
  this bind function actually allows us to tell js what this should be referring to in the function that will eventually get executed

primitive values vs reference values

- primitive values: String, Number, Boolean, Undefined, null, es6 synbol
- how it work: are copied by value and where the actual data is stored it is stored on the stack memory
- stack work: the stack holds as the name implies a stack, and manager data like stack(from top to bottom and limit space)
- reference values: object, array these are stored on the HEAP memory
- HEAP work: it's managed randomly, each element has it's own address, and stack will store the address for HEAP and HEAP store the actual value of object
