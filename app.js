let slidePosition = 0;
const slides = document.getElementsByClassName('carousel__item');
const totalSlides = slides.length;

document.
    getElementById('carousel__button--next')
    .addEventListener('click', () => {
        moveToNextSlide();
    });

document.
    getElementById('carousel__button--prev')
    .addEventListener('click', () => {
        moveToPrevSlide();
    });

updateSlidePosition = () => {
    for(let slide of slides) {
        slide.classList.remove('carousel__item--visible');
        slide.classList.add('carousel__item--hidden');
    }

    slides[slidePosition].classList.add('carousel__item--visible')
}

moveToPrevSlide = () => {
    if(slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    updateSlidePosition();
}

moveToNextSlide = () => {
    if(slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    updateSlidePosition();
}

const contenido = document.querySelector('#currency-table--container')
const UpDow = document.querySelector('#direction')

const opcionesCriptomonedas = async() => {
    const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

    const respuesta = await fetch(url);
    const resultado = await respuesta.json()

    tabla(resultado)
}

tabla = resultado => {
    console.log(resultado)
    //contenido.innerHTML = ''
    resultado.Data.map(mostrar => {
        contenido.innerHTML += `
        <div id="tabla_contenido">
            <div class="currency-name">${mostrar.CoinInfo.FullName}</div>
        </div>
            <div id="tabla_precio">
        <div class="currency-price">$ ${mostrar.DISPLAY.USD.CHANGEPCT24HOUR}</span></div>
        `
        }
    );
}

opcionesCriptomonedas()

const btnSwitch = document.querySelector('#switch')
const mainExchangeContainer = document.querySelector('#main-exchange-container')
const mainProductDetail = document.querySelector('#main-product-detail')
const exchangeTitle = document.querySelector('.main-exchange-container--title1')
const exchangeSubtitle = document.querySelector('.main-exchange-container--subtitle')
const productTitle = document.querySelector('.product-detail--title1')
const productSubtitle = document.querySelector('.product-detail--subtitle')
const mainPlansContainer = document.querySelector('.main-plans-container')
const mainPlansContainerTitle = document.querySelector('.plans--title1')
const mainPlansContainerSubitle = document.querySelector('.plans--subtitle')
const buttonNext = document.querySelector('.carousel__button--next')
const buttonPrev = document.querySelector('.carousel__button--prev')



btnSwitch.addEventListener('click', () => {
    mainExchangeContainer.classList.toggle('dark');
    mainProductDetail.classList.toggle('dark');
    exchangeTitle.classList.toggle('dark-letters');
    exchangeSubtitle.classList.toggle('dark-letters');
    productTitle.classList.toggle('dark-letters');
    productSubtitle.classList.toggle('dark-letters');
    mainPlansContainer.classList.toggle('dark');
    contenido.classList.toggle('dark-table');
    mainPlansContainerTitle.classList.toggle('dark-letters')
    mainPlansContainerSubitle.classList.toggle('dark-letters')
    buttonNext.classList.toggle('carousel__button--dark')
    buttonPrev.classList.toggle('carousel__button--dark')
    btnSwitch.classList.toggle('active');
});
