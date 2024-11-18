describe("Sccroll", function() {

        it("Scroll", function() {
            cy.visit("https://unsplash.com")
            cy.get('input.gKBw1.uq8A1').type('Ocean{enter}')
            cy.get('h1').should('have.text', 'Ocean')
            cy.scrollTo(0, 3000)
            cy.get('[data-masonryposition="19"] > ._cnA1 > :nth-child(1) > .jWMSo > .JM3zT > .zNNw1 > .wdUrX > [data-testid="photo-grid-masonry-img"]').click()


        })
    })