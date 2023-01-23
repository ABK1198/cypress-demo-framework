export class BookStoreLogin {
    elements = {
        UserNameInput: ()=> cy.get('#userName'),
        PasswordInput: ()=>  cy.get('#password'),
        LoginButton: ()=> cy.get('#login')
    }

    typeUsername(UserName){
        this.elements.UserNameInput().type(UserName)
    }
    typePassword(Password){
        this.elements.PasswordInput().type(Password)
    }
    ClickLoginButton(){
        this.elements.LoginButton().click();
    }
}

