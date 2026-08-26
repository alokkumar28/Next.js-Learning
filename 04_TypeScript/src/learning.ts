// function
function sum(a: number, b: number): number {
    return a + b;
}

const sumVal: number = sum(8, 9);
console.log(sumVal);

function greet(mes: string): void {
    console.log(`Hello ${mes}`);
}

greet("World");


// basic types
const age: number = 18;
console.log(age);

const userName: string = "alok";
console.log(userName);

let isOnline: boolean = true;
console.log(isOnline);

isOnline = false;


// array
let nameArray: string[];

nameArray = ["alok", "jay"];

console.log(nameArray);

let numberArray: number[];

numberArray = [23, 45, 23];

console.log(numberArray);


// tuple
let tupleArray: [number, string];

tupleArray = [23, "alok"];

console.log(tupleArray);


// enum
enum Role {
    Admin,
    User
}

let role: Role = Role.Admin;

console.log(role);


// type inference
let b = 78;


// type annotation
let c: number;

c = 23;
c = 24;


// union
type Alok = number | string;

let my: Alok;

my = 23;
my = "myName";


// type alias
type Status = "Success" | "Completed" | "Pending";

let ba: Status;

ba = "Success";

console.log(ba);


// object type
type User = {
    name: string;
    age: number;
};

let obj: User = {
    name: "Alok",
    age: 21
};


// optional property
type Post = {
    description: string;
    image?: string; // optional
    likes: number;
};

const postObj: Post = {
    description: "This is a description",
    image: "This is image",
    likes: 23
};


// function type
type MathFunction = (a: number, b: number) => number;

let add: MathFunction = (a, b) => {
    return a + b;
};

console.log(add(2, 3));


// interface
interface UserModel {
    name: string;
    id: number;
    age: number;
}

const admin: UserModel = {
    name: "alok",
    id: 21,
    age: 23
};


// intersection
type A = {
    a: string;
};

type B = {
    b: string;
};

type AB = A & B;

const ab: AB = {
    a: "hello",
    b: "world"
};


// interface extends
interface D {
    d: string;
}

interface C extends D {
    c: string;
}

const cObj: C = {
    c: "hello",
    d: "world"
};


// union
type ID = number | string;

let userId: ID;

userId = 21;
userId = "user21";


// generics
function identity<T>(value: T): T {
    return value;
}

const num = identity(10);
const text = identity("hello");

console.log(num);
console.log(text);


// generic interface
interface Box<T> {
    value: T;
}

const numberBox: Box<number> = {
    value: 10
};

const stringBox: Box<string> = {
    value: "hello"
};