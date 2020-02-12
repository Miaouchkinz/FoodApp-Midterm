const createCartElements = (cartItem) => {
  const itemPrice = (cartItem.qty * cartItem.price / 100).toFixed(2);
  const $cartElement = `
    <div id="meal-item-${cartItem.id}" class="meal-items container-lg">
      <div class="row meal-items-row">
        <div class="col-lg-3 my-auto">
          <h3>${cartItem.name}</h3>
        </div>

        <div class="col-lg-9 meal-items-row-container">
            <div class="row meal-items-row">
                <div class="col-lg-1"></div>
                <div class="col-lg-3 price-quantity my-auto">
                  <span>
                    <div class="btn-group" role="group" aria-label="Basic example">
                      <button type="button" id="${cartItem.id}" class="remove-from-cart btn btn-danger btn-lg"> - </button>
                    </div>
                    <span id="qty-${cartItem.id}">${cartItem.qty}</span>
                    <div class="btn-group" role="group" aria-label="Basic example">
                      <button type="button" id="${cartItem.id}" class="add-to-cart btn btn btn-success btn-lg"> + </button>
                    </div>
                  </span>
                </div>
                <div class="col-lg-3 price-quantity my-auto">
                  <p>$<span class="item-price">${itemPrice}</span></p>
                </div>
            </div>
          </div>
        </div>
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

