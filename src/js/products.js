const products = [
  {
    preview: './images/led-lamps/c6-leds.jpg',

    images: [
      './images/led-lamps/c6-leds.jpg',
      './images/led-lamps/c6-leds1.jpg',
      './images/led-lamps/c6-leds2.jpg',
    ],

    title: 'LED-лампы SILVER 36w 3800Lm 5000K',

    oldPrice: '499 грн',

    newPrice: '399 грн',

    model: 'Silver',

    discription: '',
  },

  {
    preview: './images/led-lamps/gold/4.jpg',

    images: [
      './images/led-lamps/gold/2.jpg',
      './images/led-lamps/gold/3.jpg',
      './images/led-lamps/gold/4.jpg',
      './images/led-lamps/gold/5.jpg',
      './images/led-lamps/gold/6.jpg',
      './images/led-lamps/gold/7.jpg',
    ],

    title: 'LED-лампы Gold 36w 4000Lm 5000K',

    oldPrice: '699 грн',

    newPrice: '599 грн',

    model: 'Gold',

    discription: '',
  },
];

const modSilver = products.find(product => product.model === 'Silver');
const modGold = products.find(product => product.model === 'Gold');

const refs = {
  lampModel: document.querySelector('#lamp-select'),
  newPrice: document.querySelector('.price-form .new-price'),
  oldPrice: document.querySelector('.price-form .old-price'),
  imgModal: document.querySelector('.image-body>img'),
  titleModal: document.querySelector('.title-modal'),
};

refs.lampModel.addEventListener('input', event => {
  if (event.target.value === 'Silver') {
    refs.newPrice.innerHTML = modSilver.newPrice;
    refs.oldPrice.innerHTML = modSilver.oldPrice;
    refs.imgModal.src = modSilver.preview;
    refs.titleModal.innerHTML = modSilver.title;
  } else if (event.target.value === 'Gold') {
    refs.newPrice.innerHTML = modGold.newPrice;
    refs.oldPrice.innerHTML = modGold.oldPrice;
    refs.imgModal.src = modGold.preview;
    refs.titleModal.innerHTML = modGold.title;
  } else {
    refs.newPrice.innerHTML = '';
    refs.oldPrice.innerHTML = '';
  }
});

const addSilver = document.querySelector('[data-cart="silver"]');
const cartSilver = document.querySelector('[data-modal="silver"]');
const footerSilver = document.querySelector('[data-footer="silver"]');
const addGold = document.querySelector('[data-cart="gold"]');
const cartGold = document.querySelector('[data-modal="gold"]');
const footerGold = document.querySelector('[data-footer="gold"]');

addGold.addEventListener('click', () => {
  refs.lampModel.value = 'Gold';
  refs.imgModal.src = modGold.preview;
  refs.oldPrice.innerHTML = modGold.oldPrice;
  refs.newPrice.innerHTML = modGold.newPrice;
  refs.titleModal.innerHTML = modGold.title;
});

cartGold.addEventListener('click', () => {
  refs.lampModel.value = 'Gold';
  refs.imgModal.src = modGold.preview;
  refs.oldPrice.innerHTML = modGold.oldPrice;
  refs.newPrice.innerHTML = modGold.newPrice;
  refs.titleModal.innerHTML = modGold.title;
});

footerGold.addEventListener('click', () => {
  refs.lampModel.value = 'Gold';
  refs.imgModal.src = modGold.preview;
  refs.oldPrice.innerHTML = modGold.oldPrice;
  refs.newPrice.innerHTML = modGold.newPrice;
  refs.titleModal.innerHTML = modGold.title;
});

addSilver.addEventListener('click', () => {
  refs.lampModel.value = 'Silver';
  refs.imgModal.src = modSilver.preview;
  refs.oldPrice.innerHTML = modSilver.oldPrice;
  refs.newPrice.innerHTML = modSilver.newPrice;
  refs.titleModal.innerHTML = modSilver.title;
});

cartSilver.addEventListener('click', () => {
  refs.lampModel.value = 'Silver';
  refs.imgModal.src = modSilver.preview;
  refs.oldPrice.innerHTML = modSilver.oldPrice;
  refs.newPrice.innerHTML = modSilver.newPrice;
  refs.titleModal.innerHTML = modSilver.title;
});

footerSilver.addEventListener('click', () => {
  refs.lampModel.value = 'Silver';
  refs.imgModal.src = modSilver.preview;
  refs.oldPrice.innerHTML = modSilver.oldPrice;
  refs.newPrice.innerHTML = modSilver.newPrice;
  refs.titleModal.innerHTML = modSilver.title;
});
