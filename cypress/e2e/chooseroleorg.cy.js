describe('Cypress Test',() => {
  it ('choose role oganization',() => {
    cy.fixture('main').then(main => {
        cy.log('Переxод на страницу авторизации')
        cy.visit(main.login_url)

        cy.log('Ввод существующего логина')
        cy.get('.form-input--text')
            .type(main.mylogin)

        cy.log('Ввод password')
        cy.get('.form-input--password')
            .type(main.password1)

          cy.wait(1000)
        cy.log('Клик по кнопке "Войти')
        cy.get(':nth-child(3) > .button')
            .click()
          
          cy.wait(1000)
        cy.log('Клик по кнопке "Выбрать роль')
        cy.get('.page-nav__role-block > .button')
          .click()
          
          cy.wait(1000)
        cy.log('Клик по кнопке "Организация')
        cy.get('.select-role-form > :nth-child(2)')
          .click()

          cy.wait(1000)
        cy.log('Клик по кнопке "Создание ЛК')
        cy.get('.variants-company > :nth-child(2)')
          .click()

        cy.log('Ввод организации')
        cy.get(':nth-child(1) > .form-control--medium > .form-input--text')
          .type(main.org)

        cy.log('Ввод адресса')
        cy.get(':nth-child(2) > .form-control--medium > .form-input--text')
          .type(main.address)

        cy.log('Ввод описания')
        cy.get('.form-area')
          .type(main.describe)

          cy.wait(1000)
        cy.log('Клик по кнопке "Добавить')
        cy.get('.create-company-form__description-block > .button')
          .click()

          cy.wait(1000)
        cy.log('Клик по кнопке "Заявки')
        cy.get(':nth-child(3) > .menu-item__item-name')
          .click()

        cy.log('Проверка заявки')
        cy.get('.shared-list-item')
          .should('exist')

    })
})
})