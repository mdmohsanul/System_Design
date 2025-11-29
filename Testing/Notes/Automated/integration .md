✅ What it is:

Tests how multiple units of code work together — for example, a component interacting with Redux, hooks, or an API.

✅ Purpose:

Ensure different pieces of your app integrate correctly.
Covers real interactions and state flow, not just static output.

✅ Example:

Testing that a component updates after a Redux action:

test('filter updates the product list', () => {
  render(
    <Provider store={store}>
      <ProductList />
    </Provider>
  );

  fireEvent.change(screen.getByPlaceholderText('Search by title...'), {
    target: { value: 'shoes' }
  });

  expect(screen.getByText(/shoes/i)).toBeInTheDocument();
});

✅ Tools:

Jest / Vitest
@testing-library/react
Redux mocking (@reduxjs/toolkit, redux-mock-store, etc.)

