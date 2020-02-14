$(document).ready(function () {
  const createRestaurantViews = function(latestOrder) {
    const order_number = latestOrder.order_number;
    const name = latestOrder.name;
    const item_qty = latestOrder.item_qty;
    const meal_item = latestOrder.meal_item;

    const $restaurantViews = `
      <section class="pick-up">
      <div class="conainer-lg ">
        <div class="row pick-up-row">
          <div class="col-lg-1"></div>
          <div class="col-lg-4 text-left">
            <p>
              <h2>READY FOR PICK UP</h2>
            </p>
          </div>
          <div class="col-lg-2"></div>
          <div class="col"></div>
          <div class="w-100"></div>

          <div class="col-lg-1"></div>

          <div id="readyForPickupRow" class="col-lg-10">
          </div>
          <div class="col-lg-1"></div>
        </div>
      </div>
    </section>
    <h2 class="upcoming-header"> UPCOMING ORDERS </h2>
  `;

  return $restaurantViews;
};

  // Rendering loadRestaurantViews taken from [{}] Json format
  const renderRestaurantViews = function (pickupArray) {
    $restaurantViews = createRestaurantViews(pickupArray);
    $('#restaurant-views').prepend($restaurantViews);
  };

  // AJAX for rendering loadRestaurantViews
  const loadRestaurantViews = function () {
    $.ajax({
      method: 'GET',
      url: `http://localhost:8080/api/admin/orders/latest_order`
    })
      .then(renderRestaurantViews);
  };

  $('#render-restaurant-views').click(function(){
    $('.meal-items').remove();
    $('.menu-category').remove();
    $('.cart').replaceWith('<div></div>');
    $('#waiting').hide();
    loadRestaurantViews('sandwich');
  });

});


