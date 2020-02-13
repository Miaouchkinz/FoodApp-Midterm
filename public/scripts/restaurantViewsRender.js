$(document).ready(function () {
  // $('.place-order').hide();
  // $('.waiting').hide();

  // New restaurantViews HTML format
  const createRestaurantViews = function(mealItem) {
    // console.log(mealItem);

    const $restaurantViews = `
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

  <section class="pick-up">
  <div class="conainer-lg">
    <div class="row pick-up-row">
      <div class="col-lg-1"></div>
      <div class="col-lg-4 text-left">
        <p>
          <h2>COMPLTETED</h2>
        </p>
        <p>
          <h2>READY FOR PICK UP</h2>
        </p>
      </div>
      <div class="col-lg-2"></div>
      <div class="col"></div>
      <div class="w-100"></div>

      <div class="col-lg-1 my-auto"></div>

      <div id="readyForPickupRow" class="col-lg-10">



      </div>

      <div class="col-lg-1 my-auto"></div>
    </div>
  </div>
</section>



  `;


  return $restaurantViews;
};


// New upcoming HTML format
const createUpcoming = function(upcoming) {
  console.log('createUpcoming', upcoming);
  const name = upcoming.name;
  const order_number = upcoming.order_number;
  // const item_qty = upcoming.item_qty;
  const meal_item = upcoming.meal_item;
  const pic_id = (order_number % 3) + 1;
  console.log('pic_id:  ', pic_id);
  const upcomingHTML = `
  <section class="upcomming-order">
  <div class="conainer-lg">
    <div class="row new-order-row">
      <div class="col-lg-1"></div>
      <div class="col-lg-2 avatar my-auto align-middle">
        <img src="/images/user-circle${pic_id}.png" alt="user">
        <br>
        <p id="takeName">${name}</p>
      </div>
      <div class="col-lg-6 my-auto align-middle">
        <p class="takeOrderNumber">Order Number: ${order_number}</p>
        <div class="text-middle">
          <p>
            ${meal_item}
          </p>

        </div>
      </div>
      <div class="col-lg-1"></div>
      <div class="col-lg-2 sms my-auto">
        <div class="orderIsReady" value="${name}" title="${order_number}" alt="${pic_id}">
          <p>
          order is ready
          </p>
        </div>
      </div>
    </div>
  </div>
  </section>
  `;

  return upcomingHTML;
};



/*

      <div class="col-lg-2 my-auto">
        <img src="/images/user-circle1.png"><br>
        <p id="putOrderNumber">
        new-order 1
        </p>
        <p>
        Name
        </p>
      </div>
      <div class="col-lg-2 my-auto">
        <img src="/images/user-circle2.png"><br>
        <p>
          new-order 2
          </p>
          <p>
          Name
        </p>
      </div>
      <div class="col-lg-2 my-auto">
        <img src="/images/user-circle3.png"><br>
        <p>
          new-order 3
          </p>
          <p>
          Name
        </p>
      </div>
      <div class="col-lg-2 my-auto">
        <img src="/images/user-circle1.png"><br>
        <p>
          new-order 4
          </p>
          <p>
          Name
        </p>
      </div>
      <div class="col-lg-2 my-auto">
        <img src="/images/user-circle2.png"><br>
        <p>
          new-order 5
          </p>
          <p>
          Name
        </p>
      </div>

*/



  // Rendering loadRestaurantViews taken from [{}] Json format
  const renderRestaurantViews = function (pickupArray) {
    // console.log(pickupArray)
    $restaurantViews = createRestaurantViews();
    $('#restaurant-views').prepend($restaurantViews);
  };

  // AJAX for rendering loadRestaurantViews
  const loadRestaurantViews = function (menuItem) {
    $.ajax({
      method: 'GET',
      url: `http://localhost:8080/api/admin/orders/ready_for_pickup`
    })
      .then(renderRestaurantViews);
  };




  // Rendering loadRestaurantViews taken from [{}] Json format
  const renderUpcoming = function (upcomingArray) {
    console.log('renderUpcoming: ',upcomingArray)
    // $upComing = createUpcoming();
    $upcomingList = '';
    for (let i = 0; i < upcomingArray.length; i++) {
      $upcomingList += createUpcoming(upcomingArray[i]);
    }
    $('#upcoming-order').prepend($upcomingList);
  };

  // Rendering upcoming order
  const loadUpcoming = function (menuItem) {
    $.ajax({
      method: 'GET',
      url: `http://localhost:8080/api/admin/orders/upcoming`
    })
      .then(renderUpcoming);
  };




  $('#render-restaurant-views').click(function(){
    $('.meal-items').remove();
    $('.menu-category').remove();
    loadRestaurantViews('sandwich');
    loadUpcoming();
  });

  $('#hide-restaurant-views').click(function(){
    $('.restaurant-views-render').toggle();
  });


});


