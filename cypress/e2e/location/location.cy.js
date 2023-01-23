describe('Location Demo',function(){

    beforeEach(function(){

        cy.visit('https://www.saucedemo.com/');

    });

    it('should have title tag with value Swag Labs',function(){
        cy.title.should('eq','Swag Labs');
    });

    it('URL should be https://www.saucedemo.com/',function(){
        cy.url().should('eq','https://www.saucedemo.com/')
    });

    it('should be HTTPS',function(){
        cy.location('protocol').should('contains','https');
    });



});