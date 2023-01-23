describe('Assertion Demo', () => {

    beforeEach(()=> {
        cy.visit('https://demoqa.com/radio-button')
    });

    it('TDD Assertions', () => {
        cy.log('--Length Check')
        cy.get('input[type=radio]').should('have.length',3)

        cy.log('--Class Check')
        cy.get('input[type=radio]').eq(2).should('have.class','disabled')
        cy.get('.mt-3').should('not.exist');

        cy.log('--Text Check')
        cy.get('input[type=radio]').eq('0').click({force: true});
        cy.get('.mt-3').should('have.text','You have selected Yes')
        .and('include.text','Yes')
        .and('not.contain','test')

        cy.log('--CSS Check')
        cy.get('.text-success').should('have.css','color','rgb(40, 167, 69)')


    });

    it('BDD Assertions', () => {

        cy.log('-- Length Check - Class Check')
        cy.get('input[type=radio]').should($inputs => {
            expect($inputs).to.have.lengthOf(3)
            expect($inputs).to.have.class('disabled') 
        })

        cy.log('--Text Check')
        cy.get('input[type=radio]').eq(1).click({force: true});
        cy.get('.mt-3')
        .should($response => {
            expect($response).to.have.text('You have selected Impressive')
            expect($response).to.include.text('Impressive')
            expect($response).to.not.include.text('No');
        })

        cy.log('--Yes Radio Button')
        cy.get('input[type=radio]').eq(0).click({force: true});
        cy.get('.mt-3')
        .should($result => {
            expect($result).to.have.text('You have selected Yes')
            expect($result).to.include.text('Yes')
            expect($result).to.not.include.text('impressive');
        })




    })
});