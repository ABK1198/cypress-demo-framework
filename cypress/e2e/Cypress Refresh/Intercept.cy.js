describe('Testing',()=>{
    it('Mock API Response',()=>{
        cy.intercept('GET','https://demoqa.com/BookStore/v1/Books',{fixture: 'intercept/intercept.json'}).as('FIXTURES');
        cy.visit('https://demoqa.com/books')
    })
})