/// <reference types="Cypress" />

describe("Central de Atendimento ao Cliente TAT", function () {
  const mensagem =
    "Tive um bom suporte neste curso, sempre que tive duvidas alguem veio me auxiliar rapidamente, agradeço muito a todos envolvidos no projeto para minha evolução";

  beforeEach(() => {
    cy.visit("./src/index.html");
  });
  it("verifica o título da aplicação", function () {
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });

  //EXERCICIO 1
  it("preenche os campos obrigatórios e envia o formulário", function () {
    cy.get("#firstName").type("Renan");
    cy.get("#lastName").type("Mello");
    cy.get("#email").type("Renan.rhaldney@hotmail.com");
    cy.get("#phone").type("981387730");
    cy.get("select").select("cursos");
    cy.get(":nth-child(3) > input").click();
    cy.get("#email-checkbox").click();
    cy.get("#open-text-area").type(mensagem, { delay: 0 });
    cy.contains("button", "Enviar").click();
  });

  //EXERCICIO 2
  it("exibe mensagem de erro ao submeter o formulário com um email com formatação inválida", function () {
    cy.get("#firstName").type("Renan");
    cy.get("#lastName").type("Mello");
    cy.get("#email").type("Renan.rhaldneyhotmail.com");
    cy.get("#phone").type("981387730");
    cy.get("select").select("cursos");
    cy.get(":nth-child(3) > input").click();
    cy.get("#email-checkbox").click();
    cy.get("#open-text-area").type("mensagem", { delay: 0 });
    cy.contains("button", "Enviar").click();
    cy.get(".error").within(() => {
      cy.get("strong").should("be.visible");
    });
  });

  //EXERCICIO 3
  it("se um valor não-numérico for digitado no input phone, seu valor continuará vazio", function () {
    cy.get("#phone").type("abc").should("have.value", "");
  });

  //EXERCICIO 4
  it("exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário", function () {
    cy.get("#firstName").type("Renan");
    cy.get("#lastName").type("Mello");
    cy.get("#email").type("Renan.rhaldney@hotmail.com");
    cy.get("select").select("cursos");
    cy.get(":nth-child(3) > input").click();
    cy.get("#phone-checkbox").click();
    cy.get("#open-text-area").type(mensagem, { delay: 0 });
    cy.contains('button', 'Enviar').click();
    cy.get(".error").within(() => {
      cy.get("strong").should("be.visible");
    });
  });

  //EXERCICIO 5
  it("preenche e limpa os campos nome, sobrenome, email e telefone", function () {
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

  //EXERCICIO 6
  it("exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios", function () {
    cy.contains('button', 'Enviar').click();
    cy.get(".error").should("be.visible"); // be.visible verifica se o elemento está visivel na tela
  });

  //EXERCICIO 7
  it("envia o formuário com sucesso usando um comando customizado", function () {
    cy.fillMandatoryFieldsAndSubmit(); //função criada em support>commands.js 'Otima maneira de organizar a arquitetura do projeto'

    cy.get("strong").should("be.visible"); // be.visible verifica se o elemento está visivel na tela
  });
});
