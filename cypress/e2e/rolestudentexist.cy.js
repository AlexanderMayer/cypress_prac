describe('Cypress Test',() => {
  it ('role student exist',() => {
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
        cy.log('Клик по кнопке "Я студент')
        cy.get('.select-role-form > :nth-child(3)')
          .click()

          cy.wait(1000)
        cy.log('Клик по кнопке "Пройти верификацию')
        cy.get('.message-student > .button')
          .click()

        cy.log('Ввод образовательного учреждения')
        cy.get('.desktop-modal__content > .student-form > .choose-institution > :nth-child(1) > [data-v-40f88df4=""] > .search-input > div.search-input__field > .form-input--text')
          .type(main.ttit)
          cy.wait(1000)
        cy.log('Выбор образовательного учреждения')
        cy.get('.desktop-modal__content > .student-form > .choose-institution > :nth-child(1) > [data-v-40f88df4=""] > .search-input > div.search-input__wrapper-result > :nth-child(1)')
          .click()

        cy.log('Ввод специальности')
        cy.get('.desktop-modal__content > .student-form > .choose-specialty > [data-v-0dbb9e5f=""] > .search-input > div.search-input__field > .form-input--text')
          .type(main.hor)
          cy.wait(1000)
        cy.log('Выбор специальности')
        cy.get('.desktop-modal__content > .student-form > .choose-specialty > [data-v-0dbb9e5f=""] > .search-input > div.search-input__wrapper-result > :nth-child(1)')
          .click()

        cy.log('Ввод квалификации')
        cy.get('.desktop-modal__content > .student-form > :nth-child(3) > .form-control--max > .form-input--text')
          .type(main.bac)

        cy.log('Выбор курса')
        cy.get('.desktop-modal__content > .student-form > .student-form__courses > .courses-list > :nth-child(2)')
          .click()

        cy.log('Ввод годов обучения')
        cy.get('.desktop-modal__content > .student-form > .student-form__years > :nth-child(1) > .form-control--max > .form-input--number')
          .type(main.begin)
        cy.get('.desktop-modal__content > .student-form > .student-form__years > :nth-child(2) > .form-control--max > .form-input--number')
          .type(main.end)

          cy.wait(1000)
        cy.get('.desktop-modal__content > .student-form > .button')
          .click()
        
          cy.wait(1000)
        cy.log('Клик по кнопке "Пройти верификацию')
        cy.get('.message-student > .button')
            .click()
  
        cy.log('Ввод образовательного учреждения')
        cy.get('.desktop-modal__content > .student-form > .choose-institution > :nth-child(1) > [data-v-40f88df4=""] > .search-input > div.search-input__field > .form-input--text')
          .type(main.ttit)
          cy.wait(1000)
        cy.log('Выбор образовательного учреждения')
        cy.get('.desktop-modal__content > .student-form > .choose-institution > :nth-child(1) > [data-v-40f88df4=""] > .search-input > div.search-input__wrapper-result > :nth-child(1)')
          .click()
  
        cy.log('Ввод специальности')
        cy.get('.desktop-modal__content > .student-form > .choose-specialty > [data-v-0dbb9e5f=""] > .search-input > div.search-input__field > .form-input--text')
          .type(main.hor)
          cy.wait(1000)
        cy.log('Выбор специальности')
        cy.get('.desktop-modal__content > .student-form > .choose-specialty > [data-v-0dbb9e5f=""] > .search-input > div.search-input__wrapper-result > :nth-child(1)')
          .click()
  
        cy.log('Ввод квалификации')
        cy.get('.desktop-modal__content > .student-form > :nth-child(3) > .form-control--max > .form-input--text')
          .type(main.bac)
  
        cy.log('Выбор курса')
        cy.get('.desktop-modal__content > .student-form > .student-form__courses > .courses-list > :nth-child(2)')
          .click()
  
        cy.log('Ввод годов обучения')
        cy.get('.desktop-modal__content > .student-form > .student-form__years > :nth-child(1) > .form-control--max > .form-input--number')
          .type(main.begin)
        cy.get('.desktop-modal__content > .student-form > .student-form__years > :nth-child(2) > .form-control--max > .form-input--number')
          .type(main.end)
  
          cy.wait(1000)
        cy.get('.desktop-modal__content > .student-form > .button')
          .click()

        cy.log('Проверка на существование аерификации')
        cy.get('.desktop-modal__content > .student-form > :nth-child(6) > .form-error > span')
            .should('exist')

    })
})
})