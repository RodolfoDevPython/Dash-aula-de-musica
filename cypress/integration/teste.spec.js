describe("My First Test", function() {

    it("View modules", function() {
        cy.visit("http://localhost:3000/modulos");

        cy.get(".item")
    })

    it("View Exercicies in modules", function() {
        cy.visit("http://localhost:3000/modulos");

        cy.get(".item").contains("Ver os Exercicos").click()

    })

})