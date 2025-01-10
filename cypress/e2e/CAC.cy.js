describe('Central de Atendimento ao Cliente', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })
  
  it('verificar o titulo da aplicacao', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })
})