$(document).ready(function () {
  $('.place-order').hide();

  // New tweet HTML format
  const createRestaurantViews = function(mealItem) {
    console.log(mealItem);
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
      <div class="col-lg-2 my-auto">
        <img src="/images/user-circle4.png" alt="user-circle3"><br>
        <p>
          new-order 1
        </p>
      </div>
      <div class="col-lg-2 my-auto">
        <img src="/images/user-circle5.png" alt="user-circle3"><br>
        <p>
          new-order 2
        </p>
      </div>
      <div class="col-lg-2 my-auto">
        <img src="/images/user-circle6.png" alt="user-circle3"><br>
        <p>
          new-order 3
        </p>
      </div>
      <div class="col-lg-2 my-auto">
        <img src="/images/user-circle4.png" alt="user-circle3"><br>
        <p>
          new-order 4
        </p>
      </div>
      <div class="col-lg-2 my-auto">
        <img src="/images/user-circle5.png" alt="user-circle3"><br>
        <p>
          new-order 5
        </p>
      </div>
      <div class="col-lg-1 my-auto"></div>
    </div>
  </div>
</section>

<section class="upcomming-order">
<div class="conainer-lg">
  <div class="row new-order-row">
    <div class="col-lg-1"></div>
    <div class="col-lg-2 avatar my-auto">
      <img src="/images/user-circle4.png" alt="user">
      <br>
      <p>
        mikymouse@amail.com
      </p>
    </div>
    <div class="col-lg-6">
      <p>order-list</p>
      <div class="text-left">
        <p>
          cat_name('sandwich'): name('roast beef') price('$ 0.00')
          cat_name('sandwich'): name('roast beef') price('$ 0.00')
          cat_name('sandwich'): name('roast beef') price('$ 0.00')
        </p>
        <p>
          Total Price: $ 10.00
        </p>

      </div>
    </div>
    <div class="col-lg-1"></div>
    <div class="col-lg-2 sms my-auto">
      <div>
        sms
      </div>
    </div>
  </div>
</div>
</section>
  `;

    return $restaurantViews;
  };



  // Rendering taken from [{}] Json format
  const renderRestaurantViews = function (menuItemArray) {

    $restaurantViews = createRestaurantViews();
    $('#restaurant-views').prepend($restaurantViews);
  };

  //
  const loadRestaurantViews = function (menuItem) {
    $.ajax({
      method: 'GET',
      url: `http://localhost:8080/api/menu/${menuItem}`
    })
      .then(renderRestaurantViews);
  };

  $('#render-restaurant-views').click(function(){
    $('.meal-items').remove();
    $('.meal-category').remove();
    loadRestaurantViews('sandwich');
  });

  $('#hide-restaurant-views').click(function(){
    $('.restaurant-views-render').toggle();
  });


});


