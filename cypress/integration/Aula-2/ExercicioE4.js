/// <reference types="Cypress" />

describe("Central de Atendimento ao Cliente TAT", function () {
  const mensagem =
    "Tive um bom suporte neste curso, sempre que tive duvidas alguem veio me auxiliar rapidamente, agradeço muito a todos envolvidos no projeto para minha evolução";

  beforeEach(() => {
    cy.visit("./src/index.html");
  });

  it.only("exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário", function () {
    cy.get("#firstName").type("Renan");
    cy.get("#lastName").type("Mello");
    cy.get("#email").type("Renan.rhaldney@hotmail.com");
    cy.get("select").select("cursos");
    cy.get(":nth-child(3) > input").click();
    cy.get("#phone-checkbox").check();
    cy.get("#open-text-area").type(mensagem, { delay: 0 });
    cy.get('button[type="submit"]').click();
    cy.get(".error").within(() => {
      cy.get("strong").should("be.visible");
    });
  });
});
