describe("Vericando os componentes em tela", function() {

    it("View modules", function() {
        cy.visit("/modulos");

        cy.get(".item").should("exist");
    })

    it("View Exercicies in modules", function() {
        cy.visit("/modulos");

        cy.get(".item").contains("Ver os Exercicos").click()

    })

})