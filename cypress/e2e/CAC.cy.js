describe('Central de Atendimento ao Cliente', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })
  
  it('verificar o titulo da aplicacao', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it('preencher os campos obrigatórios e envia o formulário', () =>{
    cy.get('#firstName').type('Pedro')
    cy.get('#lastName').type('Lima')
    cy.get('#email').type('teste@mail.com')
    cy.get('#open-text-area').type('Obrigado!')

    cy.get('button[type="submit"]').click()

    cy.get('.success').should('be.visible')
  })
})