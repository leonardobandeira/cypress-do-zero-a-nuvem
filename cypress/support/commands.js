Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
    cy.get('#firstName').type('Pedro Pedro')
    cy.get('#lastName').type('Pedro P')
    cy.get('#email').type('pedropedro@pedro.p')
    cy.get('#open-text-area').type('Teste automatico!')
    
    cy.get('button[type="submit"]').click()
})

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', data => {
    cy.get('#firstName').type(data.nome)
    cy.get('#lastName').type(data.sobrenome)
    cy.get('#email').type(data.email)
    cy.get('#open-text-area').type(data.texto)
    
    cy.get('button[type="submit"]').click()
})