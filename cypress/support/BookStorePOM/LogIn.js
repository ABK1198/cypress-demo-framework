export class LogIn {
    
    elements = {
         titleSpan: () => cy.get('#userName-value')
    }
    getUsername(){
        return this.elements.titleSpan()
    }
}