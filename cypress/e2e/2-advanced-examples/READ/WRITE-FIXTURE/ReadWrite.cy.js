/// <reference types="cypress"/>

describe('testing read write: ' ,() => {
    it('response object',() => {
        cy.request('GET','https://api.demoblaze.com/entries')
        .then( response => {
            cy.writeFile('cypress/fixtures/ReadWriteFile/ReadWrite.json',response.body);
        })
    });

    it('Adding more responses to our array of object',()=>{

        const filename= 'cypress/fixtures/ReadWriteFile/ReadWrite.json';

        cy.request('GET', 'https://demoqa.com/BookStore/v1/Books')
        .its('body')
        .each($object => {
            cy.readFile(filename).then(array => {
                array.push($object)
                cy.writeFile(filename,array)
            })
        })
    })
} ); 