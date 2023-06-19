/// <reference types="Cypress"/>

describe("Central de Atendimento ao Cliente TAT", function () {
  beforeEach(() => {
    cy.visit("./src/index.html");
  });

  it('marca o tipo de atendimento "Feedback"', function () {
    cy.get('input[value="feedback"]').check().should("have.value", "feedback"); // Selecionando 1 item do input tipo radio e verificando se o valor foi selecionado
  });
});
