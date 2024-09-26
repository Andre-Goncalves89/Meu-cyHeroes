const getSelectors = function() {
  const loginSelectors = {
    buttonLogin : '.gap-8',
    typeEmail: "[data-cy='email']",
    typePassword: "[data-cy='password']",
    sigInButton: '.text-white'
  }
} 

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https:http://localhost:3000/heroes')
  })
})