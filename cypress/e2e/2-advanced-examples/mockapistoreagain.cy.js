describe('Intercept Demo',() =>{
    it('Mocked API Response',() => {

        cy.visit('https://www.demoblaze.com/');
        cy.get('#nava').should('contain.text','PRODUCT STORE');
        cy.get('.hrefch').eq('0').click();


    })


    it('Mocked API Response',()=>{
        cy.intercept('GET','/view',{fixture: 'intercept/interceptFixtureagain.json'}).as('get-STOREfixture')
        
        cy.visit('https://www.demoblaze.com/');
        cy.wait(10000)
        cy.get('.hrefch').eq('0').click();

    })
})