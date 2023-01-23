/// <reference types="cypress"/>

describe('Variables and Aliases Demo', () => {

    beforeEach(function(){
        cy.visit('https://demoqa.com/modal-dialogs')
    })

    it('Closures and Variables',() => {

        cy.get('#showSmallModal').then($modalButton => {
            const smallmodalText = $modalButton.text()
            cy.log(smallmodalText);  

            $modalButton.click()
            cy.get('.modal-title').contains(smallmodalText,{matchCase: false})    
        })
    })

    it('Alias DEMO', function(){

        cy.get('#showSmallModal').invoke('text').as('invokeText')
    });

    it('Sharing CONTEXT', function(){
        cy.get('@invokeText').then((it)=>{
            cy.log(it)
        })
        cy.log(this.invokeText)
    }) 
})