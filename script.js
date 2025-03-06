//your JS code here. If required
it('testing modal close functionality', () => {
    cy.get('button').first().click().then(() => {
        cy.get('.modal').should('be.visible');

        // Fix: Cypress should wait for the modal to close completely
        cy.get('.close').click();
        cy.wait(500);  // Ensures Bootstrap animation completes

        // Instead of checking 'not.be.visible', check if the modal is hidden in the DOM
        cy.get('.modal').should('have.attr', 'aria-hidden', 'true');
    });
});
