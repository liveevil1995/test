window.addEventListener('DOMContentLoaded', () => {


    //modal

    const modalTrigger = document.querySelector('[data-modal]'),
          modal = document.querySelector('.overlay'),
          modalCloseBtn = document.querySelector('.modal__close');

    modalTrigger.addEventListener('click', openModal);

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show', 'fade');
        document.body.style.overflow = '';
    }

    function openModal() {
        modal.classList.add('show', 'fade');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    }

    modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) { 
            closeModal();
        }
    });

    // menu


    // const mouseTarget = document.querySelectorAll('.menu__link');
    // const submenu = document.querySelector('.submenu');

    // // mouseTarget.forEach(item => {
    // //     item.addEventListener('mouseenter', function() {
    // //         submenu.style.display = 'block';
    // //     });
    // // });

    // // mouseTarget.forEach(item => {
    // //     item.addEventListener('mouseleave', function() {
    // //         submenu.style.display = 'none';
    // //     });
    // // });

    const menu = document.querySelector('.menu'),
          hamburger = document.querySelector('.hamburger'),
          menuClose = document.querySelector('.menu__close');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('menu_active');
    });

    menuClose.addEventListener('click', () => {
        menu.classList.toggle('menu_active');
    });

    new SimpleBar(document.getElementById('myEl'), {
        autoHide: false,
    });
});

$(document).ready(function() {
    $('#form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: "required",
            email: {
                required: true,
                email: true
            },
            textarea: {
                required: true,
                minlength: 20,
                maxlength: 300
            }
        },
        messages: {
            name: {
                required: "Введите свое имя",
                minlength: jQuery.validator.format("Введите {0} символа!")
              },
            phone: "Введите свой номер телефона",
            email: {
              required: "Введите свою почту",
              email: "Неправильно введен адрес почты"
            },
            company: {
                required: "Пожалуйста, введите название компании",
            },
            textarea: {
                required: "Пожалуйста, оставьте небольшое описание Вашего предложения",
                minlength: jQuery.validator.format("Введите не менее {0} символа!"),
                maxlength: jQuery.validator.format("Введите не более {0} символа!"),
            },
            check: {
                required: "Обязательное условие"
            }
        }
    });
});