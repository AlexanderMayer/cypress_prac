describe('Cypress Test',() => {
  it ('succesful search',() => {
    cy.fixture('main').then(main => {
        cy.log('Переxод на страницу авторизации')
        cy.visit(main.login_url)

        cy.log('Ввод существующего логина')
        cy.get('.form-input--text')
            .type(main.Slogin)


        cy.log('Ввод password')
        cy.get('.form-input--password')
            .type(main.password1)

          cy.wait(1000)
        cy.log('Клик по кнопке "Войти')
        cy.get(':nth-child(3) > .button')
            .click()

          cy.wait(1000)
        cy.log('Клик по кнопке "Вакансии')
        cy.get(':nth-child(1) > .header__nav > [href="/vacancies"] > .header__label')
          .click()

        cy.log('Вводим запрос')
        cy.get('.form-input--text')
          .type(main.prog)

          cy.wait(1000)
        cy.log('Клик по кнопке "Поиск')
        cy.get('div.search-input__field > .button')
          .click()

        cy.log('Проверка результата')
        cy.get('.vacancy-item')
          .should('exist')   
        
    })
})
})