describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("type into form input", () => {
    cy.get('input[name="ingredient"]')
      .type("milk")
      .should("have.value", "milk");
  });

  it("click on submit button", () => {
    cy.get('button[name="button-submit"]').click();
  });

  it("show error message when form is submited with less than 3 characters", () => {
    cy.get("form")
      .find('input[name="ingredient"]')
      .type("oni");
    cy.get("form")
      .submit()
      .should(
        "contain",
        "Should be more than 3 characters and separate by coma."
      );
  });
});
