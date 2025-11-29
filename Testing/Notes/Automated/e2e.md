# End-to-End (E2E) Testing

✅ What it is:

Tests the entire application as a real user would — through the browser.

✅ Purpose:

Simulate real user behavior: clicking, navigating, submitting forms.
Ensures the full system (frontend, backend, database) works.

✅ Example:

Test login flow or search/filter UI from start to finish.

// Cypress or Playwright
it('can search and filter products', () => {
  cy.visit('/');
  cy.get('input[placeholder="Search by title..."]').type('shoes');
  cy.contains('Running Shoes').should('exist');
});

✅ Tools:

Cypress
Playwright
Selenium (older)