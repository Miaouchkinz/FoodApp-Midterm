$(document).ready(() => {

  const createCartElements = (cartItem) => {
    const itemPrice = (cartItem.qty * cartItem.price / 100).toFixed(2);
    const $cartElement = `
      <div class="meal-items container-lg">
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
                      <span>${cartItem.qty}</span>
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
  };

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

  $('.cart > img').click(() => {
    $('.meal-items').remove();
    $('.menu-category').hide();
    renderCartElements();
    $('.place-order').show();

    calculateSubTotal();
    calculateTotalCost();
  });

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

});
