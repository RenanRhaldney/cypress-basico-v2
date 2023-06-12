/// <reference types="Cypress" />

describe("Central de Atendimento ao Cliente TAT", function () {
  const mensagem =
    "Tive um bom suporte neste curso, sempre que tive duvidas alguem veio me auxiliar rapidamente, agradeço muito a todos envolvidos no projeto para minha evolução";

  beforeEach(() => {
    cy.visit("./src/index.html");
  });

  it.only("preenche e limpa os campos nome, sobrenome, email e telefone", function () {
    cy.get("#firstName") //Pega o elemento
      .type("Renan") // Digita o nome Renan
      .should("have.value", "Renan") // Verifica se o value do elemento é Renan
      .clear() // Apaga o value do elemento
      .should("have.value", ""); // Verifica se o value do elemento é '' = vazio
    cy.get("#lastName")
      .type("Mello")
      .should("have.value", "Mello")
      .clear()
      .should("have.value", "");
    cy.get("#email")
      .type("Renan.rhaldney@hotmail.com")
      .should("have.value", "Renan.rhaldney@hotmail.com")
      .clear()
      .should("have.value", "");
    cy.get("#phone")
      .type("981387730")
      .should("have.value", "981387730")
      .clear()
      .should("have.value", "");
    cy.get("#open-text-area")
      .type(mensagem)
      .should("have.value", mensagem)
      .clear()
      .should("have.value", "");
  });
});
