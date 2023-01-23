import { BookStoreLogin } from "../../../support/BookStorePOM/BookStoreLogin";
import { LogIn } from "../../../support/BookStorePOM/LogIn";


const BS = new BookStoreLogin
const login = new LogIn
describe('POM Implementation',()=>{

    beforeEach('Before Each Test Visit The Webiste', () => {
        cy.visit('https://demoqa.com/login')
    })

    it('Should Login Successfully',()=>{
        BS.typeUsername('ABK11')
        BS.typePassword('Zxcvbnm@123')
        BS.ClickLoginButton()
        //cy.log('test')
        login.getUsername().should('contain.text','ABK11')
    });

    
});