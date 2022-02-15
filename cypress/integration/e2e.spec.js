/// <reference types="cypress" />
import EnderecoPage from '../support/page_objects/endereco.paje'
const perfil = require('../fixtures/perfil.json')

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('produtos/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        //Produto 1 
        cy.get('.product-block').eq(3).click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.tbay-woocommerce-breadcrumb > :nth-child(2) > a').click()
        //Produto 2
        cy.get('.product-block').eq(4).click()
        cy.get('.button-variable-item-36').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.tbay-woocommerce-breadcrumb > :nth-child(2) > a').click()
        //Produto 3
        cy.get('.product-block').eq(0).click()
        cy.get('.button-variable-item-L').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.tbay-woocommerce-breadcrumb > :nth-child(2) > a').click()
        //Produto 4
        cy.get('.product-block').eq(8).click()
        cy.get('.button-variable-item-L').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper').click()
        cy.get('.single_add_to_cart_button').click()

        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()

        EnderecoPage.editarEnderecoFaturamento('Victor','Correa', 'EBAC', 'Brasil', 'Av. Monumental QD 302', 'Bloco H Apto 101', 'Brasilia', 'Distrito Federal', '72800000', '61992001111', 'email@exercicio.com')
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')


    });


})