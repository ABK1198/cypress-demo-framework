describe('Testing a new website',function(){

    beforeEach(function(){

        cy.visit('https://www.opencart.com/')

    });

    it('should have title OpenCart - Open Source Shopping Cart Solution',function(){

        cy.title().should('equal','OpenCart - Open Source Shopping Cart Solution');

    });

    it('URL should be https://www.opencart.com/',function(){

        cy.url().should('equal','https://www.opencart.com/');

    });

    it('it should include HTTP protocol',function(){

        cy.location('protocol').should('contain','https');
    });

    it('it should equal hostname www.opencart.com',function(){

        cy.location('hostname').should('contain','www.opencart.com')

    });

    it('should redirect',function(){

        cy.get('#input-email').type('abk119811@gmail.com')
        cy.get('#input-password').type('zxcvbnm123')
        cy.get('btn btn-primary btn-lg hidden-xs').click();
        

    })

});