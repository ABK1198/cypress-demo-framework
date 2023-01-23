let email = "abk119811@gmail.com";
let password = "zxcvbnm123";


describe('opening the website',function(){

    beforeEach('before each test',function(){

        cy.visit('/')
    });

    it('GET Method',function(){

        cy.get('#input-email').type(email);
        cy.get('#input-password').type(password);
        cy.contains('button[type="submit"]','Login').click();

    });

/*    
    it('EQ|FIRST|LAST Method',function(){
        cy.get('input')eq(1).type(email);
        cy.get('input').eq(3).type(password);
        cy.get('input').last().click();
    })
  */
 
   /* it('FILTER Method',function(){
        cy.get('input').filter('[type="text"]').type(email);
        cy.get('input').filter('[type="password"]').type(password)
        cy.get('input').filter('[type="submit"]').click();
    })
    */

    it('Find Method',function(){
        cy.get('form').find('input').eq(0).type(email)
        cy.get('form').find('input').eq(1).type(password)
        cy.contains('button[type="submit"]','Login').click();
    })

    it('Parent Method',function(){
        cy.get('form').parent().should('have.class','col-sm-6 col-md-6')
    })

});

    