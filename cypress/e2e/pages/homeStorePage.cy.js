class homeStorePage{
    elements = {
        usernameInput: ()=> cy.get('#loginusername'),
        passwordInput: ()=> cy.get('#loginpassword'),
        loginBtn: () => cy.get('.btn-primary').eq(2),
    }

    typeUsername(username){
        this.elements.usernameInput().type(username);
    }

    typePassword(password){
        this.elements.passwordInput().type(password);
    }

    clickLogin(){
        this.elements.loginBtn().click();
    }
}

module.exports = new homeStorePage();