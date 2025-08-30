describe('покупка аватара', function () {




    it('покупка аватара', function () {
        cy.visit('https://pokemonbattle.ru/');
        cy.get('#k_email').type('USER_LOGIN');
        cy.get('#k_password').type('USER_PASSWORD');
        cy.get('.MuiButton-root').click();
        cy.wait(2000);
        cy.get('.header_card_trainer').click();
         cy.wait(2000);
        cy.get('[data-qa="shop"]').click();
        cy.get('.available > button').first().click(); //кликаем Купить у первого доступного аватара
        cy.get('.card_number').type('4620869113632996');                      
        cy.get('.card_csv').type('125');                              
        cy.get('.card_date').type('1226');                            
        cy.get('.card_name').type('NAME'); 
        cy.wait(4000);
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
        cy.wait(4000);
        cy.get('.style_1_base_input').type('56456');
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
 });


});