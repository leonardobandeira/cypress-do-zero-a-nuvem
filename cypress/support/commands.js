Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
    cy.get('#firstName').type('Pedro Pedro')
    cy.get('#lastName').type('Pedro P')
    cy.get('#email').type('pedropedro@pedro.p')
    cy.get('#open-text-area').type('Teste automatico!')
    
    cy.get('button[type="submit"]').click()
})