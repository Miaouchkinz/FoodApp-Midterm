$(document).ready(function () {

  // Order Is Ready button - put the avatar into ready for pickup table
  $('body').on('click', '.orderIsReady',function(){
    const name = $(this).attr('value');
    const orderNumber = $(this).attr('title');
    const pic_id = $(this).attr('alt');

    $.post(`/api/admin/orders/${orderNumber}`,
      {data: { order_id: orderNumber, is_complete: true}}
    )
    // Move avatar from upcoming list into pickup
    const pickupReadyPerson = `<div class="col-lg-2 mr-4">
    <img src="/images/user-circle${pic_id}.png">
    <br>
    <p id="putOrderNumber">
    Order Number: ${orderNumber}
    </p>
    <p>
    ${name}
    </p>
    </div>`;

    $('#readyForPickupRow').append(pickupReadyPerson);

    // Notify client to order number in waiting
    const notifyClientWaiting= `
    <section class="waiting">
    <div class="conainer-lg">
    <div class="row waiting-row">
      <div class="col">
        <img src="/images/step-bar5.png" alt="step-bar">
      </div>
      <div class="w-100"></div>
      <div class="col-lg-1 my-auto"></div>
      <div class="col-lg-1 my-auto"></div>

      <div class="col-lg-2 my-auto">Choose your foods</div>
      <div class="col-lg-1 my-auto"></div>

      <div class="col-lg-2 my-auto">Order complete</div>
      <div class="col-lg-1 my-auto"></div>
      <div class="col-lg-2 my-auto">Ready for pickup</div>

      <div class="col-lg-1 my-auto"></div>
      <div class="col-lg-1 my-auto"></div>
    </div>
  </div>
  <br>
  <br>
  <br>
  <div class="conainer-lg">
    <div class="row waiting-row">
      <div class="col-lg-3 my-auto"></div>
      <div class="col-lg-6 my-auto">
        <img src="/images/Catering3.png" alt="step-bar">
        <div id="waitingOrderNumber"></div>

    <h3>Order number: ${orderNumber}</h3>
    <h3>Name: ${name}</h3>
    <p>
    Thank you for your order<br>
    Your order will be ready in 15 min<br>
  </p>
  <p>
    We will notify you via SMS message when it's ready to pick up
  </p>
  </div>
  <div class="col-lg-3 my-auto"></div>
</div>
</div>
</section>`;

    $('#waiting').append(notifyClientWaiting);
    $(this).closest( ".upcomming-order" ).hide();

  });


  const createPickUp = function(pickup) {
    const pickupReadyPerson = `<div class="col-lg-2 my-auto mr-5">
    <img src="/images/user-circle1.png"><br>
    <p id="putOrderNumber">
    ${pickup.order_number}
    </p>
    <p>
    ${pickup.name}
    </p>
    </div>`;

    return pickupReadyPerson;
  };

  const renderReadyForPickUp = function (pickupArray) {
    let pickupList = '';
    for (let i = 0; i < pickupArray.length; i++) {
      pickupList += createPickUp(pickupArray[i]);
    }
    $('#readyForPickupRow').prepend(pickupList);
  };

  const readyForPickUpload = function () {
    $.ajax({
      method: 'GET',
      url: `http://localhost:8080/api/admin/orders/ready_for_pickup`
    })
      .then(renderReadyForPickUp);
  };
  readyForPickUpload();
});
