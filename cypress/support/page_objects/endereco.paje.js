class EnderecoPage {

    editarEnderecoFaturamento(nome, sobrenome, empresa, pais, endereco, endereco2, cidade, estado, cep, tel, email){
        cy.get('#billing_first_name').type(nome)
        cy.get('#billing_last_name').type(sobrenome)
        cy.get('#billing_company').type(empresa)
        cy.get('#select2-billing_country-container').click().type(pais + '{enter}')
        cy.get('#billing_address_1').type(endereco)
        cy.get('#billing_address_2').type(endereco2)
        cy.get('#billing_city').type(cidade)
        cy.get('#select2-billing_state-container').click().type(estado + '{enter}')
        cy.get('#billing_postcode').type(cep)
        cy.get('#billing_phone').type(tel)
        cy.get('#billing_email').type(email)
        cy.get('#payment_method_cod').click()
        
        
    
    }
    
    }
    
    export default new EnderecoPage()