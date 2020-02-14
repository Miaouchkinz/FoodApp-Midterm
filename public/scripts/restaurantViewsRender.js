$(document).ready(function () {
  // $('.place-order').hide();
  // $('.waiting').hide();

  // New restaurantViews HTML format
  const createRestaurantViews = function(latestOrder) {


    const order_number = latestOrder.order_number;
    const name = latestOrder.name;
    const item_qty = latestOrder.item_qty;
    const meal_item = latestOrder.meal_item;


/*
    <section class="new-order">
    <div class="conainer-lg">
      <div class="row new-order-row">

        <div class="col-sm-2">
          <p>New Order #</p>
        </div>
        <div class="col-sm">

        </div>
        <div class="w-100"></div>

        <div class="col-lg-1 bell my-auto">
          <img src="/images/bell2.png" alt="bell">
        </div>
        <div class="col-lg-1 my-auto"></div>
        <div class="col-lg-2 text-center my-auto avatar">
          <img src="/images/user3.png" alt="user">
          <br>
          <br>
          <p>
            mikymouse@amail.com
          </p>
        </div>
        <div class="col-lg-1 my-auto"></div>
        <div class="col-lg-4 order-list my-auto text-left">
          <p>order-list</p>
          <p>
            cat_name('sandwich'): name('roast beef') price('$ 0.00')
            cat_name('sandwich'): name('roast beef') price('$ 0.00')
            cat_name('sandwich'): name('roast beef') price('$ 0.00')
            Total Price: $ 10.00
          </p>
          <p>
            Total Price: $ 10.00
          </p>
        </div>
        <div class="col-lg-1 my-auto"></div>
        <div class="col-lg-2 decision-sms align-top">
          <div class="d-flex justify-content-between">

            <img src="/images/check-mark3.png" alt="check-mark">
            <img src="/images/x-mark3.png" alt="x-mark">

          </div>
          <br>
          <div class="sms">
            sms
          </div>
        </div>

      </div>
    </div>
  </section>
*/


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
    // loadUpcoming(); //TOFIX
  });

  // $('#hide-restaurant-views').click(function(){
  //   $('.restaurant-views-render').toggle();
  // });


});


