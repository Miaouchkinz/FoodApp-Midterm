$(document).ready(function () {
// New upcoming HTML format
const createUpcoming = function(upcoming) {
  const name = upcoming.name;
  const order_number = upcoming.order_number;
  const meal_item = upcoming.meal_item;
  const pic_id = (order_number % 3) + 1;
  const quantity = upcoming.item_qty
  let eachMeal_item = '';

  for (let element of upcoming.meal_item) {
    eachMeal_item += `<p>${element} &nbsp  ${quantity}<p>`;
  }
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
        <div class="text-left">
          <p>
            ${eachMeal_item}
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

  // Transform Array Object: combine same order id and change meal_item as array
  // Thank you. Jess
  const combineArr = function(arr) {
    combinedArray = arr.reduce(function (acc, obj){

      // is it empty?
      if(acc.length === 0) {
        acc.push(obj)
      } else if (acc.filter(x => obj.order_number === x.order_number).length !== 0) {
        for(let i = 0; i < acc.length; i++) {
          if (acc[i].order_number === obj.order_number) {
            if (Array.isArray(acc[i].meal_item)) {
              acc[i].meal_item.push(obj.meal_item)
            } else {
           acc[i].meal_item = [acc[i].meal_item, obj.meal_item]
               }
          }
        }
      } else {
        acc.push(obj)
      }
      return acc;
    }, []);
    return combinedArray;
  };

  // Rendering loadRestaurantViews taken from [{}] Json format
  const renderUpcoming = function (upcomingArray) {
    const transformedArray = combineArr(upcomingArray);
    $upcomingList = '';
    for (let i = 0; i < transformedArray.length; i++) {
      $upcomingList += createUpcoming(transformedArray[i]);
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
