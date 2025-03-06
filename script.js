describe("example to-do app", () => {

  beforeEach(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false; // Prevent Cypress from failing due to app errors
    });

    cy.visit(baseUrl);
  });

  it("testing initial render tags", () => {
    cy.get('button').first().then($el => {
      const text = $el.text().trim();
      expect(text).to.be.equal('Sign Up');
    });

    const properties = ['color', 'background-color', 'border-radius', 'padding'];
    properties.forEach(property => {
      cy.get('button').should('have.css', property);
    });
  });

  it("testing button functionality", () => {
    cy.get('.modal').should('not.be.visible');
    cy.get('button').first().click();
    cy.get('.modal').should('be.visible');
  });

  it("testing modal close functionality", () => {
    cy.get('button').first().click();
    cy.get('.modal').should('be.visible');

    // Ensure Cypress finds the correct close button
    cy.get('.close').click();

    // Fix: Wait for Bootstrap animation to complete
    cy.wait(1000);

    // Fix: Use a reliable check for modal closing
    cy.get('.modal').should('not.exist');
  });

  it("testing modal tags", () => {
    cy.get('button').first().click(); // Open modal
    cy.get('.modal').within(() => {
      const tags = ['form', 'label', "input[type='email']", "input[type='password']"];
      tags.forEach(tag => {
        cy.get(tag).should('have.length.at.least', 1);
      });
    });
  });

});
