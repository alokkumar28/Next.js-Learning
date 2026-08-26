# Next.js — Navigation, Image & Font

## 1. Navigation in Next.js

There are mainly two ways to handle navigation in Next.js:

1. **Declarative navigation** → using the `Link` component
2. **Programmatic navigation** → using the `useRouter()` hook

---

## 2. Declarative Navigation

For normal navigation between pages, we can use the `Link` component from `next/link`.

```jsx
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <h1>Home Page</h1>

            <Link href="/about">
                Go to About Page
            </Link>
        </div>
    );
}
```

Here:

```jsx
<Link href="/about">Go to About Page</Link>
```

takes the user to the `/about` route.

We don't need to use a normal `<a>` tag for internal Next.js navigation.

### Why use `Link`?

It provides client-side navigation and Next.js can automatically prefetch linked pages, which makes navigation faster.

---

## 3. Programmatic Navigation

Sometimes we need to navigate from inside a function.

For example:

* After submitting a form
* After clicking a button
* After completing some action
* When we want to redirect the user based on some condition

For this, we can use the `useRouter()` hook.

```jsx
"use client";

import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    const goToAbout = () => {
        router.push("/about");
    };

    return (
        <div>
            <h1>Home Page</h1>

            <button onClick={goToAbout}>
                Go to About
            </button>
        </div>
    );
}
```

Here:

```jsx
router.push("/about");
```

changes the current route to `/about`.

Since `useRouter()` is a React hook, this component needs:

```jsx
"use client";
```

at the top.

---

## 4. `Link` vs `useRouter()`

| Method        | When to use                             |
| ------------- | --------------------------------------- |
| `Link`        | Normal links between pages              |
| `useRouter()` | Navigation from inside JavaScript logic |

For example:

```jsx
<Link href="/about">About</Link>
```

is better for a normal navigation link.

But for something like:

```jsx
const handleSubmit = () => {
    // some logic
    router.push("/dashboard");
};
```

`useRouter()` makes more sense.

---

# Image Optimization

## 5. Image Optimization in Next.js

Next.js provides an `Image` component for handling images.

Instead of directly using:

```html
<img src="/images/sample.jpg" />
```

we can use:

```jsx
import Image from "next/image";
```

Example:

```jsx
import Image from "next/image";

export default function Home() {
    return (
        <Image
            src="/images/sample.jpg"
            alt="Sample Image"
            width={600}
            height={400}
            priority
        />
    );
}
```

The `Image` component helps optimize images automatically.

It can:

* Resize images
* Compress images
* Serve modern formats such as WebP and AVIF
* Improve loading performance

---

## 6. Important `Image` Props

### `src`

Specifies the image location.

```jsx
src="/images/sample.jpg"
```

### `alt`

Provides alternative text for the image.

```jsx
alt="Sample Image"
```

### `width` and `height`

Specify the dimensions of the image.

```jsx
width={600}
height={400}
```

### `priority`

Can be used for important images that should be loaded with higher priority.

```jsx
priority
```

Example:

```jsx
<Image
    src="/images/sample.jpg"
    alt="Sample Image"
    width={600}
    height={400}
    priority
/>
```

---

# Font Optimization

## 7. Font Optimization in Next.js

Next.js also provides font optimization through `next/font`.

It helps reduce unnecessary font loading and improves page rendering.

For Google Fonts, we can use:

```jsx
import { Roboto } from "next/font/google";
```

Then configure the font:

```jsx
const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap"
});
```

And use the generated class:

```jsx
export default function Home() {
    return (
        <h1 className={roboto.className}>
            Hello, Next.js Fonts!
        </h1>
    );
}
```

Complete example:

```jsx
import { Roboto } from "next/font/google";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap"
});

export default function Home() {
    return (
        <h1 className={roboto.className}>
            Hello, Next.js Fonts!
        </h1>
    );
}
```

---

## 8. Why use `next/font`?

Next.js can optimize the font by:

* Loading only the required character subsets
* Preloading fonts
* Reducing font-related layout shifts
* Improving the initial rendering of the page

For example:

```jsx
subsets: ["latin"]
```

means we only need the Latin character set instead of loading unnecessary characters.

---

## Quick Revision

```text
Navigation
│
├── Link
│     → normal page navigation
│
└── useRouter()
      → navigation using JavaScript logic
```

```text
Images
│
└── next/image
      → image optimization
      → resizing
      → compression
      → modern formats
```

```text
Fonts
│
└── next/font
      → optimized font loading
      → subsets
      → preloading
      → less layout shifting
```

### Important imports

```jsx
// Navigation
import Link from "next/link";
```

```jsx
// Programmatic navigation
import { useRouter } from "next/navigation";
```

```jsx
// Images
import Image from "next/image";
```

```jsx
// Google Fonts
import { Roboto } from "next/font/google";
```
