///  <reference types='cypress'/>
describe('Refresh API Tests', ()=> {

    beforeEach(function(){
        cy.request('GET','https://demoqa.com/BookStore/v1/Book?ISBN=9781449325862').as('SingleBook')
    })


    it('Status Check',() => {
        cy.request('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js')
        .its('status').should('eq',200);
    });

    it('checking for headers', () => {
        cy.request('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js')
        .its('headers')
        .its('content-type')
        .should('include','text/javascript; charset=UTF-8')
    });

    const ApiItems = [
        {

                "isbn": "9781449325862" ,
                "title": "Git Pocket Guide",
                "subTitle": "A Working Introduction",
                "author": "Richard E. Silverman",
                "publish_date": "2020-06-04T08:48:39.000Z",
                "publisher": "O'Reilly Media",
                "pages": 234,
                "description": "This pocket guide is the perfect on-the-job companion to Git, the distributed version control system. It provides a compact, readable introduction to Git for new users, as well as a reference to common commands and procedures for those of you with Git exp",
                "website": "http://chimera.labs.oreilly.com/books/1230000000561/index.html"

        }   

    ]
    

    
   
    it('Initial items from End-point Test: ', () => {
        cy.request('https://demoqa.com/BookStore/v1/Book?ISBN=9781449325862')
        .its('body')

        .should('deep.eq',ApiItems)
        

    });
    
    
    
    it('Json Schema Check: ',() => {
        cy.request('https://demoqa.com/BookStore/v1/Book?ISBN=9781449325862')
        .its('body')
        
        .each(value => {
            expect(value).to.have.all.keys('isbn','title','subTitle','author','publish_date','publisher','pages','description','website')
        })
    })

    

    it('using alias Request',function(){
        cy.get('@SingleBook').then((response) => {
            
            expect(response.status).to.eq(200)
            expect(response).to.have.property('headers')
            cy.log(response.headers)
            expect(response.headers.server).to.eq("nginx/1.17.10 (Ubuntu)")
            expect(response.headers.date).to.exist
            expect(response.body).not.to.be.undefined
        })
    })
    
})