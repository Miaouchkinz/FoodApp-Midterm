const addItemToCart = (id, mealItemsArray) => {
  const mealItem = mealItemsArray.find(item => item['id'].toString() === id);
  let checkAddedItem = JSON.parse(localStorage.getItem(JSON.stringify(id)));

  if (!checkAddedItem) {
    localStorage.setItem(JSON.stringify(id), JSON.stringify({...mealItem, qty: 1}));
  } else {
    checkAddedItem.qty += 1;
    localStorage.setItem(JSON.stringify(id), JSON.stringify(checkAddedItem));
  }
}

const removeItemFromCart = (id, mealItemsArray) => {
  const mealItem = mealItemsArray.find(item => item['id'].toString() === id);
  let checkAddedItem = JSON.parse(localStorage.getItem(JSON.stringify(id)));

  checkAddedItem.qty -= 1;
  localStorage.setItem(JSON.stringify(id), JSON.stringify(checkAddedItem));
}

// Add to counter as items are added to cart
const updateCartCounter = () => {
  let sum = 0;
  for (let i =0; i < localStorage.length; i++) {
    let mealItem = JSON.parse(localStorage.getItem(localStorage.key(i)));
    sum += mealItem.qty;
  }
  $('#cart-counter').text(0 + sum);
}

const updateQuantityCounter = (id, increase) => {
  let qtyCounter = $('#qty-' + id);
  let quantity = Number(qtyCounter.text());
  if (increase) quantity++;
  else if (quantity > 0) quantity--;

  qtyCounter.text(quantity);
}

const updateItemTotal = (id, price) => {
  let itemPrice = $('#meal-item-' + id + ' .item-price');
  let itemQty = Number($('#qty-' + id).text());
  let newPrice = price * itemQty;

  itemPrice.text(newPrice.toFixed(2));
}

const calculateSubTotal = () => {
  let sum = 0;
  $('.item-price').each((index, item) => {
    sum += Number($(item).text());
  });
  $('.sub-total-cost').text(sum.toFixed(2));
};

const calculateTip = (percentage) => {
  let tipValue = percentage * Number($('.sub-total-cost').text());
  $('.total-tip').text(tipValue.toFixed(2));
  calculateTotalCost();
}

const calculateTotalCost = () => {
  let totalCost = Number($('.sub-total-cost').text()) + Number($('.total-tip').text());
  $('.total-cost').text(totalCost.toFixed(2));
}

const addToCartHandler = (e) => {
  $.ajax({
    method: 'GET',
    url: '/api/menu/'
  })
  .then((res) => {
    addItemToCart(e.target.id, res);
    updateCartCounter();
    updateQuantityCounter(e.target.id, true);
    updateItemTotal(e.target.id, res[e.target.id - 1].price / 100)
    calculateSubTotal();
    calculateTotalCost();
  })
}

const removeFromCartHandler = (e) => {
  if ($(`#qty-${e.target.id}`).text() <= 0) return;
  $.ajax({
    method: 'GET',
    url: '/api/menu/'
  })
  .then((res) => {
    removeItemFromCart(e.target.id, res);
    updateCartCounter();
    updateQuantityCounter(e.target.id, false);
    updateItemTotal(e.target.id, res[e.target.id - 1].price / 100)
    calculateSubTotal();
    calculateTotalCost();
  })
}
