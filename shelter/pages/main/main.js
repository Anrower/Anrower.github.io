const toggleMenu = () => {
    document.querySelector('.blackout').classList.toggle('blackout--active');
    document.querySelector('.burger__btn').classList.toggle('burger__btn--active');
    document.querySelector('body').classList.toggle('disable-scroll');
    document.querySelector('.burger__menu__list').classList.toggle('burger__menu__list--active');
}

document.querySelector('.burger__btn').addEventListener('click', toggleMenu);
document.querySelector('.blackout').addEventListener('click', toggleMenu);
document.querySelector('.burger__link').addEventListener('click', toggleMenu);


function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();

    // Change this to div.childNodes to support multiple top-level nodes
    return div.firstChild;
}





let animationInProgress = false;
let pets;
let petsValue = [];



const request = new XMLHttpRequest();
request.open('GET', './pets.json');

request.onload = () => {
    pets = JSON.parse(request.response);

    for (let i = 0; i < pets.length; i++) {
        petsValue.push(pets[i].img);

    }



    const petsCardsTemplate = `
    <div class="pet__card pets__card_katrine">
        <div class="pets__card__img">
            <img src="{{petsValue}}" alt="cat_Katrine" /> 
        </div>
        <div class="pets__card__title">
            <p>Jenifer</p>
        </div>
        <div class="pets__card__button">
            <button class="card__button" type="button">
                <span class="card__button__text">Learn more</span>
            </button>
        </div>
    </div>

    <div class="pet__card pets__card_jennifer">
        <div class="pets__card__img">
            <img src="{{petsValue}}" alt="dog_Jennifer" />
        </div>
        <div class="pets__card__title">
            <p>Woody</p>
        </div>
        <div class="pets__card__button">
            <button class="card__button" type="button">
                <span class="card__button__text">Learn more</span>
            </button>
        </div>
    </div>
    <div class="pet__card pets__card_woody">
        <div class="pets__card__img">
            <img src="{{petsValue}}" alt="dog_Woody" />
        </div>
        <div class="pets__card__title">
            <p>Scarlett</p>
        </div>
        <div class="pets__card__button">
            <button class="card__button" type="button">
                <span class="card__button__text">Learn more</span>
            </button>
        </div>
    </div>
`;




    document.querySelector('.pets__slider__arrow_left').addEventListener('click', () => {
        if (!animationInProgress) {
            animationInProgress = true;
            document.querySelector('.pets_cards_wrapper').setAttribute('style', 'transition: 0.5s; transform: translateX(-200%)');

            petsCardsTemplate
                .replace(1, 2)
                .replace(2, 3)

            document.querySelector('.pets__cards__next').innerHTML = petsCardsTemplate.replaceAll('{{petsValue}}', petsValue[Math.floor(Math.random() * 8)]);




            setTimeout(() => {
                document.querySelector('.pets__cards__current').innerHTML = document.querySelector('.pets__cards__next').innerHTML;
                document.querySelector('.pets__cards__next').innerHTML = petsCardsTemplate.replaceAll('{{petsValue}}', petsValue[Math.floor(Math.random() * 8)]);


                document.querySelector('.pets_cards_wrapper').setAttribute('style', 'transition: 0s; transform: translateX(-100%)');
                animationInProgress = false;
            }, 500);
        }
    });

    document.querySelector('.pets__slider__arrow_right').addEventListener('click', () => {
        if (!animationInProgress) {
            animationInProgress = true;
            document.querySelector('.pets_cards_wrapper').setAttribute('style', 'transition: 0.5s; transform: translateX(0)');

            setTimeout(() => {
                document.querySelector('.pets__cards__current').innerHTML = document.querySelector('.pets__cards__prev').innerHTML;
                document.querySelector('.pets__cards__prev').innerHTML = petsCardsTemplate.replaceAll('{{petsValue}}', petsValue[Math.floor(Math.random() * 8)]);


                document.querySelector('.pets_cards_wrapper').setAttribute('style', 'transition: 0s; transform: translateX(-100%)');
                setTimeout(() => {
                    animationInProgress = false;
                });
            }, 500);
        }
    });
}





request.send();