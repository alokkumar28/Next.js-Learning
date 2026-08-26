# Next.js — Introduction & App Router

## 1. What is Next.js?

Next.js is a React-based web framework.

React is mainly used for building the UI, while Next.js provides additional features that make it easier to build a complete web application.

Some important things provided by Next.js are:

* Routing
* Server-side rendering (SSR)
* Static site generation (SSG)
* API routes
* Performance optimizations
* Full-stack application support

So, in simple terms:

```text
React
   +
Routing
   +
Server-side features
   +
Performance optimizations
   =
Next.js
```
## 2. Creating a Next.js Project

A new Next.js project can be created using:

```bash
npx create-next-app@latest
```

After creating the project:

```bash
cd my-app
npm run dev
```

The application will start in development mode.

---

# App Router

## 3. What is the App Router?

Next.js uses **file-system based routing**.

This means we don't normally create routes separately. Instead, the folder structure inside the `app` directory determines the routes.

For example:

```text
app/
├── page.js
└── blog/
    └── page.js
```

This gives us:

```text
/       → app/page.js

/blog   → app/blog/page.js
```

So the basic idea is:

```text
Folder structure
       ↓
URL structure
```

## 4. `page.js`

`page.js` is used to define the UI of a route.

Example:

```text
app/
└── about/
    └── page.js
```

```jsx
export default function About() {
    return <h1>About Page</h1>;
}
```

Now the page is available at:

```text
/about
```

Another example:

```text
app/
├── page.js
├── about/
│   └── page.js
└── contact/
    └── page.js
```

Routes:

```text
/          → Home
/about     → About
/contact   → Contact
```

---

## 5. Nested Routes

Routes can be nested by putting folders inside other folders.

Example:

```text
app/
└── blog/
    └── posts/
        └── page.js
```

The URL becomes:

```text
/blog/posts
```

So:

```text
blog/
    posts/
```

becomes:

```text
/blog/posts
```

This is just an extension of the file-system routing idea.

---

# Dynamic Routes

## 6. Why do we need Dynamic Routes?

Suppose we have a blog website.

We may have URLs like:

```text
/blog/react
/blog/nextjs
/blog/javascript
```

Creating a separate folder for every blog post would not be practical.

Instead, we can make the changing part dynamic.

```text
app/
└── blog/
    └── [slug]/
        └── page.js
```

Here:

```text
[slug]
```

is a **dynamic route segment**.

It can represent different values.

```text
/blog/react
       ↓
slug = react

/blog/nextjs
       ↓
slug = nextjs
```

The source uses `app/blog/[slug]/page.js` as the example of a dynamic route.

---

## 7. Getting the Dynamic Parameter

A dynamic page receives the route parameters.

Example:

```jsx
export default async function Page({ params }) {
    const { slug } = await params;

    return (
        <div>
            <h1>Blog Post</h1>
            <p>Slug: {slug}</p>
        </div>
    );
}
```

For:

```text
/blog/react
```

the value of `slug` will be:

```text
react
```

For:

```text
/blog/nextjs
```

it will be:

```text
nextjs
```

# Catch-all Routes

## 8. `[...slug]`

Sometimes one dynamic value is not enough.

For example, a shop may have:

```text
/shop/clothes
/shop/clothes/tops
/shop/clothes/tops/t-shirts
```

We can use a **catch-all route**:

```text
app/
└── shop/
    └── [...slug]/
        └── page.js
```

The `...` tells Next.js to capture multiple route segments.

So:

```text
[slug]
```

captures one dynamic segment, while:

```text
[...slug]
```

can capture the remaining segments.


## 9. What does the parameter look like?

For:

```text
/shop/clothes
```

the parameter is conceptually:

```js
{
    slug: ["clothes"]
}
```

For:

```text
/shop/clothes/tops
```

it becomes:

```js
{
    slug: ["clothes", "tops"]
}
```

So a catch-all parameter is an **array of route segments**.

---

# Optional Catch-all Routes

## 10. `[[...slug]]`

There is another version of catch-all routing:

```text
[[...slug]]
```

The difference is that the route can also work **without any additional segment**.

Example:

```text
app/
└── shop/
    └── [[...slug]]/
        └── page.js
```

This can match:

```text
/shop
/shop/clothes
/shop/clothes/tops
/shop/clothes/tops/t-shirts
```

Compare:

```text
[...slug]
```

with:

```text
[[...slug]]
```

### Catch-all

```text
[...slug]

/shop/clothes       ✓
/shop/clothes/tops  ✓
/shop               ✗
```

### Optional catch-all

```text
[[...slug]]

/shop               ✓
/shop/clothes       ✓
/shop/clothes/tops  ✓
```

That is the main difference between the two.

---

# Quick Dynamic Route Comparison

| Syntax        | Meaning                       |
| ------------- | ----------------------------- |
| `[slug]`      | One dynamic segment           |
| `[...slug]`   | One or more dynamic segments  |
| `[[...slug]]` | Zero or more dynamic segments |

A simple way to remember it:

```text
[id]
 ↓
one value

[...id]
 ↓
multiple values

[[...id]]
 ↓
multiple values OR nothing
```

---

# Route Groups

## 11. What is a Route Group?

Sometimes we want to organize our application into folders, but we don't want those folder names to appear in the URL.

For this, we use **parentheses**.

```text
(folderName)
```

Example:

```text
app/
├── (auth)/
│   ├── login/
│   │   └── page.js
│   └── register/
│       └── page.js
```

The routes are:

```text
/login
/register
```

not:

```text
/auth/login
/auth/register
```

The `(auth)` folder is only being used for organization.


## 12. Why use Route Groups?

They are useful when the project starts getting larger.

For example:

```text
app/
├── (marketing)/
│   ├── about/
│   └── contact/
│
├── (dashboard)/
│   ├── profile/
│   └── settings/
```

This keeps related files together without changing the URLs.

Remember:

```text
(auth)
(dashboard)
(marketing)
```

are organizational folders, not URL segments.

---

# Parallel Routes

## 13. What are Parallel Routes?

Parallel Routes allow different sections of a page to be rendered at the same time.

They are useful for interfaces where one page contains multiple independent sections.

A common example is a dashboard:

```text
Dashboard
├── Team
└── Analytics
```

## 14. Parallel Route Syntax

Parallel routes use `@` in the folder name.

Example:

```text
app/
├── layout.js
├── page.js
├── @team/
│   └── page.js
└── @analytics/
    └── page.js
```

Here:

```text
@team
```

and

```text
@analytics
```

are separate route slots.

The layout can receive these slots:

```jsx
export default function Layout({
    children,
    team,
    analytics
}) {
    return (
        <div>
            {children}

            <div>
                {team}
            </div>

            <div>
                {analytics}
            </div>
        </div>
    );
}
```

So the idea is roughly:

```text
             Layout
                |
       -------------------
       |        |        |
    children   team   analytics
```

---

# `default.js`

## 15. Why is `default.js` used?

With parallel routes, a particular slot may not have a matching page in some situations.

`default.js` can be used as a fallback for an unmatched slot.

Example:

```text
app/
├── @team/
│   └── page.js
│
├── @analytics/
│   ├── page.js
│   └── default.js
│
└── layout.js
```

Here:

```text
@analytics/
├── page.js
└── default.js
```

means that `default.js` can act as the fallback when the slot does not have a matching route during the relevant navigation/loading situation.



---

# Routing Files

## 16. Important files in the App Router

The `app` directory has several special file names.

| File              | Used for                |
| ----------------- | ----------------------- |
| `page.js`         | Page                    |
| `layout.js`       | Layout                  |
| `loading.js`      | Loading UI              |
| `not-found.js`    | Not-found UI            |
| `error.js`        | Error UI                |
| `global-error.js` | Global error UI         |
| `route.js`        | API endpoint            |
| `template.js`     | Re-rendered layout      |
| `default.js`      | Parallel route fallback |

These are special files. Their names have specific meanings to Next.js.

For now, the most important ones to remember are:

```text
page.js
layout.js
loading.js
not-found.js
error.js
route.js
```

---

# Server Components and Client Components

## 17. Server Components by Default

One important thing in the App Router is that components are **Server Components by default**.

This is different from the way we may normally think about React components.

If a component only needs to display UI, we can keep it as a Server Component.

But what if we want to use:

```jsx
useState()
useEffect()
```

or other client-side functionality?

Then we need to make that component a **Client Component**.

---

## 18. `"use client"`

To make a component a Client Component, put:

```jsx
"use client";
```

at the top of the file.

Example:

```jsx
"use client";

import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <button onClick={() => setCount(count + 1)}>
            Count: {count}
        </button>
    );
}
```

Without:

```jsx
"use client";
```

this kind of client-side hook usage is not allowed in the default Server Component environment.


# Final Revision

## App Router in one picture

```text
app/
│
├── page.js
│      └── /
│
├── about/
│   └── page.js
│          └── /about
│
├── blog/
│   ├── page.js
│   │      └── /blog
│   │
│   └── [slug]/
│       └── page.js
│              └── /blog/anything
│
├── shop/
│   └── [...slug]/
│       └── page.js
│              └── /shop/a/b/c
│
├── (auth)/
│   └── login/
│       └── page.js
│              └── /login
│
└── @analytics/
    └── page.js
           └── parallel route slot
```

---

## Things I should remember

```text
app/                  → App Router

page.js               → creates a page

layout.js             → shared layout

folder/folder         → nested route

[id]                  → dynamic route

[...slug]             → catch-all route

[[...slug]]           → optional catch-all

(folder)              → route group, not shown in URL

@slot                 → parallel route

default.js            → fallback for parallel route

"use client"          → enables client-side features/hooks
```

The main idea behind the App Router is actually simple:

```text
Create folders
    ↓
Create page.js
    ↓
Folder structure becomes URL
```
