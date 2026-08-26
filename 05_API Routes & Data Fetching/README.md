# Next.js — API Routes & Data Fetching

## API Routes

## 1. What is an API Route?

An API route is a backend function inside a Next.js application.

It can:

* Receive requests
* Process data
* Send responses
* Work with databases
* Handle operations like GET, POST, PUT, DELETE

So we can have both frontend and backend code inside the same Next.js project.

We don't necessarily need a separate Express or Node.js server for simple APIs.

---

## 2. Creating an API Route

With the App Router, API routes are created using a `route.ts` or `route.js` file.

Example:

```text
app/
└── api/
    └── hello/
        └── route.ts
```

This creates:

```text
/api/hello
```

Each `route.ts` file represents an API endpoint.

---

## 3. Simple GET API

```ts
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        message: "Hello from API"
    });
}
```

Now if we send a GET request to:

```text
/api/hello
```

we get:

```json
{
    "message": "Hello from API"
}
```

The important part is the function name:

```ts
export async function GET() {
    
}
```

Next.js uses the HTTP method name to decide which function should handle the request.

---

## 4. POST API

POST requests are generally used when we want to send data to the server.

Example:

```text
app/
└── api/
    └── submit/
        └── route.ts
```

```ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json();

    return NextResponse.json({
        message: "Data received",
        body
    });
}
```

If the client sends:

```json
{
    "name": "Alok",
    "age": 21
}
```

we can access it using:

```ts
const body = await request.json();
```

and `body` will contain the submitted data.

---

## 5. GET vs POST

```text
GET
→ get/read data

POST
→ send/create data
```

For example:

```ts
export async function GET() {
    // get data
}
```

```ts
export async function POST(request: NextRequest) {
    const body = await request.json();

    // use submitted data
}
```

We can also create handlers for other HTTP methods:

```ts
export async function PUT() {
    
}

export async function DELETE() {
    
}
```

---

# Dynamic API Routes

## 6. Dynamic API Route

Just like normal pages, API routes can also have dynamic segments.

Example:

```text
app/
└── api/
    └── users/
        └── [id]/
            └── route.ts
```

This gives us URLs like:

```text
/api/users/123
/api/users/456
/api/users/789
```

Here `[id]` is the dynamic part.

---

## 7. Accessing Dynamic Parameters

```ts
import { NextRequest, NextResponse } from "next/server";

interface Params {
    params: Promise<{
        id: string;
    }>;
}

export async function GET(
    request: NextRequest,
    { params }: Params
) {
    const { id } = await params;

    return NextResponse.json({
        userId: id
    });
}
```

For:

```text
/api/users/123
```

we get:

```text
id = "123"
```

The value is a string, so if we need a number:

```ts
const userId = Number(id);
```

---

## 8. Accessing Request Information

The `NextRequest` object gives us information about the incoming request.

For example, we can access headers:

```ts
const userAgent = request.headers.get("user-agent");
```

A complete example:

```ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const userAgent = request.headers.get("user-agent");

    return NextResponse.json({
        userAgent
    });
}
```

So:

```text
request
   ↓
headers
   ↓
request.headers
```

---

# Query Parameters

## 9. What are Query Parameters?

Query parameters are values passed after `?` in a URL.

Example:

```text
/api/search?query=nextjs
```

Here:

```text
query = nextjs
```

We can access query parameters using `request.nextUrl.searchParams`.

```ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const query = request.nextUrl.searchParams.get("query");

    return NextResponse.json({
        query
    });
}
```

For:

```text
/api/search?query=nextjs
```

the response will be:

```json
{
    "query": "nextjs"
}
```

---

## 10. Query Parameter vs Dynamic Parameter

These two are different.

### Dynamic parameter

```text
/api/users/123
```

Route:

```text
app/api/users/[id]/route.ts
```

Here:

```text
id = 123
```

### Query parameter

```text
/api/search?query=nextjs
```

Route:

```text
app/api/search/route.ts
```

Here:

```text
query = nextjs
```

So:

```text
/users/123
      ↑
dynamic route parameter
```

```text
/search?query=nextjs
        ↑
query parameter
```

---

# Data Fetching

## 11. Data Fetching in Next.js

Data fetching means getting data from an API, database or some other source.

In Next.js, we need to decide **when the data should be fetched**.

The three important rendering/data-fetching methods here are:

* SSR
* SSG
* ISR

---

## 12. SSR — Server-Side Rendering

SSR means the page is rendered on the **server for each request**.

So whenever a user requests the page, Next.js gets the latest data and generates the page.

Example:

```ts
export default async function Page() {
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1",
        {
            cache: "no-store"
        }
    );

    const data = await res.json();

    return (
        <div>
            <h1>{data.title}</h1>
            <p>Generated at: {new Date().toLocaleTimeString()}</p>
        </div>
    );
}
```

The important part is:

```ts
cache: "no-store"
```

This tells Next.js not to use a cached response.

So the data is fetched again for every request.

### When is SSR useful?

SSR is useful when the data changes frequently and we want fresh data.

Examples:

```text
Dashboard
User profile
Live or frequently changing data
```

---

# 13. SSG — Static Site Generation

SSG means the page is generated at **build time**.

The page is created when the application is built instead of generating it for every request.

Example:

```ts
export default async function Page() {
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1",
        {
            cache: "force-cache"
        }
    );

    const data = await res.json();

    return (
        <div>
            <h1>{data.title}</h1>
        </div>
    );
}
```

Here:

```ts
cache: "force-cache"
```

allows the fetched result to be cached.

The page is suitable for data that does not need to change on every request.

### When is SSG useful?

Examples:

```text
Blog
Documentation
Landing pages
Static content
```

---

# 14. ISR — Incremental Static Regeneration

ISR is useful when we want the advantages of static pages but still want the data to update periodically.

The page can be generated statically and then regenerated in the background after a specific amount of time.

Example:

```ts
export default async function Page() {
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1",
        {
            next: {
                revalidate: 10
            }
        }
    );

    const data = await res.json();

    return (
        <div>
            <h1>{data.title}</h1>
        </div>
    );
}
```

Here:

```ts
revalidate: 10
```

means Next.js can regenerate the cached data after 10 seconds.

So the page does not need to be completely regenerated on every request.

### When is ISR useful?

Examples:

```text
News
E-commerce products
Changing blog content
Product pages
```

---

# 15. SSR vs SSG vs ISR

The easiest way to understand them:

### SSR

```text
Request
   ↓
Fetch data
   ↓
Generate page
   ↓
Send page
```

Every request can get fresh data.

---

### SSG

```text
Build
   ↓
Fetch data
   ↓
Generate page
   ↓
Serve the same generated page
```

The page is generated at build time.

---

### ISR

```text
Build
   ↓
Generate page
   ↓
Serve cached page
   ↓
After revalidation time
   ↓
Generate updated version
```

The page is static but can be updated periodically.

---

# 16. Data Fetching in App Router

In the App Router, we don't use the old methods:

```text
getServerSideProps()
getStaticProps()
```

Instead, data fetching can be controlled using the `fetch()` options.

For SSR:

```ts
fetch(url, {
    cache: "no-store"
});
```

For cached/static data:

```ts
fetch(url, {
    cache: "force-cache"
});
```

For ISR:

```ts
fetch(url, {
    next: {
        revalidate: 10
    }
});
```

So the basic idea is:

```text
cache: "no-store"
        ↓
SSR

cache: "force-cache"
        ↓
SSG

next: { revalidate: 10 }
        ↓
ISR
```

---

# 17. Complete Example

### SSR

```ts
const res = await fetch(url, {
    cache: "no-store"
});

const data = await res.json();
```

### SSG

```ts
const res = await fetch(url, {
    cache: "force-cache"
});

const data = await res.json();
```

### ISR

```ts
const res = await fetch(url, {
    next: {
        revalidate: 60
    }
});

const data = await res.json();
```

Here `60` means the data can be revalidated after 60 seconds.

---

# Quick Revision

## API Routes

```text
app/api/hello/route.ts
        ↓
/api/hello
```

```ts
export async function GET() {
    return NextResponse.json({
        message: "Hello"
    });
}
```

POST:

```ts
export async function POST(request: NextRequest) {
    const body = await request.json();

    return NextResponse.json({
        body
    });
}
```

Dynamic API route:

```text
app/api/users/[id]/route.ts
        ↓
/api/users/123
```

Query parameter:

```text
/api/search?query=nextjs
```

```ts
const query =
    request.nextUrl.searchParams.get("query");
```

---

## Data Fetching

| Type | When data is fetched            | Fetch option               | Example       |
| ---- | ------------------------------- | -------------------------- | ------------- |
| SSR  | Every request                   | `cache: "no-store"`        | Dashboard     |
| SSG  | Build time                      | `cache: "force-cache"`     | Blog          |
| ISR  | Build + background regeneration | `next: { revalidate: 10 }` | News/products |

The main thing to remember:

```text
SSR
→ fresh data on every request

SSG
→ generate once at build time

ISR
→ generate statically + update after a time
```
