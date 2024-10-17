describe('Matching Engine Automation', () => {
  it('should visit the site and assert on supported products', () => {
    // Step 1: Visit the Matching Engine website
    cy.visit('https://www.matchingengine.com/')

    // Step 2: Open the navbar using the burger menu (mobile view) if needed
    cy.get('.navbar-burger').then(($burger) => {
      if ($burger.is(':visible')) {
        cy.wrap($burger).click()  // Click on the burger menu if visible
      }
    })

    // Step 3: Click on 'Modules' in the navbar
    cy.get('.navbar-item.has-dropdown').first().within(() => {
      cy.contains('Modules').click({ force: true })  // Ensure it's interacting with the first element
    })

    // Step 4: Click 'Repertoire Management Module' from the dropdown
    cy.get('.navbar-dropdown').contains('Repertoire Management Module').click()

    // Step 5: Scroll to the 'Additional Features' section and assert its visibility
    cy.contains('Additional Features', { timeout: 10000 })
      .scrollIntoView()  // Scroll to make it visible
      .should('be.visible')

    // Step 6: Click 'Products Supported' tab
    cy.contains('Products Supported', { timeout: 10000 })
      .scrollIntoView()
      .should('be.visible')
      .click()

    // Step 7: Assert on the heading of supported products
    cy.get('h3').contains('There are several types of Product Supported:')
      .should('be.visible')

    // Step 8: Further assertions on the supported products
    cy.get('h3:contains("There are several types of Product Supported:")')  // Ensure you're targeting the right heading
      .next('div')  // Get the next sibling <div> where the <ul> is located
      .find('ul')  // Find the <ul> within that div
      .within(() => {  // Operate within this specific list
        cy.contains('Cue Sheet / AV Work').should('be.visible')  // Check if Cue Sheet / AV Work is in the list
        cy.contains('Recording').should('be.visible')  // Check if Recording is in the list
        cy.contains('Bundle').should('be.visible')  // Check if Bundle is in the list
        cy.contains('Advertisement').should('be.visible')  // Check if Advertisement is in the list
      })
  })
})
