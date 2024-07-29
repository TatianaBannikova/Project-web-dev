document.addEventListener("DOMContentLoaded", function() {
  // header search input
  const searchContainer = document.querySelector('.header__search-container');
  const searchBtn = document.querySelector('.header__search-btn');
  const searchInput = document.querySelector('.header__search-input');
  searchInput.removeAttribute('tabindex');

  searchBtn.addEventListener('click', () => {
    searchContainer.classList.add('active');
    closeSearchForm();
  })
  function closeSearchForm() {
    const container = document.querySelector('.header__search-container');
    document.addEventListener('click', function(event) {
      const target = event.target;
      // Проверяем, что клик не произошел внутри контейнера
      if (!container.contains(target)) {
        container.classList.remove('active');
      }
    });
  }
  const formSearch = searchContainer.querySelector('form');
  formSearch.addEventListener('submit', () => {
    searchInput.value = '';
  })

  // burger menu
  const body = document.querySelector('body');
  const burgerBtn = document.querySelector('.header__burger');
  const menuContainer = document.querySelector('.header__wrap-nav');
  const menuItems = menuContainer.querySelectorAll('.header__nav-link');
  const menuContainerDouble = document.querySelector('.header__menu');
  burgerBtn.addEventListener('click', () => {
    console.log('open');
    menuContainer.classList.toggle('active');
    menuContainerDouble.classList.toggle('active');
    body.classList.toggle('noscroll');
  })
  if (menuContainer.classList.contains('active')) {
      menuItems.forEach(element => {
        element.addEventListener('click', function () {
            menuContainer.classList.remove('active');
            body.classList.remove('noscroll');
          })
      });
    }
  // player buttons
  let BtnPlayArr = document.querySelectorAll('.playerbtn');
  let tabsBtnPlay = document.querySelector('.playerbtn.play--active');
  function StopAudio() {
        BtnPlayArr.forEach(button => {
          button.classList.remove('play');
          button.querySelector('.s-play').classList.add('visible');
          button.querySelector('.s-pause').classList.remove('visible');
        })
      }
      BtnPlayArr.forEach( button => {
        button.addEventListener('click', () => {
          if (button.classList.contains('play')) {
            StopAudio();
          } else {
            StopAudio();
            button.classList.add('play');
            button.querySelector('.s-play').classList.remove('visible');
            button.querySelector('.s-pause').classList.add('visible');
          }
        });
        button.addEventListener('keydown', event => {
          if (event.key === 'Enter') {
            console.log('ok');
            if (button.classList.contains('play')) {
              StopAudio();
            } else {
              StopAudio();
              button.classList.add('play');
              button.querySelector('.s-play').classList.remove('visible');
              button.querySelector('.s-pause').classList.add('visible');
            }
          }
        });
  })
  // player media visible
  let playerBtnmore = document.querySelector('.header__player-media'),
      playerBtnnow = document.querySelector('.header__now-player'),
      playerBtnlast = document.querySelector('.header__last-player');
  playerBtnmore.addEventListener('click', () => {
    playerBtnmore.classList.toggle('active');
    playerBtnnow.classList.toggle('visible');
    playerBtnlast.classList.toggle('visible');
  })

  // modal window
  let modalOpenBtn = document.querySelector('.header__login-btn');
  let modalWindow = document.querySelector('.header__modal');
  let modalCloseBtn = document.querySelector('.modal__btn-close');
  modalOpenBtn.addEventListener('click', () =>{
    modalWindow.classList.add('open');
  });
  modalCloseBtn.addEventListener('click', () =>{
    modalWindow.classList.remove('open');
  });
  window.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      console.log('ok');
      modalWindow.classList.remove('open');
    }
  });
  // закрытие модального окна при нажатии в любое другое место вне формы
  document.querySelector('.header__modal .modal__wrap').addEventListener('click', event => {
    event._isClickWithModal = true;
  })
  modalWindow.addEventListener('click', event => {
    if (event._isClickWithModal) return;
  event.currentTarget.classList.remove('open');
  });


  // button - show more
  let CardsArrMobil = document.querySelectorAll('.media-vis'),
      CardsArrDesktop = document.querySelectorAll('.vis'),
      showMoreBtn = document.querySelector('.podcast__btn');
  let widthWindow = window.innerWidth;

  function changeClassListinBreak(width) {
    if (width < 426) {
      CardsArrDesktop.forEach((element) => {
        element.classList.remove('no-visible');
        element.setAttribute('tabindex', 0);
      })
      CardsArrMobil.forEach((element) => {
        element.classList.add('no-visible');
        element.removeAttribute('tabindex');
      })
    } else {
      CardsArrDesktop.forEach((element) => {
        element.classList.remove('no-visible');
        element.setAttribute('tabindex', 0);

        element.classList.add('no-visible');
        element.removeAttribute('tabindex');
      })
    }
  }
  function BreakPoint() {
    let widthWindow = window.innerWidth;
    changeClassListinBreak(widthWindow);
  }
  window.addEventListener('resize', BreakPoint);
  BreakPoint();
  showMoreBtn.addEventListener('click', () => {
    CardsArrDesktop.forEach(function(element) {
      if(element.classList.contains('no-visible')) {
        element.classList.remove('no-visible');
        element.setAttribute('tabindex', 0);
      };
    });
    showMoreBtn.classList.add('no-visible');
  });

  // custom selector
  const element = document.querySelector('#select');
  const choices = new Choices(element, {
    allowHTML: true,
    searchEnabled: false,
    placeholder: true,
    itemSelectText: '',
    shouldSort: false,
    fuseOptions: {
      includeScore: true
    },
  })
  // guests tabs
  let tabsBtn = document.querySelectorAll('.guests__content-item');
  let tabsItem = document.querySelectorAll('.promo__card');

  tabsBtn.forEach(function(element){
    element.addEventListener('click', function(e){
      // element.classList.add('tabs__btn--active');
      const path = e.currentTarget.dataset.path;
      tabsBtn.forEach(function(btn) {
        btn.classList.remove('tabs__btn--active')
      });
      tabsItem.forEach(function(element) {
        element.classList.remove('tabs-active')
      });
      element.classList.add('tabs__btn--active');
      document.querySelector(`[data-target="${path}"]`).classList.add('tabs-active');
    });
  });

  // guests - decor arrow in btn
  let BtnDecor = document.querySelectorAll('.guests__item-btn');
  BtnDecor.forEach(function(element) {
    element.addEventListener('click', () => {
      element.classList.toggle('active');
    })
  })

  // guests accordion
  new Accordion('.accordion-container');
  let contentList = document.querySelectorAll('.guests__item');
  contentList.forEach(function(item) {
      let guestsTabs = item.querySelectorAll('.content__item');
      guestsTabs.forEach(function(tab) {
        if (item.classList.contains('is-active')) {
          tab.setAttribute('tabindex', 0);
        } else {
          tab.removeAttribute('tabindex');
        }
      })

  })

  // about - swiper
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      375: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      426: {
        slidesPerView: 2,
        spaceBetween: 26
      },
      1025: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 30
      },
    },
    navigation: {
      nextEl: '.about__btn-next',
      prevEl: '.about__btn-prev',
    },
  });


  // section - guest card:focus
  let Cards = document.querySelectorAll('.guests__item');
  Cards.forEach((element) => {
    let button = element.querySelector('.guests__item-btn');
    button.onblur = function() {
      element.classList.remove('focus');
    };
    button.onfocus = function() {
      element.classList.add('focus');
    };
    button.onmouseenter = function() {
      element.querySelector('.guests__theme').classList.add('style-hover');
    }
    button.onmouseleave = function() {
      element.querySelector('.guests__theme').classList.remove('style-hover');
    }
  })

  // scroll
  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  for (let smoothLink of smoothLinks) {
      smoothLink.addEventListener('click', function (e) {
          e.preventDefault();
          menuContainer.classList.remove('active');
          menuContainerDouble.classList.remove('active');
          const id = smoothLink.getAttribute('href');
          document.querySelector(id).scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      });
  };
});
