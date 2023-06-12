/// <reference types="Cypress" />

describe("Central de Atendimento ao Cliente TAT", function () {
  const mensagem =
    "Tive um bom suporte neste curso, sempre que tive duvidas alguem veio me auxiliar rapidamente, agradeço muito a todos envolvidos no projeto para minha evolução";

  beforeEach(() => {
    cy.visit("./src/index.html");
  });

  it('envia o formuário com sucesso usando um comando customizado', function(){
    
  })
});
