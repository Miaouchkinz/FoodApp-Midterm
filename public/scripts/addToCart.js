$(document).ready(() => {

  const addItemToCart = (id, mealItemsArray) => {
    const mealItem = mealItemsArray.find(item => item['id'].toString() === id);
    let checkItemExist = JSON.parse(localStorage.getItem(JSON.stringify(id)));

    if (!checkItemExist) {
      localStorage.setItem(JSON.stringify(id), JSON.stringify({...mealItem, qty: 1}));
    } else {
      checkItemExist.qty += 1;
      localStorage.setItem(JSON.stringify(id), JSON.stringify(checkItemExist));
    }

  }

  $(".add-to-cart").click((e) => {
    $.ajax({
      method: 'GET',
      url: '/api/menu/'
    })
    .then((res) => { addItemToCart(e.target.id, res)})
  });

});
