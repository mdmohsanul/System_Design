## Suspense SSR Architecture

- Use the <Suspense> component to unlock two major SSR features:

1. HTML streaming on the server.
2. Selective hydration on the client

# What is suspense?
- Suspense is a React feature that allow components to pause rendering while they wait for something (usually data) and show a fallback UI (a loading state) instead of blocking the whole page.

export default function Page() {
  return (
    <Suspense fallback={<p>Loading products...</p>}>
      <Products />
    </Suspense>
  );
}


# So it solves the first drawback of SSR as we don't have to fetch everything before we show anything.
- But the bundle 

# Selective hydration - only hydrate whats needed

# Drawback of Suspense SSR
- but now also user have to load all the js code to browser
- all react component gets hydrated on client side wether it needs interactivity or not.