/// <reference types="cypress"/>

// Funcionalidade
describe('login' ,() => {

// Cenário de testes
it.only('login com sucesso' ,() => {
    // Dado
    // Acessar a tela de login
    cy.visit('https://automationpratice.com.br/login')

    // Digitar email 
    cy.get('#user').type('alex@test.com')

    // Digitar senha
    cy.get('#password').type('abc123')

    // Quando
    // Clicar no botão de login
    cy.get('#btnLogin').click()

    // Então
    // Validar que o login foi realizado 
    cy.get('#swal2-title').should('have.text', 'Login realizado')
    cy.url().should('contain', '/my-account')
    })
})