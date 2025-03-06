it('testing modal close functionality', () => {
    cy.get('button').first().click(); // Open modal
    cy.get('.modal').should('be.visible'); // Check if modal is visible

    cy.get('.close').click(); // Click close button

    // Fix: Wait for Bootstrap animation to finish properly
    cy.wait(1000);

    // Fix: Use 'aria-hidden' instead of 'not.be.visible'
    cy.get('.modal').should('have.attr', 'aria-hidden', 'true');
});
