describe('Assertion Demo',()=>{

    beforeEach('Visit Website before Each Test',()=>{
        cy.visit('https://demoqa.com/radio-button')
    })
    it('TDD Assertions',()=>{
        cy.log('--Length Check')
        cy.get('.custom-control-input').should('have.length',3)
    })

    it('Class Check',()=>{
        cy.log('--Checking No Radio Button')
        cy.get('.custom-control-label').eq(2).should('have.class','disabled')
    })

    it('text-check',()=>{
        cy.log('--Checkin Text After Clicking a Button')
        cy.get('.custom-control-label').eq(0).click({force: true})
        cy.get('.mt-3').should('have.text','You have selected Yes')
        cy.get('.text-success').should('have.css','color','rgb(40, 167, 69)')
    })

    it('BDD Assertions',()=>{
        cy.get('.custom-control-label').should($input => {
            expect($input).to.have.length(3)
            expect($input).to.have.class('disabled')
        })
    })

    

    
})