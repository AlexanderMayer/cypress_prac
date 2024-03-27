describe('Cypress Test',() => {
  it ('succesful registration',() => {
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
            .type(main.password1)    

        cy.log('Повторно password')
        cy.get(':nth-child(4) > .form-control--medium > .form-input--password')
            .type(main.password1)

          cy.wait(3000)
        cy.log('Клик по кнопке "Далее')
        cy.get('.form__buttons > :nth-child(4)')
            .click()

        cy.log('Ввод фамилии')
        cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text')
            .type(main.surname)

        cy.log('Ввод имени')
        cy.get(':nth-child(2) > .form-control--medium > .form-input--text')
            .type(main.name)

          cy.wait(1000)
        cy.log('Клик по кнопке "Создать аккаунт')
        cy.get('.form__buttons > :nth-child(3)')
            .click()
    })
})
})