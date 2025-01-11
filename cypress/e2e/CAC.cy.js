describe('Central de Atendimento ao Cliente', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })
  
  it('verificar o titulo da aplicacao', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it('preencher os campos obrigatórios e envia o formulário', () =>{
    // Texto longo com biblioteca _
    const longTexto = Cypress._.repeat('abcdef', 100)
    
    cy.get('#firstName').type('Pedro')
    cy.get('#lastName').type('Lima')
    cy.get('#email').type('teste@mail.com')
    cy.get('#open-text-area').type(longTexto, {
      delay: 0
    })

    cy.get('button[type="submit"]').click()

    cy.get('.success').should('be.visible')
  })

  it('exibe mensagem de erro ao usar email inválido', () => {
    cy.get('#firstName').type('Pedro')
    cy.get('#lastName').type('Teste')
    cy.get('#email').type('teste.gmail.com')
    cy.get('#open-text-area').type('Teste para email inválido!')

    cy.get('button[type="submit"]').click()

    cy.get('.error').should('be.visible')
  })

  it.only('Campo telefone continua vazio quando preenchido com valor errado', () => {
    cy.get('#phone')
      .type('abcde')
      .should('have.value', '')
  })
})