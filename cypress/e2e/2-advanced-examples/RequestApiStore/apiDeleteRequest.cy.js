const endpoint = 'https://api.demoblaze.com/entries'

const deleteObject = {
    "cat": "phone",
    "desc": "The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420\n processor and it comes with 3GB of RAM. The phone packs 32GB of \ninternal storage cannot be expanded. ",
    "id": 1,
    "img": "imgs/galaxy_s6.jpg",
    "price": 360,
    "title": "Samsung galaxy s6"
}

const removeobject = ObjectToBeDeleted => {
    cy.request('DELETE', `${endpoint}/${ObjectToBeDeleted.id}`, deleteObject)

}

describe('DELETE call of API',() => {

    it('DELETE',()=>{

        removeobject(deleteObject)
        cy.request('GET',endpoint )
        .its('body')
        .its('Items')
        .should('have.length',9)
        
    })

})