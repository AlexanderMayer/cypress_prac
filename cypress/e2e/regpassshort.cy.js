describe('Cypress Test',() => {
  it ('registration password not valid',() => {
    cy.fixture('main').then(main => {
        cy.log('Переxод на страницу регистрации')
        cy.visit(main.reg_url)

        cy.log('Ввод нового логина')
        cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text')
            .type(main.mylogin)

        cy.log('Ввод mail')
        cy.get('.form-input--email')
            .type(main.mymail)

        cy.log('Ввод password')
        cy.get(':nth-child(3) > .form-control--medium > .form-input--password')
            .type(main.password3)    

        cy.log('Повторно password')
        cy.get(':nth-child(4) > .form-control--medium > .form-input--password')
            .type(main.password3)

        cy.log('Ошибка валидации пороля, короткая длина')
        cy.get('.form-error > span')
          .should('exist')
    })
})
})