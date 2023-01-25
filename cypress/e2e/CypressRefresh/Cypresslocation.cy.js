/// <reference types = "cypress"/>

describe('Testing location tests',()=>{
    beforeEach('before each test',()=>{
        cy.visit('https://demoqa.com/books')
    })

    it('protocol',()=>{
        cy.location().should((loc)=>{
            expect(loc.protocol).to.eq('https:')
            expect(loc.href).to.eq('https://demoqa.com/books')
            expect(loc.host).to.eq('demoqa.com')
            expect(loc.hostname).to.eq('demoqa.com')
        })
    })
})