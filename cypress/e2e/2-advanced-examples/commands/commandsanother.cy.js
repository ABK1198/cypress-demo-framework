describe('Testing My own commands',function(){

    beforeEach('Before Each Test Runs ',function(){
        cy.visit('https://www.zen-cart.com/')
        cy.LOGGINGIN('ABK1198','Zxcvbnm123');
        cy.debug()

    });

    it('should check now its first test',function(){
        cy.log('TEST');
        cy.wait(5000)
        cy.get('.blockrow ').should('contain.text','You have been banned for the following reason:');

    })

   /* it('should have URL of MainPage',function(){
        cy.url().should('equal','https://alternativeto.net/');
    })
    */

})