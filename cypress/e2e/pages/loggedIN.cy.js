class loggedIN{

    elements = {
        titleSpan: () => cy.get('.navbar-brand#nava')
    }
}

module.exports = new loggedIN();