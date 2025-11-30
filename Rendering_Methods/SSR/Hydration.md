# What is hydration?
- Hydration is the process when React takes the server rendered HTML and attaches javascript to become interactive.

- During hydration, React takes control in the browser and reconstructs the component tree in memory, using the server-rendered HTML as a blueprint.

- It carefully maps out where all the interactive elements should go, then hooks up the javascript logic

- This involves initializing application state, adding click, mouseover handlers and setting up all the dynamic features needed for a full interactive user experience.

# hydration process
- Load React JS bundle
- Walks through the DOM
- attaches the eventlisteners

# Hydration is expensive
- Hydration == React rendering again on the client
- That is why react server component were introduced to eliminate the hydration cost by sending zero JS for server only components