/// <reference types="Cypress" />

describe("Central de Atendimento ao Cliente TAT", function () {
  beforeEach(() => {
    cy.visit("./src/index.html");
  });
  it("verifica o título da aplicação", function () {
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });
  it('preenche os campos obrigatórios e envia o formulário', function(){
    cy.get('input[id="firstName"]').type('Renan')
    cy.get('input[id="lastName"]').type('Mello')
    cy.get('input[id="email"]').type('renan.rhaldney@gmail.com')
    cy.get('input[id="phone"]').type('81981387730')
    cy.get('input[value="elogio"]').click()
    cy.get('input[id="email-checkbox"]').click()
    cy.get('textarea[id="open-text-area"]').type('Esse curso está muito bom, estou aprendendo bastante ja no inicio')
    cy.get('button[type="submit"]').click()
    cy.get('.success').should('be.visible')
  })
});
