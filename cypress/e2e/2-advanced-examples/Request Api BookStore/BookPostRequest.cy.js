const endpoint = 'https://api.demoblaze.com/entries';

const Postobject = {

        
    "cat": "phone",
                    "desc": "The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420\n processor and it comes with 3GB of RAM. The phone packs 32GB of \ninternal storage cannot be expanded. ",
                    "id": 1,
                    "img": "imgs/galaxy_s6.jpg",
                    "price": 360,
                    "title": "Samsung galaxy s6"


};

const addobject = Postobject => {
    cy.request('POST',endpoint,Postobject)
}

describe('API Testing Demo', () => {

    addObject(PostObject)

    cy.request('GET',`${endpoint}/${Postobject.id}`)
    .its('body')
    .should(`deep.equal`,Postobject);
})

