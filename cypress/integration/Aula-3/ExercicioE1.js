/// <reference types="Cypress" />

describe("Central de Atendimento ao Cliente TAT", function(){
  const mensagem = "Tive um bom suporte neste curso, sempre que tive duvidas alguem veio me auxiliar rapidamente, agradeço muito a todos envolvidos no projeto para minha evolução";
  beforeEach(() => {
    cy.visit("./src/index.html");
  })

  it('seleciona um produto (Mentoria) por seu valor (value)', function(){
    cy.get('select[id="product"]').select('Mentoria').should('have.value', 'mentoria')

  })

})