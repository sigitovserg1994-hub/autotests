describe('авторизация в куа студио', function () {



   it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio'); //зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // нашли поле логин и ввели логин
        cy.get('#pass').type('qa_one_love1'); // нашли поле пароль и ввели пароль
        cy.get('#loginButton').click();// нажал войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно').should('be.visible'); //проверка текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и она виден
    })

    it('восстановить пароль', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('неправильный пароль', function(){
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('qa_one_love2');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

    })

     it('неправильный логин', function(){
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('german@dolniko.ru');
        cy.get('#pass').type('qa_one_love1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

    })

    it('негативный кейс валидации @@@', function(){
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('qa_one_love1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

    })

    it('проверка строчных буквы в логине', function(){
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('GerMan@dolnikov.ru');
        cy.get('#pass').type('qa_one_love1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

    })


    



})    



