/// <reference types="Cypress" />

describe("Central de Atendimento ao Cliente TAT", function () {
  beforeEach(() => {
    cy.visit("./src/index.html");
  });

  it("seleciona um produto (YouTube) por seu texto", function () {
    cy.get('select[id="product"]')
      .select("youtube") // Selecionando 1 item do dropdown
      .should("have.value", "youtube"); // Verificando se o item selecionado é youtube
  });
});
