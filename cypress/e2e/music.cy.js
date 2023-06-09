describe('Testing Music Library', () => {
  // add song
  it.skip('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get('button').contains('Add New Song').click()
    cy.get('[data-test="title"]')
      .type('Storyteller')
      .should('have.value','Storyteller')
    cy.get('[data-test="album"]')
      .type('Storyteller')
      .should('have.value','Storyteller')
    cy.get('[data-test="artist"]')
      .type('Ryan Stewart')
      .should('have.value','Ryan Stewart')
    cy.get('[data-test="genre"]')
      .type('new age')
      .should('have.value','new age')
    cy.get('[data-test="release_date"]')
      .type('2008-02-23')
      .should('have.value','2008-02-23')
    cy.get('[data-test="running_time"]')
      .type('350')
      .should('have.value','350')
    cy.get('[data-test="likes"]')
      .type('200')
      .should('have.value','200')
    cy.get('[data-test="add_button"]').click()
  })
  it.skip('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-test="searchBar"]')
    cy.get('[data-test="input"]')
      .type('Storyteller')
      .should('have.value','Storyteller')
    cy.get('[data-test="searchButton"]').click()
    cy.contains('Storyteller').should('exist')
  })
  it.skip('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Storyteller')
      .parents('tr')
      .find('button')
      .contains('delete')
      .click()
  })
})