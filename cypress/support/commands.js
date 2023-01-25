// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('typeLogin', (email,password) =>{

    cy.get('#input-email').type(email);
    cy.get('#input-password').type(password);
    cy.contains('button[type="submit"]','Login').click();


});

Cypress.Commands.add('logout',() => {

    cy.get('.btn-black').click();

})

Cypress.Commands.add('LOGGINGIN',(Email,Password) =>{

    
    cy.get('#navbar_username').type(Email);
    cy.get('#navbar_password_hint').type(Password);
    cy.get('#navbar_loginform').submit()
    
    // cy.get('.loginLeft').within(()=>{
    //     cy.get('input[value="Log in"]').click()
    // })

    /*cy.get('.loginLeft').children('#navbar_loginform').then((Createby)=>{
        let crby = Createby.text()
        cy.writefile()
        })
        cy.get('.inputPad').eq(2).click()
    })*/
});

/*
cy.get('div').eq(1).within(()=>{
    cy.get('.username').type('hello')
    cy.get('.password').type('hello')
    Cy.get('.login').click()
    cy.get('.message',{withinSubject:null}).should('contain.text','success')
    cy.get('forget').click()
})

*/

/*

Cypress.Commands.add('LOGIN',() =>{
    cy.fixture('fixtures-demo/STORE').then((credentials)=>{
        cy.get('#loginusername').type(credentials.EMAIL);
        cy.get('#loginpassword').type(credentials.PASSWORD);
        cy.get('.btn-primary').eq(2).should('contain.text','Log in').click();
    })
    
})

*/

Cypress.Commands.add('logIN',function(){

    cy.fixture('fixtures-demo/STORE').then((credentials)=>{
        cy.get('#loginusername').type(credentials.mail);
        cy.get('#loginpassword').type(credentials.passwrd);
        cy.get('.btn-primary').eq(2).should('contain.text','Log in').click();    
    });


})


Cypress.Commands.add('logOUTRO',() => {

    cy.get('#logout2').click();

})
    
Cypress.Commands.add('logINagain',function(){
    cy.fixture('fixtures-demo/STORE').then((credentials)=>{
        cy.wait(2000);
        cy.get('#loginusername').type(credentials.EMAIL);
        cy.wait(2000);
        cy.get('#loginpassword').type(credentials.PASSWORD);
        cy.wait(2000);
        cy.get('.btn-primary').eq(2).click();
    })
})

Cypress.Commands.add('LOUGIN',function(){
    cy.fixture('fixtures_Again/ToolsQALogin').then((LogINinfo)=>{

        cy.get('#userName').type(LogINinfo.UserName)
        cy.get('#password').type(LogINinfo.Password)
        cy.get('.btn-primary').eq(0).click()
    })
})

Cypress.Commands.add('LOUGOUT',function(){
    cy.fixture('fixtures_Again/ToolsQALogin').then((LogOUTinfo)=>{

        cy.get('#submit').eq(0).click()
    })
})
