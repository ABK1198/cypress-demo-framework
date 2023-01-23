describe('Testing for osco',function(){

    beforeEach('Before each test',function(){
        cy.visit('https://www.demoblaze.com/index.html')

        //cy.fixture('fixtures-demo/STORE').as('creds')
        // .then(credentials => {
        //         this.credentials=credentials;
            
        // })
    });

    it('should open the website upon sucessfully visiting the page',function(){
        cy.get('#login2').click();
        cy.wait(5000);
        //cy.get('@creds').then((credentials)=>{
            cy.logIN();
        //})
        
        cy.wait(5000);

       cy.get('#nameofuser').should('contain.text','Welcome IONLYTEST01');
       //cy.get('#logout2').click();
       cy.logOUTRO();
    });

    /*
    it('should welcome the user', function(){
        cy.get('#nameofuser').should('contain.text','Welcome testing099@gmail.com');
    })
    */

    /*
    it('Test API',()=>{
        cy.intercept('https:/','GET').as('apiwait')
        cy.wait('@apiwait')

        cy.request({
            url: '/api/test1',
            method: 'GET'
        }).then((resp)=>{
            resp.body
        })
    })*/






});