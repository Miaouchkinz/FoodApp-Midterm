$(document).ready(function () {


  const getCartItemAndQty = () => {
    let cartItems = []
    let keys = Object.keys(localStorage);

    for (let [key, value] of Object.entries(localStorage)) {
      cartItems.push(JSON.parse(localStorage.getItem(key)))
    }

    cartItems.map((x, i) => { return { [keys[i]] : x.qty } });

    return cartItems;
  }
  // create event.handler that triggers above
  // pass info to ajax post to create order
  // once all is done, it should clear cart and render waiting page
  $('#place-order').click( () => {
    // getCartItemAndQty()
    //   .then( (cartItems) => {
        $.ajax({
          method: 'POST',
          url: '/api/orders/new',
          data: {
            cartItems: getCartItemAndQty()
          }
        })
      .then(() => {
        localStorage.clear();
      })
      //TO ADD: .then(render waiting page function)
  })

});
