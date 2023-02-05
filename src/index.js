const data = {
  scaleway: {
    price: {
      storage: {
        multi: 0.06,
        single: 0.03,
      },
      transfer: 0.02,
      free: 75,
    },
    slug: 'scaleway.com',
  },
  bunny: {
    price: {
      storage: {
        HDD: 0.01,
        SSD: 0.02,
      },
      transfer: 0.01,
      max: 10,
    },
    slug: 'bunny.net',
  },
  vultr: {
    price: {
      storage: 0.01,
      transfer: 0.01,
      min: 5,
    },
    slug: 'vultr.com',
  },
  backblaze: {
    price: {
      storage: 0.005,
      transfer: 0.01,
      min: 7,
    },
    slug: 'backblaze.com',
  },
};

// const rangeSt = document.querySelector(".js-storage-input");
// const rangeTr = document.querySelector(".js-transfer-input");
const ranges = document.querySelectorAll('.range');
const result = document.querySelector('.result');

const storageInput = document.querySelector('#storage-input');
const storageRange = document.querySelector('#storage-range');

const scaleway = document.querySelector('.js-price-scaleway');
const bunny = document.querySelector('.js-price-bunny');
const vultr = document.querySelector('.js-price-vultr');
const backblaze = document.querySelector('.js-price-backblaze');
let bar = document.querySelector('.js-bar-scaleway');
let bar1 = document.querySelector('.js-bar-bunny');
let bar2 = document.querySelector('.js-bar-vultr');
let bar3 = document.querySelector('.js-bar-backblaze');

storageRange.addEventListener('input', () => {
  storageInput.value = storageRange.value;
});

storageInput.addEventListener('input', () => {
  storageRange.value = storageInput.value;
});

ranges.forEach(el => {
  el.addEventListener('input', () => {
    el
      .closest('.pricing-form__item')
      .querySelector('.pricing-form__item--value').textContent = el.value;
  });
});

// ranges.addEventListener("input", (evt) => {
//   const currentValue = evt.target.value;
//   result.innerHTML = currentValue;
//   const providerNames = Object.keys(data);
//   providerNames.map((name) => {
//     const providerPrice = data[name].price;
//     let priceStorage = 0;
//     let priceTransfer = providerPrice.transfer;
//     if (priceStorage) console.log(providerPrice);
//     console.log(priceTransfer * currentValue);
//   });
// });

console.log(Object.keys(data));

// ==========Styles range color
// let slider = document.querySelector("[type=range]");
// let div = document.querySelector(".js-pricing-fill");

// slider.addEventListener("input", (e) => {
//   div.style.width = e.target.value / 3.8 + "px";
// });

// let slider1 = document.querySelector(".pricing-form__range--blue");
// let div1 = document.querySelector(".pricing-form__fill--blue");

// slider1.addEventListener("input", (e) => {
//   div1.style.width = e.target.value + "px";
// });

// =============================Значения колонок=====================

//  scaleway.innerHTML =
//   (parseInt(currentValue) - 75) *
//     parseFloat(data.scaleway.price.storage.single, 3) +
//   " $";
// bar.style.height = evt.target.value / 5 + "px";

// bunny.innerHTML =
//   parseInt(currentValue) * parseFloat(data.bunny.price.storage.HDD, 3) + " $";
// bar1.style.height = evt.target.value / 5 + "px";

// vultr.innerHTML =
//   parseInt(currentValue) * parseFloat(data.vultr.price.storage, 3) + " $";
// bar2.style.height = evt.target.value / 5 + "px";

// backblaze.innerHTML =
//   parseInt(currentValue) * parseFloat(data.backblaze.price.storage, 3) + " $";
// bar3.style.height = evt.target.value / 5 + "px";
