describe('Writing into a file',()=>{
    it('Test for Writing into a file',()=>{
        cy.request('GET','https://demoqa.com/BookStore/v1/Books').then(response=> {
            cy.writeFile('cypress/fixtures/ReadWriteFile/ReadWritingagain.json',response.body)
        })
    })
})