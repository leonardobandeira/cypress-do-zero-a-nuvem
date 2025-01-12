describe('Central de Atendimento ao Cliente', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })

  it('verificar o titulo da aplicacao', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it('preencher os campos obrigatórios e envia o formulário', () => {
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

  it('Campo telefone continua vazio quando preenchido com valor errado', () => {
    cy.get('#phone')
      .type('abcde')
      .should('have.value', '')
  })

  it('exibe mensagem quando o telefone é obrigatorio mas é vazio', () => {
    cy.get('#firstName').type('Pedro')
    cy.get('#lastName').type('Pedro P')
    cy.get('#email').type('pedropedro@p.com')
    cy.get('#open-text-area').type('Teste')
    cy.get('#phone-checkbox').click()

    cy.get('button[type="submit"]').click()

    cy.get('.error').should('be.visible')
  })

  it.only('verifica campos limpos', () => {
    cy.get('#firstName')
      .type('Pedro')
      .should('have.value', 'Pedro')
      .clear()
      .should('have.value', '')

    cy.get('#lastName')
      .type('Pedro P')
      .should('have.value', 'Pedro P')
      .clear()
      .should('have.value', '')

    cy.get('#email')
      .type('pedropedro@pedro.p')
      .should('have.value', 'pedropedro@pedro.p')
      .clear()
      .should('have.value', '')

    cy.get('#phone')
      .type('123456789')
      .should('have.value', '123456789')
      .clear()
      .should('have.value', '')
  })

  it.only('enviando sem dados obrigatorios', () => {
    cy.get('button[type="submit"]').click()

    cy.get('.error').should('be.visible')
  })

  it.only('1 - envia formulário completo com comando customizado', () => {
    cy.fillMandatoryFieldsAndSubmit()

    cy.get('.success', { timeout: 10000 }).should('be.visible');
  })
})