$(document).ready(function () {
  $('.place-order').hide();

  // New tweet HTML format
  const createMenuItems = function(mealItem) {
    const mealPrice = (mealItem.price / 100).toFixed(2);
    const $menuElement = `<div class="meal-items conainer-lg">
    <div class="row meal-items-row">
      <div class="col-lg-3 my-auto">
        <h3>${mealItem.name}</h3>
      </div>

      <div class="col-lg-9 meal-items-row-container">
          <div class="row meal-items-row">
              <div class="col-lg-8 meal-items-row-description">
                  <span class="heading">
                      <p>
                      ${mealItem.description}
                      </p>
                      <p><i>
                      Ingredients: ${mealItem.ingredient_list}
                      </i></p>
                  </span>
              </div>
              <div class="col-lg-1">
              </div>
              <div class="col-lg-3 price-quantity my-auto">
                <span>
                  <p>
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" id="${mealItem.id}" class="add-to-cart btn btn-warning btn-lg">Place to order</button>

                    </div>
                  </p>
                  <p>
                    $ ${mealPrice}
                  </p>
                </span>
              </div>
          </div>
      </div>
      </div>
    </div>
  </div>
  `;

    return $menuElement;
  };



  // Rendering taken from [{}] Json format
  const renderMenuElements = function (menuItemArray) {

    $menuItems = '';
    for (let i = 0; i < menuItemArray.length; i++) {
      $menuItems += createMenuItems(menuItemArray[i]);
    }
    $('#meal-items').prepend($menuItems);
    $(".add-to-cart").click(attachCartHandler);
  };

  const loadMenuSandwitch = function (menuItem) {
    $.ajax({
      method: 'GET',
      url: `http://localhost:8080/api/menu/${menuItem}`
    })
      .then(renderMenuElements);
  };

  $('#sandwich').click(function(){
    $('.meal-items').remove();
    loadMenuSandwitch('sandwich');
  });

  $('#soup').click(function(){
    $('.meal-items').remove();
    loadMenuSandwitch('soup');
  });

  $('#salad').click(function(){
    $('.meal-items').remove();
    loadMenuSandwitch('salad');
  });

  $('#drinks').click(function(){
    $('.meal-items').remove();
    loadMenuSandwitch('drinks');
  });

});


