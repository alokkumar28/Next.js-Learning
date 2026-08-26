# 🌍 Travel Guide

A simple **Travel Guide website** built with **Next.js** and **Tailwind CSS**.

This project was created while learning the fundamentals of Next.js, including routing, layouts, dynamic routes, parallel routes, and optimized images.

## Features

* Navigation between pages
* Destination selection
* Dynamic destination pages
* Indian destinations like Bhubaneswar, Puri, and Konark
* Parallel routes for displaying image and description separately
* Optimized images using `next/image`
* Active navigation links
* Responsive styling with Tailwind CSS

## Next.js Concepts Learned

### 1. App Router

Used the `app` directory to create pages and routes.

```text
app/
├── page.jsx
├── contact/
│   └── page.jsx
└── destinations/
    └── page.jsx
```

### 2. File-Based Routing

Next.js automatically creates routes based on folders and `page.jsx`.

For example:

```text
app/contact/page.jsx
```

creates:

```text
/contact
```

### 3. Dynamic Routes

Used `[place]` to create dynamic destination pages.

```text
destinations/
└── [place]/
    └── page.jsx
```

This allows routes such as:

```text
/destinations/bhubaneswar
/destinations/puri
/destinations/konark
```

### 4. Parallel Routes

Used `@left` and `@right` to render different parts of the destination page independently.

```text
[place]/
├── @left/
│   └── page.jsx
├── @right/
│   └── page.jsx
└── layout.js
```

The left side contains the destination image and the right side contains the description.

### 5. Layouts

Used `layout.js` to create a common structure for the parallel routes.

```jsx
export default function Layout({ left, right }) {
  return (
    <div>
      {left}
      {right}
    </div>
  );
}
```

### 6. Client Components

Used `"use client"` where client-side features were required.

For example, the destination selection page initially used:

```jsx
"use client";
```

along with React state.

### 7. React `useState`

Used `useState` to understand client-side state management and handle the selected destination.

```jsx
const [destination, setDestination] = useState("");
```

### 8. Next.js `Link`

Used `Link` for navigation between pages without a full browser refresh.

```jsx
<Link href="/destinations/puri">
  Puri
</Link>
```

### 9. `usePathname`

Used `usePathname()` to identify the current route and highlight the active navigation link.

```jsx
const pathname = usePathname();
```

### 10. `next/image`

Used Next.js `Image` for optimized external images.

```jsx
<Image
  src={destination.image}
  alt={destination.name}
  width={300}
  height={200}
/>
```

External image domains were configured in `next.config.js`.

## Tech Stack

* Next.js
* React
* Tailwind CSS
* JavaScript

## Project Purpose

The main purpose of this project is to practice the fundamental concepts of **Next.js App Router** through a small real-world project instead of learning the concepts only theoretically.
