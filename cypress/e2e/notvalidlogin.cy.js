describe('Cypress Test',() => {
  it ('not valid logint',() => {
    cy.fixture('main').then(main => {
        cy.log('Переxод на страницу авторизации')
        cy.visit(main.login_url)

        cy.log('Ввод существующего логина')
        cy.get('.form-input--text')
            .type(main.S2login)


        cy.log('Ввод password')
        cy.get('.form-input--password')
            .type(main.password1)

          cy.wait(1000)
        cy.log('Клик по кнопке "Войти')
        cy.get(':nth-child(3) > .button')
            .click()

        cy.get('.form-error > span')
        .should('exist')
    })
})
})