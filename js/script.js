if (document.documentElement.clientWidth <= 414) {
    const header = document.querySelector('.header'),
          info = document.querySelector('.info'),
          catalog = document.querySelector('.catalog__inner__right__catalog'),
          catalogAll = document.querySelector('.catalog'),
          footer = document.querySelector('.footer'),
          headerMenu = document.querySelector('.header_menu'),
          menu = document.querySelector('.menu'),
          menuClose = document.querySelector('.menu__close'),
          catalogFiltPhoneBlock = document.querySelector('.catalog__filt__phone__block'),
          cataloginnerLeft = document.querySelector('.catalog__inner__left'),
          catalogFooterPhoneButtonBtn = document.querySelector('.catalog__footer__phone__button_btn'),
          openSearch = document.querySelector('.open__search'),
          closeSearch = document.querySelector('.close__search'),
          searchWindow = document.querySelector('.search'),
          searchInputPhone = document.querySelector('.search__input__phone');

    function hiddenAll() {
        header.style.display = 'none';
        info.style.display = 'none';
        catalog.style.display = 'none';
        footer.style.display = 'none';
    }

    function showAll() {
        header.style.display = 'block';
        info.style.display = 'block';
        catalog.style.display = 'grid';
        footer.style.display = 'block';
    }


    function openWindow(openSelector, closeSelector, windowSelector) {
        openSelector.addEventListener('click', () => {
            windowSelector.style.display = 'block';
            hiddenAll();
        });
        closeSelector.addEventListener('click', () => {
            windowSelector.style.display = 'none';
            showAll();
        });
    }

    openWindow(headerMenu,menuClose,menu);
    openWindow(catalogFiltPhoneBlock,catalogFooterPhoneButtonBtn,cataloginnerLeft);

    // search 

    function search() {
        openSearch.addEventListener('click', () => {
            searchWindow.style.display = 'block';
            searchInputPhone.focus();
            hiddenAll();
            catalogAll.style.display = 'none';
        });
        closeSearch.addEventListener('click', () => {
            searchWindow.style.display = 'none';
            showAll();
            catalogAll.style.display = 'block';
        });
    }

    search();
}

function checked() {
    const catalogRadio = document.querySelectorAll('.catalog__radio'),
          catalogCheckbox = document.querySelectorAll('.catalog__checkbox'),
          catalogRadioText = document.querySelectorAll('.catalog__radio__text'),
          catalogCheckboxText = document.querySelectorAll('.catalog__checkbox__text'),
          cleanAll = document.querySelectorAll('.clean__all');

    catalogRadio.forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target.nextSibling.nextSibling.nextSibling.nextSibling.classList.contains('catalog__radio__text__active')) {
                e.target.checked = false;
            } 
            
            if(e.target.checked == true) {
                e.target.nextSibling.nextSibling.nextSibling.nextSibling.classList.add('catalog__radio__text__active');
            } else {
                e.target.nextSibling.nextSibling.nextSibling.nextSibling.classList.remove('catalog__radio__text__active');
            }
        });
    });

    catalogCheckbox.forEach(item => {
        item.addEventListener('click', (e) => {
            if(e.target.checked == true) {
                e.target.nextSibling.nextSibling.nextSibling.nextSibling.classList.add('catalog__checkbox__text__active');
            } else {
                e.target.nextSibling.nextSibling.nextSibling.nextSibling.classList.remove('catalog__checkbox__text__active');
            }
        });
    });

    catalogRadioText.forEach(item => {
        item.addEventListener('click', (e) => {
            if(e.target.previousSibling.previousSibling.previousSibling.previousSibling.checked == true) {
                e.target.classList.remove('catalog__radio__text__active');
                console.log(true);
                e.target.previousSibling.previousSibling.previousSibling.previousSibling.checked = false;
            } else {
                e.target.previousSibling.previousSibling.previousSibling.previousSibling.checked = true;
                e.target.classList.add('catalog__radio__text__active');
            }
        });
    });

    cleanAll.forEach(elem => {
        elem.addEventListener('click', (e) => {
            catalogCheckbox.forEach(item => {
                item.checked = false;
            });
            catalogRadio.forEach(item => {
                item.checked = false;
            });
            catalogRadioText.forEach(item => {
                item.classList.remove('catalog__radio__text__active')
            });
            catalogCheckboxText.forEach(item => {
                item.classList.remove('catalog__checkbox__text__active')
            });
        });
    });


}

checked();