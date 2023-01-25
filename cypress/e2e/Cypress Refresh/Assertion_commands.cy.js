/// <reference types="cypress" />

describe('Refreshing assertions',() => {

    beforeEach('Visit Website',()=>{
        cy.visit('https://demoqa.com/text-box')
    })

    it('TDD Assertions',()=>{
        cy.log('Text Boxes Check')
        cy.get('.form-control').should('have.length', 4);
    })

    it('Submit Button Check',()=>{

        cy.get('.btn-primary').should('contain.text','Submit');
    })

    it('Filling the fields',()=>{
        cy.get('#userName').type('ABK')
        cy.get('#userEmail').type('ABK@Email.com')
        cy.get('#currentAddress').type('Canal Campus')
        cy.get('#permanentAddress').type('Peshawar')
        cy.get('.btn-primary').click();
    })

    it('BDD Assertions',()=>{

        cy.get('.mb-1').should($Form => {
            expect($Form).to.have.length(0)
           // expect($Form).should('contain.text','Email')
        })

    })

  
})