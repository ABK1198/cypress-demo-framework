describe('Intercept-Demo',() => {

    it.skip('initial validation',()=>{

        cy.visit('https://www.demoblaze.com/');
        cy.get('#login2').click();
        cy.wait(5000);
        cy.logIN();
        

        cy.get('#nava').should('contain.text','PRODUCT STORE');
    })

   
    
    it('Mocked API Response',()=>{

        cy.intercept('GET','/entries',{fixture: 'intercept/interceptFixture.json'}).as('gettingfixtures');
        cy.visit('https://www.demoblaze.com/');
        //cy.get('.hrefch').eq('0').click();
        cy.log('test');

    })

})