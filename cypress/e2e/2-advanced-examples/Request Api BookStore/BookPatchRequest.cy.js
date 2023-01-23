const endpoint = 'https://api.demoblaze.com/entries'

const Updateobject = {
    "cat": "phone",
    "desc": "The Samsung Galaxy S600 is powered by 1.5GHz octa-core Samsung Exynos 7420\n processor and it comes with 3GB of RAM. The phone packs 32GB of \ninternal storage cannot be expanded. ",
    "id": 10,
    "img": "imgs/galaxy_s6.jpg",
    "price": 3,
    "title": "Samsung galaxy s600"

}

const ChangingObject = Updateobject =>{
    cy.request('PATCH',`${endpoint}/${Updateobject.id}`,Updateobject)
}

describe('Updating an object: ',()=>{

    ChangingObject(Updateobject)
    
    it('Updating an Object',()=>{
        cy.request('PATCH',`${endpoint}/${Updateobject.id}`)
        .its('body')
        .should('deep.eq',Updateobject)
    })

})