describe ("just a dummy", () => {
    it("should just work", () => {
        cy.visit ('http://localhost:3000/create_account')
        cy.get ('.formDiv').within(() => {
            cy.get("form").should('contain', 'button')
        })
        // expect(true).to.be(true)
    })
})