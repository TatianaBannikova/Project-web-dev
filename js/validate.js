document.addEventListener("DOMContentLoaded", function() {
  // validate form from modal window
  new JustValidate('.modal__form', {
    rules: {
      login: {
        required: true,
        minLength: 2,
        maxLength: 10
      },
      password: {
        required: true,
        minLength: 2,
        maxLength: 10
      },
    },
    messages: {
      login: {
        required: 'Вы не ввели Логин'
      },
      password: {
        required: 'Вы не ввели пароль'
      },
    },
  });
  // validate form from section about
  new JustValidate('.about__form', {
    rules: {
      text: {
        required: true,
      },
      name: {
        required: true,
        minLength: 2,
        maxLength: 15
      },
      email: {
        required: true,
        email: true,
      },
      check: {
        required: true,
      }
    },
    messages: {
      text: {
        required: 'Вы не ввели сообщение'
      },
      name: {
        required: 'Вы не ввели имя'
      },
      email: {
        required: 'Вы не ввели e-mail',
        email: 'Введите правильный пароль',
      },
      check: {
        required: 'Вы не дали согласие на обработку персональных данных'
      }
    },

  });
  let submitformAbout = document.querySelector('.about__form');
  submitformAbout.addEventListener('submit', (event) => {
    event.preventDefault();
  });
});
