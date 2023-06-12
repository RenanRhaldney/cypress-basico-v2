/// <reference types="Cypress" />

describe("Central de Atendimento ao Cliente TAT", function () {
  const mensagem =
    "Tive um bom suporte neste curso, sempre que tive duvidas alguem veio me auxiliar rapidamente, agradeço muito a todos envolvidos no projeto para minha evolução";

  beforeEach(() => {
    cy.visit("./src/index.html");
  });

  it.only("exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios", function () {
    cy.get(".button").click();
    cy.get(".error").should("be.visible"); // be.visible verifica se o elemento está visivel na tela
  });
});
