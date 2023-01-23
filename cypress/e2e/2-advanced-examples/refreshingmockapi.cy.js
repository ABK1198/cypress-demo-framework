describe('Intercept Demo', () => {
    it('initial validation', () => {
        cy.visit('https://www.demoblaze.com/')

        cy.get('#login2').click()
        cy.logINagain();
    })

    /*
    it('mock api',() =>{
        cy.intercept('GET','/entries',{fixture: 'intercept/refreshInterceptFixture.json'}).as('get-StoreFixture')
        cy.visit('https://www.demoblaze.com/')

        //cy.wait(2000);

        cy.log('test')
    })

    */

    it('StubSample',() => {
        const stubSample =[{
            "cat": "phone",
            "desc": "The Samsung Galaxy S6000 is powered by 1.5GHz octa-core Samsung Exynos 7420\n processor and it comes with 3GB of RAM. The phone packs 32GB of \ninternal storage cannot be expanded. ",
           "id": 10,
            "img": "imgs/galaxy_s6.jpg",
            "price": 360,
            "title": "Samsung galaxy s6000"
        }]

        cy.wait(2000)

        cy.intercept('GET','/entries', {
            body: stubSample
        }).as('getstubsample')

        cy.visit('https://www.demoblaze.com/')

        cy.get('#cat').should('have.css','background-color #c7c7c7')
    })
})