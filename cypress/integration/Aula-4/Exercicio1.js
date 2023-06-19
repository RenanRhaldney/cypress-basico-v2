/// <reference types="Cypress"/>

describe("Central de Atendimento ao Cliente TAT", function () {
  beforeEach(() => {
    cy.visit("./src/index.html");
  });

  it("marca cada tipo de atendimento", function () { 
    cy.get('input[type="radio"]')
    .should('have.length', 3) // Verifica o tamanho da lista 
    .each(($radio)=> { // É usada para iterar sobre um conjunto de elementos correspondentes selecionados pelo seletor fornecido
      // Comandos a serem executados para cada elemento correspondente
      cy.wrap($radio).check(); // Da um check em cada elemento
      cy.wrap($radio).should("be.checked"); // Verifica se o elemento foi selecionado
    });
  });
});
