

describe('Commands Example',function(){

    beforeEach('before every test login',function(){
        cy.visit('https://www.opencart.com/index.php?route=account/login')
        cy.typeLogin('abk119811@gmail.com','mnbvcxz321')
    });

    it('Test',function(){
        cy.log('test')
        cy.get('.alert').should('contain.text',' Account has not been verified yet!');
        cy.logout();
        //cy.get('.navbar-brand').should('contain.text','OpenCart - Open Source Shopping Cart Solution');
        cy.url().should('eq','https://www.opencart.com/index.php?route=common/home');
    })

    afterEach('after each test logout',function(){
        cy.logout();
    })

})