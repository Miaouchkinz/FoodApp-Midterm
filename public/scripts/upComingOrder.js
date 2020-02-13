$(document).ready(function () {
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

  $('#upcoming-order-button').click(function(){
    loadUpcoming();
  });

});
