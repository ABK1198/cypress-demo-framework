let username = "standard_user";
let password = "secret_sauce";



describe('Locators in Cypress',function(){
    beforeEach(function(){
        cy.visit('https://www.saucedemo.com/')
    });
});

    it('GET Method',function(){

        cy.get('#user-name').type(username);
        cy.get('input#password').type(password);
        cy.get('[data-test="login-button"]').click();

    });

    it('EQ|FIRST|LAST Method',function(){
        cy.get('input').first().type(username);
        cy.get('input').eq(1).type(password);
        cy.get('input').last().click();
    })