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

        cy.addProdutos('Ariel Roll Sleeve Sweatshirt', 'M', 'Green', '1')
        cy.get('.tbay-woocommerce-breadcrumb > :nth-child(2) > a').click()
        cy.addProdutos('Abominable Hoodie', 'L', 'Red', '1')
        cy.get('.tbay-woocommerce-breadcrumb > :nth-child(2) > a').click()
        cy.addProdutos('Aero Daily Fitness Tee', 'XL', 'Brown', '1')
        cy.get('.tbay-woocommerce-breadcrumb > :nth-child(2) > a').click()
        cy.addProdutos('Apollo Running Short', '36', 'Black', '1')

        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()

        EnderecoPage.editarEnderecoFaturamento('Victor', 'Correa', 'EBAC', 'Brasil', 'Av. Monumental QD 302', 'Bloco H Apto 101', 'Brasilia', 'Distrito Federal', '72800000', '61992001111', 'email@exercicio.com')
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')


    });


})