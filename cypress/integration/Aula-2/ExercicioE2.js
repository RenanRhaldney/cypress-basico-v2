/// <reference types="Cypress" />

describe("Central de Atendimento ao Cliente TAT", function () {
  const mensagem =
    "Tive um bom suporte neste curso, sempre que tive duvidas alguem veio me auxiliar rapidamente, agradeço muito a todos envolvidos no projeto para minha evolução";

  beforeEach(() => {
    cy.visit("./src/index.html");
  });

  it("exibe mensagem de erro ao submeter o formulário com um email com formatação inválida", function () {
    cy.get("#firstName").type("Renan");
    cy.get("#lastName").type("Mello");
    cy.get("#email").type("Renan.rhaldneyhotmail.com");
    cy.get("#phone").type("981387730");
    cy.get("select").select("cursos");
    cy.get(":nth-child(3) > input").click();
    cy.get("#email-checkbox").click();
    cy.get("#open-text-area").type(mensagem, { delay: 0 });
    cy.get('button[type="submit"]').click();
    /* Esse trecho de código busca por um elemento com a classe "error" e, em seguida, restringe a busca apenas dentro
      desse elemento. E por fim, verifica se o elemento <strong> dentro desse escopo restrito está visível. */
    cy.get(".error").within(() => {
      cy.get("strong").should("be.visible");
    });
  });
});
