# TypeScript Notes

## 1. What is TypeScript?

TypeScript is a strongly typed programming language developed by Microsoft.

It is a **superset of JavaScript**, which means valid JavaScript code can also be used in TypeScript.

The main thing TypeScript adds is **static typing**. We can specify what type of value a variable, function parameter, or function return value should have.

For example, in JavaScript:

```js
let age = 20;
```

In TypeScript:

```ts
let age: number = 20;
```

Here `number` tells TypeScript that `age` should contain a number.

TypeScript code is eventually converted to JavaScript so that it can run in the browser or Node.js.

---

# 2. Basic Types

## Number

Used for integer and decimal values.

```ts
let age: number = 20;
let price: number = 99.99;
```

---

## String

Used for text.

```ts
let name: string = "Alok";
let city: string = "Bhubaneswar";
```

---

## Boolean

Used for `true` or `false`.

```ts
let isOnline: boolean = true;
let isAdmin: boolean = false;
```

---

## Array

There are multiple ways to define an array.

```ts
let scores: number[] = [10, 20, 30];

let names: string[] = ["Alok", "Rahul", "Aman"];
```

We can also use the generic form:

```ts
let scores: Array<number> = [10, 20, 30];
```

Both are valid.

---

## Tuple

A tuple is an array with a **fixed structure and specific types at specific positions**.

```ts
let user: [string, number] = ["Alok", 22];
```

Here:

```text
user[0] → string
user[1] → number
```

This would be invalid:

```ts
let user: [string, number] = [22, "Alok"];
```

because the order of the types does not match.

---

## Enum

An enum can be used when we have a fixed set of named values.

```ts
enum Role {
    Admin,
    User,
    Guest
}

let role: Role = Role.Admin;
```

Enums can make code easier to understand when a variable should only represent a predefined set of options.

---

## Any

`any` basically disables type checking for that value.

```ts
let something: any = "Hello";

something = 10;
something = true;
```

It can contain different types.

However, `any` should not be used unnecessarily because one of the main benefits of TypeScript is type safety.

---

## Void

`void` is mainly used for functions that do not return a value.

```ts
function logMessage(): void {
    console.log("Hello");
}
```

The function performs an action but does not return anything.

---

## Null and Undefined

These represent the absence of a value.

```ts
let value: null = null;
let data: undefined = undefined;
```

In normal applications, they are often used together with other types when a value may or may not exist.

For example:

```ts
let username: string | null = null;
```

---

# 3. Arrays and Tuples

### Array

An array can contain multiple values of the same type.

```ts
let scores: number[] = [10, 20, 30];

let names: Array<string> = ["Aman", "Rahul"];
```

### Tuple

A tuple has a fixed order of types.

```ts
let user: [string, number] = ["Alok", 22];
```

So:

```text
Array
→ collection of values

Tuple
→ fixed structure with specific types
```

---

# 4. Functions in TypeScript

TypeScript allows us to specify types for both **parameters** and **return values**.

```ts
function add(a: number, b: number): number {
    return a + b;
}
```

Here:

```text
a → number
b → number
return value → number
```

So this is valid:

```ts
add(10, 20);
```

But this will give a type error:

```ts
add("10", 20);
```

because `"10"` is a string.

---

## 5. Optional Parameters

A parameter can be made optional using `?`.

```ts
function greet(name: string, prefix?: string): string {
    return `${prefix ?? "Hi"}, ${name}`;
}
```

Now both are possible:

```ts
greet("Alok");
greet("Alok", "Hello");
```

The `?` means that the parameter may be missing.

---

## 6. Default Parameters

We can also provide a default value.

```ts
function greet(
    name: string,
    prefix: string = "Hi"
): string {
    return `${prefix}, ${name}`;
}
```

Now:

```ts
greet("Alok");
```

uses:

```text
prefix = "Hi"
```

while:

```ts
greet("Alok", "Hello");
```

uses:

```text
prefix = "Hello"
```

---

# 7. Type Declaration

A type can be explicitly declared.

```ts
let count: number = 5;
let name: string = "Alok";
let isLoggedIn: boolean = true;
```

Here we are directly telling TypeScript what type each variable should have.

This is called **type declaration** or explicit typing.

---

# 8. Type Inference

TypeScript can often figure out the type automatically from the value.

```ts
let age = 20;
```

TypeScript understands:

```text
age → number
```

Similarly:

```ts
let city = "Delhi";
```

TypeScript infers:

```text
city → string
```

And:

```ts
function double(x: number) {
    return x * 2;
}
```

TypeScript can infer that the return value is a `number`.

So we don't always need to explicitly write every type.

### Explicit typing

```ts
let count: number = 5;
```

### Type inference

```ts
let count = 5;
```

Both are valid.

---

# 9. Type Aliases

A **type alias** allows us to give a name to a type.

Syntax:

```ts
type TypeName = ...;
```

Example:

```ts
type ID = number | string;

let userId: ID = 42;
let anotherId: ID = "user123";
```

Now `ID` represents:

```ts
number | string
```

---

## 10. Type Alias for Objects

Type aliases are also useful for defining object structures.

```ts
type User = {
    id: number;
    name: string;
    email: string;
};

const user: User = {
    id: 1,
    name: "Alok",
    email: "alok@example.com"
};
```

This is useful when the same object structure is used in multiple places.

---

## 11. Type Aliases for Functions

We can also define the type of a function.

```ts
type MathFn = (a: number, b: number) => number;
```

Now:

```ts
const divide: MathFn = (a, b) => {
    return a / b;
};
```

The function must follow the structure defined by `MathFn`.

---

# 12. Interfaces

An interface is mainly used to describe the structure of an object.

```ts
interface User {
    id: number;
    name: string;
    email: string;
    readonly role: string;
}
```

Now we can create an object using this interface:

```ts
const user: User = {
    id: 1,
    name: "Alok",
    email: "alok@example.com",
    role: "Admin"
};
```

---

## Optional Properties

A property can be optional using `?`.

```ts
interface User {
    id: number;
    name: string;
    email?: string;
}
```

Now this is valid:

```ts
const user: User = {
    id: 1,
    name: "Alok"
};
```

because `email` is optional.

---

## `readonly`

A `readonly` property cannot be changed after the object is created.

```ts
interface User {
    id: number;
    readonly username: string;
}
```

Example:

```ts
const user: User = {
    id: 1,
    username: "alok"
};
```

This is not allowed:

```ts
user.username = "newname";
```

---

# 13. Extending Interfaces

An interface can extend another interface.

```ts
interface User {
    id: number;
    name: string;
}

interface Employee extends User {
    salary: number;
}
```

Now `Employee` contains:

```text
id
name
salary
```

Example:

```ts
const employee: Employee = {
    id: 1,
    name: "Alok",
    salary: 50000
};
```

This is useful when one object type is based on another type.

---

# 14. Type vs Interface

Both `type` and `interface` can be used to describe object structures.

### Type

```ts
type User = {
    name: string;
    age: number;
};
```

### Interface

```ts
interface User {
    name: string;
    age: number;
}
```

Both can work for this kind of object.

The main differences to remember:

| Feature             | `type` | `interface` |
| ------------------- | ------ | ----------- |
| Object structure    | Yes    | Yes         |
| Union types         | Yes    | No          |
| Intersection types  | Yes    | No          |
| Extend              | `&`    | `extends`   |
| Declaration merging | No     | Yes         |

For example, with `type`:

```ts
type A = {
    x: number;
};

type B = {
    y: string;
};

type C = A & B;
```

`C` now contains both `x` and `y`.

With interfaces:

```ts
interface A {
    x: number;
}

interface B extends A {
    y: string;
}
```

---

# 15. Union Types

A **union type** means that a value can have one of multiple types.

We use `|`.

```ts
type Response = "ok" | "fail" | "loading";
```

Now:

```ts
let response: Response = "ok";
```

This is valid:

```ts
response = "fail";
```

But this is not:

```ts
response = "success";
```

because `"success"` is not part of the union.

Another example:

```ts
let id: string | number;

id = 10;
id = "user123";
```

Both are allowed.

---

# 16. Intersection Types

An intersection combines multiple types into one.

We use `&`.

```ts
type Person = {
    name: string;
};

type Contact = {
    phone: string;
};

type FullUser = Person & Contact;
```

Now `FullUser` must contain both properties:

```ts
const user: FullUser = {
    name: "Alok",
    phone: "1234567890"
};
```

So:

```text
Union
A | B
→ A OR B

Intersection
A & B
→ A AND B
```

This difference is very important.

---

# 17. Generics

Generics are used when we want to write reusable code while still keeping type safety.

Instead of fixing a function to one particular type, we can make it work with different types.

Example:

```ts
function identity<T>(value: T): T {
    return value;
}
```

Here `T` is a type parameter.

We can use the same function with different types:

```ts
const num = identity<number>(10);

const text = identity<string>("Hello");
```

TypeScript can also infer the type:

```ts
const num = identity(10);
const text = identity("Hello");
```

So we don't always need to explicitly write `<number>` or `<string>`.

---

## Generic Interface

Generics can also be used with interfaces.

```ts
interface Box<T> {
    value: T;
}
```

Now we can create different types of boxes:

```ts
const numberBox: Box<number> = {
    value: 10
};

const stringBox: Box<string> = {
    value: "Hello"
};
```

The same interface works with different types.

This is the main purpose of generics:

```text
One reusable structure
        +
Different data types
        =
Generics
```

---

# 18. Global Declaration

Sometimes we need to tell TypeScript about something that exists globally but is not directly known by TypeScript.

We can use a `.d.ts` declaration file.

For example:

```text
src/
└── types.d.ts
```

Inside it:

```ts
declare global {
    interface Window {
        appVersion: string;
    }

    type ApiResponse<T> = {
        data: T;
        error?: string;
    };
}

export {};
```

Now TypeScript knows about:

```ts
window.appVersion
```

and the generic type:

```ts
ApiResponse<T>
```

The `export {}` at the end makes the file a module while still allowing the declarations inside `declare global` to become global.

Global declarations are useful when working with custom properties added to existing browser objects or shared types used across the application.

---

# React with TypeScript

## 19. Props with TypeScript

One of the most common uses of TypeScript in React is typing component props.

Example:

```tsx
type ButtonProps = {
    label: string;
    onClick: () => void;
};
```

Now use it in the component:

```tsx
function Button({ label, onClick }: ButtonProps) {
    return (
        <button onClick={onClick}>
            {label}
        </button>
    );
}
```

Usage:

```tsx
<Button
    label="Click Me"
    onClick={() => console.log("Clicked")}
/>
```

Here TypeScript checks that:

```text
label   → string
onClick → function with no arguments
```

---

## 20. Typing React Component Props

Another way is to use `React.FC`.

```tsx
type ButtonProps = {
    label: string;
    onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({
    label,
    onClick
}) => {
    return (
        <button onClick={onClick}>
            {label}
        </button>
    );
};
```

For modern React code, directly typing the props is often simpler:

```tsx
function Button({ label, onClick }: ButtonProps) {
    return (
        <button onClick={onClick}>
            {label}
        </button>
    );
}
```

---

# 21. `useState` with TypeScript

TypeScript can often infer the state type automatically.

```tsx
const [count, setCount] = useState(0);
```

Here TypeScript knows:

```text
count → number
```

So this is valid:

```tsx
setCount(10);
```

but:

```tsx
setCount("10");
```

is not valid.

When the initial value does not clearly tell TypeScript the required type, we can specify it manually.

```tsx
const [user, setUser] = useState<User | null>(null);
```

Now `user` can be:

```text
User
or
null
```

---

# 22. `useRef` with TypeScript

`useRef` can also be typed.

For example, if we want to keep a reference to an input element:

```tsx
const inputRef = useRef<HTMLInputElement>(null);
```

Then:

```tsx
<input ref={inputRef} />
```

Now TypeScript knows that `inputRef` points to an `HTMLInputElement`.

Another common example:

```tsx
const timerRef = useRef<number | null>(null);
```

The important part is to specify what type of value the ref will contain.

---

# 23. Useful React Types

There are several React types that are useful when working with TypeScript.

| Type                     | Common use                        |
| ------------------------ | --------------------------------- |
| `ReactNode`              | Anything React can render         |
| `ReactElement`           | A React element                   |
| `JSX.Element`            | Return type of a JSX component    |
| `ReactChild`             | Older/specific single child usage |
| `ReactPortal`            | React portals                     |
| `ReactFragment`          | Fragment/grouped children         |
| `React.ComponentType<P>` | A component accepting props `P`   |
| `React.FC<P>`            | Function component with props `P` |

---

## 24. `ReactNode`

`ReactNode` is useful when a prop can contain almost anything React can render.

For example:

```tsx
type CardProps = {
    children: React.ReactNode;
};
```

Then:

```tsx
function Card({ children }: CardProps) {
    return (
        <div>
            {children}
        </div>
    );
}
```

It can accept:

```tsx
<Card>
    <h1>Hello</h1>
</Card>
```

and also text:

```tsx
<Card>
    Hello
</Card>
```

So for normal `children` props, `React.ReactNode` is usually the useful type to remember.

---

# 25. `ReactElement`

`ReactElement` represents a React element.

Example:

```tsx
type Props = {
    element: React.ReactElement;
};
```

This is more restrictive than `ReactNode`.

For example, it expects an actual React element such as:

```tsx
<div>Hello</div>
```

rather than arbitrary renderable content.

---

# 26. `JSX.Element`

`JSX.Element` can be used as the return type of a component.

```tsx
function App(): JSX.Element {
    return <h1>Hello</h1>;
}
```

However, in many cases TypeScript can infer the return type, so writing it explicitly is not always necessary.

---

# 27. Dynamic Component Props

When a prop needs to receive a component itself, `React.ComponentType` can be useful.

```tsx
type Props = {
    component: React.ComponentType<{ name: string }>;
};
```

This means the `component` prop should be a React component that accepts:

```ts
{
    name: string;
}
```

This is useful when building reusable or dynamic components.

---

# 28. React Type Quick Revision

```text
React.ReactNode
→ anything React can render

React.ReactElement
→ a React element

JSX.Element
→ JSX component return type

React.ComponentType<P>
→ component accepting props P

React.FC<P>
→ function component with props P
```

For most normal React code, the important ones to remember first are:

```text
React.ReactNode
React.ReactElement
React.ComponentType
```

---

# TypeScript Quick Revision

```text
number
→ 10, 20, 10.5

string
→ "Hello"

boolean
→ true / false

number[]
→ array of numbers

[string, number]
→ tuple

enum
→ fixed named values

any
→ disables normal type checking

void
→ function returns nothing
```

```text
type
→ create reusable type definitions

interface
→ mainly describe object structure

|
→ union (OR)

&
→ intersection (AND)

<T>
→ generic type
```

```text
Type declaration
→ let age: number = 20;

Type inference
→ let age = 20;
```

And with React:

```text
Props
→ define the expected data of a component

useState<T>
→ type the state when needed

useRef<T>
→ type the value/element stored in the ref

React.ReactNode
→ useful for children
```

The main idea of TypeScript is simple:

```text
JavaScript
    +
Static type checking
    ↓
TypeScript
```

It helps catch many type-related mistakes while writing the code instead of waiting until runtime.
