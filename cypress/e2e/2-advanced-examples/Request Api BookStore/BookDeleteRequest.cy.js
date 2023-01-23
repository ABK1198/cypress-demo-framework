const endpoint = 'https://api.demoblaze.com/entries'

const Deleteobject = {
            
    "cat": "phone",
                    "desc": "The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420\n processor and it comes with 3GB of RAM. The phone packs 32GB of \ninternal storage cannot be expanded. ",
                    "id": 1,
                    "img": "imgs/galaxy_s6.jpg",
                    "price": 360,
                    "title": "Samsung galaxy s6"

}

const Removeobject = Deleteobject => {
    cy.request('DELETE',`${endpoint}/${objecttobedeleted.id}`,Deleteobject)
}

describe('removing an object: ',() => {

    removeobject(Deleteobject)

    it('Removing an object',() => {
        cy.request('GET',endpoint)
        .its('body')
        .its('Items')
        .should('have.length','9')
    })
})