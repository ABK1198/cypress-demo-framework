import homeStorePage from '../../pages/homeStorePage'
import loggedIN from '../../pages/loggedIN'

describe('POM Implementation', () => {
    beforeEach(()=> {
        cy.visit('https://www.demoblaze.com/index.html')
    });

    it('should login successfully', () => {
        homeStorePage.typeUsername('testing099@gmail.com');
        homeStorePage.typePassword('testing123');
        homeStorePage.clickLogin();

        loggedIN.elements.titleSpan.should('contain.text','PRODUCT STORE');

    });  
    
});