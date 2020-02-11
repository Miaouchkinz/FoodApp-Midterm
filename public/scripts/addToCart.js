const addItemToCart = (id, mealItemsArray) => {
  const mealItem = mealItemsArray.find(item => item['id'].toString() === id);
  let checkAddedItem = JSON.parse(localStorage.getItem(JSON.stringify(id)));

  if (!checkAddedItem) {
    localStorage.setItem(JSON.stringify(id), JSON.stringify({...mealItem, qty: 1}));
  } else {
    checkAddedItem.qty += 1;
    localStorage.setItem(JSON.stringify(id), JSON.stringify(checkAddedItem));
  }

  return cartCounter();
}

// Add to counter as items are added to cart
const cartCounter = () => {
  let sum = 0;
  for (let i =0; i < localStorage.length; i++) {
    let mealItem = JSON.parse(localStorage.getItem(localStorage.key(i)));
    sum += mealItem.qty;
  }
  $('#cart-counter').text(0 + sum);
}

const attachCartHandler = (e) => {
  $.ajax({
    method: 'GET',
    url: '/api/menu/'
  })
  .then((res) => { addItemToCart(e.target.id, res)})
}
