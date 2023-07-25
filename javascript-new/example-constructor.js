function ExampleConstructor() {};
console.log('value of ExampleConstructor.prototype:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype:', typeof ExampleConstructor.prototype);

const exampleInstance = new ExampleConstructor();
console.log('value of exampleInstance:', exampleInstance);

const isInstance = exampleInstance instanceof ExampleConstructor;
console.log('value of isInstance:', isInstance);
