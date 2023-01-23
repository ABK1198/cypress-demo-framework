describe('Retry-Ability Session',function(){

  beforeEach('before each',function(){

    cy.visit('http://localhost:8888/#/')    //command

    cy.get('.new-todo')   //command
    .type('todo-a{Enter}')  //command
    .type('todo-B {Enter}')  //command
  }) 

    it('should have two <li> elements', function(){

        cy.get('.todo-list li')  //command
        .should('have.length',2)  //assertion
    



  });
});