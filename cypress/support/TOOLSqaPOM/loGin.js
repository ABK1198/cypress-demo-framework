export class loGin {
    elements = {
        UserName: ()=> cy.get('#userName'),
        Password: ()=> cy.get('#password'),
        Login: ()=> cy.get('.btn-primary')
    }

    TYPEuserNAAM(UserName){
        this.elements.UserName().type(UserName)
    }
    TypepassWARD(PassWord){
        this.elements.Password().type(PassWord)
    }
    ClickLAGIN(LogIn){
        this.elements.Login().eq(0).click()
    }
}    