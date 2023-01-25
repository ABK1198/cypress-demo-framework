/// <reference types = "cypress"/>

describe('Writing to a file in fixtures',()=>{

    it('Refreshing Write Test',()=>{
        cy.request('GET','https://demoqa.com/BookStore/v1/Books').then(RESPONSE=>{
            cy.writeFile('cypress/fixtures/ReadWriteFile/READANDWRITE.json',RESPONSE.body)
        })
    })
})