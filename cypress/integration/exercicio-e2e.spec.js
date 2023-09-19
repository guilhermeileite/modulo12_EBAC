/// <reference types="cypress" />

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        cy.visit('/produtos')
        })
    });

    it.only('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        // adicionando o primeiro produto ao carrinho
        cy.addProdutos('Abominable Hoodie', 'M', 'Red', 1)
        cy.get('.single_add_to_cart_button')
        cy.get('.woocommerce-message').should('contain', '“Abominable Hoodie” foi adicionado no seu carrinho.')
    });

    it('Deve adicionar mais um produto ao carrinho', () => {
        //adicionando o segundo produto ao carrinho
        cy.addProdutos('Atlas Fitness Tank', 'S', 'Blue', 1)
        cy.get('.single_add_to_cart_button')
    });

    it('Deve adicionar mais um produto ao carrinho', () => {
        //adicionando o terceiro produto ao carrinho
        //o produto está na página 6
        cy.get(':nth-child(4) > .page-numbers').click()
        cy.get(':nth-child(7) > .page-numbers').click()
        cy.addProdutos('Kenobi Trail Jacket', 'M', 'Purple', 1)
        cy.get('.single_add_to_cart_button')
    });

    it('Deve adicionar mais um produto ao carrinho', () => {
        //adicionando o último produto ao carrinho
        cy.get(':nth-child(12) > .page-numbers').click()
        cy.addProdutos('Troy Yoga Short', '36', 'Green', 1)
        cy.get('.single_add_to_cart_button')
    });
})
