import '@percy/cypress';
const { isType } = require("graphql");

describe  ('Suite 1', function() {
    it('firstCase', function() {
        cy.visit('https://www.google.com');
        cy.wait(2000);
        cy.percySnapshot("gmsil login page");
    //cy.title().should('eq','')
    })
});