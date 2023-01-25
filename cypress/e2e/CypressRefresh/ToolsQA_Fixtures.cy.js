describe('Testing Fixtures',()=>{

    beforeEach('Visit Website',()=>{
        cy.visit('https://demoqa.com/login')
    })

    it('LogIN and LogOUT',()=>{
        cy.LOUGIN()
        cy.log('Successful Login')
        cy.wait(2000)
        cy.LOUGOUT()
    })


})