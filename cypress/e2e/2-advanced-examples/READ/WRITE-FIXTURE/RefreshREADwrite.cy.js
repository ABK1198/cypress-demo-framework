/// <reference types = "cypress"/>
describe('Writing to a file',()=>{

    it('Refreshing Write Test',()=>{
        cy.request('GET','https://demoqa.com/BookStore/v1/Books').then(response=>{
            cy.writeFile('cypress/fixtures/ReadWriteFile/RefreshReadWrite.json',response.body); 
        })
    })
     
})