/// <reference types="cypress"/>

// Funcionalidade
describe('login vazio' ,() => {

    // Cenário de testes
    it('login com email vazio' ,() => {
        cy.visit('https://automationpratice.com.br/login')
        cy.get('#password').type('abc123')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
        })
        
    it('Login com senha vazia', () => {
        cy.visit('https://automationpratice.com.br/login')
        cy.get('#user').type('alex@test.com')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('have.text', 'Senha inválida.')
    })  
    
    it('Login com E-mail inválido', () => {
        cy.visit('https://automationpratice.com.br/login')
        cy.get('#user').type('qnqwj.com')
        cy.get('#password').type('abc123')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
       
    })  

    it('Login com senha inválida', () => {
        cy.visit('https://automationpratice.com.br/login')
        cy.get('#user').type('alex@test.com')
        cy.get('#password').type(123)
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('have.text', 'Senha inválida.')
      
})
})