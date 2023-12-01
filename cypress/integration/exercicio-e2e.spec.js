/// <reference types="cypress" />
import CheckoutPage from "../support/page_objects/checkout.page";
const dadosCheckout = require('../fixtures/dados.json')

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        ('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
        cy.login(dados.usuario, dados.senha)
        cy.visit('/produtos')
        cy.addProdutos('Abominable Hoodie', 'M', 'Red', 4)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain', '4 × “Abominable Hoodie” foram adicionados no seu carrinho.')
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()
        cy.get('.woocommerce-info').should('contain', 'Você tem um cupom de desconto?')

    });

        CheckoutPage.editarDadosCheckout(
            dadosCheckout[1].nome,
            dadosCheckout[1].sobrenome,
            dadosCheckout[1].empresa,
            dadosCheckout[1].pais,
            dadosCheckout[1].endereco,
            dadosCheckout[1].numero,
            dadosCheckout[1].cidade,
            dadosCheckout[1].estado,
            dadosCheckout[1].cep,
            dadosCheckout[1].telefone,
            dadosCheckout[1].email,
            dadosCheckout[1].observacoes

        )

    it('Finalizando compra', () => {
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    });

})

})