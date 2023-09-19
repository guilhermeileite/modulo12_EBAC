/// <reference types="cypress" />

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    var faker = require('faker');

    let nameFaker = faker.name.firstName()
    let lastNameFaker = faker.name.lastName()
    let companyNameFaker = faker.company.companyName()
    let phoneFaker = faker.phone.phoneNumber('11 87552-4937')
    let mailFaker = faker.internet.email()

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        cy.visit('/produtos')
        })
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        //TODO 
    });


})
