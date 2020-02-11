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

const attachCartHandler = (e) => {
  console.log(e.target);
  $.ajax({
    method: 'GET',
    url: '/api/menu/'
  })
  .then((res) => { addItemToCart(e.target.id, res)})
}
