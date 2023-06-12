Cypress.Commands.add("fillMandatoryFieldsAndSubmit", function () {
  cy.get("#firstName").type("Renan");
  cy.get("#lastName").type("Mello");
  cy.get("#email").type("Renan.rhaldney@hotmail.com");
  cy.get("#phone").type("981387730");
  cy.get("select").select("cursos");
  cy.get(":nth-child(3) > input").click();
  cy.get("#email-checkbox").click();
  cy.get("#open-text-area").type('TESTEEEEEE', { delay: 0 });
  cy.get('button[type="submit"]').click();
});
