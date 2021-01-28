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

const contenido = document.querySelector('#tabla_contenido')
const UpDow = document.querySelector('#direction')

const opcionesCriptomonedas = async() => {
    const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

    const respuesta = await fetch(url);
    const resultado = await respuesta.json()

    tabla(resultado)
}

tabla = resultado => {
    console.log(resultado)
    contenido.innerHTML = ''

    resultado.Data.map(mostrar => {
        if (mostrar.DISPLAY.USD.CHANGE24HOUR < mostrar.DISPLAY.USD.CHANGEDAY) {
            UpDow.classList.add('dow')
        } else {
            UpDow.classList.add('up')
        }
        contenido.innerHTML += `
        <tr>
            <td class="table__top-left">${mostrar.CoinInfo.FullName}</td>
            <td class="table__top-right table__right">${mostrar.DISPLAY.USD.CHANGE24HOUR} <span id="direction"></span></td>
        </tr>
        `
    });
}

opcionesCriptomonedas()


