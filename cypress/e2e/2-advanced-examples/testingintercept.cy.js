describe('intercept demo',()=>{
    it('validation',()=> {
        cy.visit('https://katalon-demo-cura.herokuapp.com/')
        cy.get('.text-vertical-center h3').should('contain.text','We Care About Your Health');
    })
})