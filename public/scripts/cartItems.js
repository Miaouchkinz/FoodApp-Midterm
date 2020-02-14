const createCartElements = (cartItem) => {
  const itemPrice = (cartItem.qty * cartItem.price / 100).toFixed(2);
  const $cartElement = `
    <div id="meal-item-${cartItem.id}" class="order-items container-lg">
      <h3>${cartItem.name}</h3>
      <div class="quantity-container">
          <button type="button" id="${cartItem.id}" class="remove-from-cart btn btn-danger"> - </button>
          <span id="qty-${cartItem.id}">${cartItem.qty}</span>
          <button type="button" id="${cartItem.id}" class="add-to-cart btn btn-success"> + </button>
      </div>
      <div class="total-price">$<span class="item-price">${itemPrice}</span></div>
      </div>
    </div>
  `;

  return $cartElement;
};

const renderCartElements = () => {
  $cartContainer = '';
  for (let i = 0; i < localStorage.length; i++) {
    let cartItem = JSON.parse(localStorage.getItem(localStorage.key(i)));
    $cartContainer += createCartElements(cartItem);
  }
  $('#meal-items').prepend($cartContainer);
  $(".add-to-cart").click(addToCartHandler);
  $(".remove-from-cart").click(removeFromCartHandler);
};

const createTipHandlers = () => {
  $('.10-tip').click(() => {
    calculateTip(0.10);
  });

  $('.15-tip').click(() => {
    calculateTip(0.15);
  });

  $('.20-tip').click(() => {
    calculateTip(0.20);
  });

  $('.25-tip').click(() => {
    calculateTip(0.25);
  });
}

const hideMenuPage = () => {
  $('.meal-items').remove();
  $('.menu-category').hide();
  $('.place-order').show();
}

const openCheckoutHandler = () => {
  $('.cart > img').click(() => {
    hideMenuPage();
    renderCartElements();

    calculateSubTotal();
    calculateTotalCost();
  });
}

