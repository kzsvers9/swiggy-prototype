const foodItemsContainer = document.querySelector('.food-items');

fetch('menu.json')
  .then(response => response.json())
  .then(data => {
    data.items.forEach(item => {
   
const itemCard = document.createElement('div');
itemCard.classList.add('item-card');

const foodCtd = document.createElement('div');
foodCtd.classList.add('food-ctd');

const foodDesc = document.createElement('div');
foodDesc.classList.add('food-desc');

const foodTitle = document.createElement('div');
foodTitle.classList.add('food-title');

const heading = document.createElement('h3');
heading.classList.add('heading-food');
heading.textContent = item.name;
foodTitle.appendChild(heading);

const foodPrice = document.createElement('div');
foodPrice.classList.add('food-price');

const priceSpan = document.createElement('span');
priceSpan.classList.add('fd-price');
priceSpan.textContent = item.price;
foodPrice.appendChild(priceSpan);

const foodIgd = document.createElement('div');
foodIgd.classList.add('food-igd');
foodIgd.textContent = item.description;


foodDesc.appendChild(foodTitle);
foodDesc.appendChild(foodPrice);
foodDesc.appendChild(foodIgd);

const foodImgWrap = document.createElement('div');
foodImgWrap.classList.add('food-imgwrap');

const foodImg = document.createElement('div');
foodImg.classList.add('food-img');

const img = document.createElement('img');
img.setAttribute('src', item.image);
foodImg.appendChild(img);

const addBtnWrap = document.createElement('div');
addBtnWrap.classList.add('addbtn-wrap');

const addBtn = document.createElement('div');
addBtn.classList.add('addbtn');

const addCtd = document.createElement('div');
addCtd.classList.add('addctd');
addCtd.textContent = 'ADD';

addBtn.appendChild(addCtd);
addBtnWrap.appendChild(addBtn);

foodImgWrap.appendChild(foodImg);
foodImgWrap.appendChild(addBtnWrap);

foodCtd.appendChild(foodDesc);
foodCtd.appendChild(foodImgWrap);

itemCard.appendChild(foodCtd);

const itemBdr = document.createElement('div');
itemBdr.classList.add('item-bdr');

itemCard.appendChild(itemBdr);

foodItemsContainer.appendChild(itemCard);

    });
  })
  .catch(error => console.error(error));
