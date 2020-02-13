$(document).ready(function () {

// create function that grabs values of keys in
// the object that is the value of the key in local storage
// store as meal_item_id: qty
  const getCartItemAndQty = () => {
    let cart = []
    let keys = Object.keys(localStorage);

    for (let [key, value] of Object.entries(localStorage)) {
      cart.push(JSON.parse(localStorage.getItem(key)))
    }

    return cart.map((x, i) => { return { [keys[i]] : x.qty } });
  }

  // pass info to ajax post to create order



});

//============

// pass object to ajax post to create order

// ==========

// create event.handler that triggers above ^^
// once all is done, it should clear cart and render waiting page

//============

// create backend route for post
// create DB query to add entry to orders table and order_items table

//
