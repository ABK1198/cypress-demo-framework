/// <reference types ="cypress"/>

describe('Variable and Aliases Demo', () => {
    beforeEach(function(){
        cy.visit('https://demoqa.com/modal-dialogs')


    })

    it('closures and variables',()=>{
        cy.get('#showSmallModal').then($SmallModal=>{
            const ModalButtonText = $SmallModal.text()

            cy.log(ModalButtonText)
            $SmallModal.click()
            cy.get('.modal-title').contains(ModalButtonText,{matchCase: false});
            
        })
    })

    it('Again Closures and variables',()=>{
        cy.get('#showSmallModal').then($SMALLMODAL => {
            const SMALLMODALTEXT = $SMALLMODAL.text()
            cy.log(SMALLMODALTEXT)
            $SMALLMODAL.click()

            cy.get('.modal-title').contains(SMALLMODALTEXT,{matchCase: false});
        })
    })

    it('Alias DEMO',function(){
        cy.get('#showSmallModal').invoke('text').as('InvokedText')
    })

    it('Sharing Context', function(){
        cy.log(this.InvokedText)
    })
})