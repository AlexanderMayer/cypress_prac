describe('Cypress Test',() => {
  it ('registration login not valid',() => {
    cy.fixture('main').then(main => {
        cy.log('Переxод на страницу регистрации')
        cy.visit(main.reg_url)

        cy.log('Ввод нового логина')
        cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text')
            .type(main.mylogin2)

        cy.log('Ввод mail')
        cy.get('.form-input--email')
            .type(main.mymail)

        cy.log('Ввод password')
        cy.get(':nth-child(3) > .form-control--medium > .form-input--password')
            .type(main.password1)    

        cy.log('Повторно password')
        cy.get(':nth-child(4) > .form-control--medium > .form-input--password')
            .type(main.password1)

        cy.log('Ошибка валидации логина')
        cy.get('.form-error > span')
          .should('exist')
    })
})
})