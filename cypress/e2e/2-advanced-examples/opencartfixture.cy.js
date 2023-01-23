describe('FixtureDemo',function(){

    beforeEach('Before each test load website',function(){
        cy.visit('https://www.opencart.com/index.php?route=account/login')

        cy.fixture('fixtures-demo/opencartcredentials')
        .then(credentials => {

            this.credentials=credentials;

        })
    });

    it('Standard User',function(){
        cy.get('#input-email').type(this.credentials.email)
        cy.get('#input-password').type(this.credentials.password)
        cy.contains('button[type="submit"]','Login').click();
    })

    it('Incorrect Email',function(){
        cy.get('#input-email').type(this.credentials.dummyemail)
        cy.get('#input-password').type(this.credentials.dummypassword)
        cy.contains('button[type="submit"]','Login').click();

        cy.get('.alert').should('contain.text',' No match for E-Mail and/or Password.')
    })






})