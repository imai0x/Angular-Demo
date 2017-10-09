[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Introduction to TypeScript

![TypeScript Logo](https://cdn-images-1.medium.com/max/622/1*grk7btEn0OJEQRKgG2Qs2A.png)

## Objectives

By the end of this lesson, you will be able to:

- Explain the relationship between ES6 and TypeScript.
- Use the TypeScript compiler to transpile TypeScript.
- Understand what type definitions are and why they're necessary.
- Read and write TypeScript code that employs typing.

## What is TypeScript?

TypeScript is an open-sourced programming language developed and maintained by Microsoft. It's a superset of JavaScript, meaning that **any valid JavaScript program is also a valid TypeScript program.** TypeScript transpiles to JavaScript, so **it can be run in a browser and on a server.**

### TypeScript as a Superset of JavaScript

This is just a fancy way to say that TypeScript includes all of the types, semantics, and functionalities of JavaScript while adding a few bells and whistles of its own.

![TypeScript superset of JavaScript](https://qph.ec.quoracdn.net/main-qimg-b4ea5e4175b7ea1105895f131e9614cc)

So why bother with TypeScript? It turns out that some of those extra bells and whistles are extremely useful.

## Getting Started

First off, we need to globally install the TypeScript compiler. We can do this through `npm`:

```bash
npm install typescript -g
```

This program will read our TypeScript, interpret it, and turn it into JavaScript (ES5). Pretty neat, right? Because our finished product is JavaScript, it can be run in browsers.

> If you use Atom, you'll likely also want to install a package for syntax highlighting of TypeScript, [atom-typescript](https://atom.io/packages/atom-typescript).

![Transpiling](https://i1.wp.com/www.mithunvp.com/wp-content/uploads/2016/02/transpiling.png)

Let's try it out.

Take a look at **hello.ts.** You should see this:

```typescript
function sayHello() {
  console.log('Hello! This syntax seems familiar . . . .');
}

sayHello();
```

Looks just like JavaScript, right? Let's see what happens when we run it through the TypeScript compiler. Go to your terminal and run:

```bash
tsc hello.ts
```

Then, look around in your repo. You should see the exact same file with a ".js" extension. Not exactly novel, but we're on the way to doing more exciting things with TypeScript.

### Type Annotations

TypeScript is a statically and weakly typed language. It's statically typed because **we can declare the types of variables and properties that are enforced at compile time**. It's weakly typed because **we can also choose not to.** What does this mean?

Let's take a look at **multiplier.ts:**

```typescript
function multiplyByTen(points: number): number {
  let product: number = points * 10;
  return product;
}


let product: number = multiplyByTen(10);
console.log(product);
```

With this colon syntax, we're telling both the compiler and our fellow coders exactly what type our variables are, and more importantly, what type of argument our function expects. When we run this code through our compiler, we get:

```javascript
function multiplyByTen(points) {
    var product = points * 10;
    return product;
}
var product = multiplyByTen(10);
console.log(product);

```

It's the same, except without the type annotations. You might be thinking, "Why even bother?" Let's go back and change the argument to "a billion" and see what happens.

Bam! Our compiler yells at us even though it still produces our JavaScript file. It's saving us from making mistakes. If we remove the type annotation from the argument, compile again, and run the JavaScript script with `node`, we get an awkward return value that wasn't the intended result of the function.

 ### Lab: Make It Compile

**battle.ts** is broken. Using what we've just learned, along with the compiler feedback, fix the file so it compiles cleanly.

## Additional Resources

-   [TypeScript Documentation](https://www.typescriptlang.org/docs/tutorial.html)

## [License](LICENSE)

1)  All content is licensed under a CC­BY­NC­SA 4.0 license.
2)  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
