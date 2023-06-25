/// <reference types="Cypress"/>

describe("Central de Atendimento ao Cliente TAT", function () {
  beforeEach(() => {
    cy.visit("./src/index.html");
  });

  it("Marca ambos checkboxes, depois desmarca o último", function () {
    cy.get('input[type="checkbox"]') //seleciona todos elementos input do tipo checkbox
      .check() // Marca todos os elementos selecionado
      .should("be.checked") //verifica se os elementos estão marcados
      .last() // Pega o ultimo elemento que deu o check
      .uncheck() // Desmarca o elemento
      .should("not.be.checked"); // verifica se o elemento não está checado
  });
});
