✅ What it is:

Tests a single unit of code in isolation — usually a function, hook, reducer, or component.

✅ Purpose:

Verify that one piece of logic works as expected.
No dependencies or side effects.
Run in very short amount of time and make it very easy to pinpoint failures.
Relatively easier to write and maintain.

✅ Example:

Testing a function that adds two numbers:

function add(a, b) {
  return a + b;
}

// Unit test
test('adds 2 + 3 = 5', () => {
  expect(add(2, 3)).toBe(5);
});

✅ Tools:

Jest / Vitest (logic, functions)
@testing-library/react (for React components)
React Testing Library (for UI units like buttons, forms)