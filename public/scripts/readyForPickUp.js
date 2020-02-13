$(document).ready(function () {

  // ???? more than 5 upcoming order -> next line?
  // Order Is Ready button - put the avatar into ready for pickup table
  $('body').on('click', '.orderIsReady',function(){
    const name = $(this).attr('value');
    const orderNumber = $(this).attr('title');
    const pic_id = $(this).attr('alt');
    const pickupReadyPerson = `<div class="col-lg-2 mr-4">
    <img src="/images/user-circle${pic_id}.png"><br>
    <p id="putOrderNumber">
    Order Number: ${orderNumber}
    </p>
    <p>
    ${name}
    </p>
    </div>`;
    console.log('pickupReadyPerson:  ', pickupReadyPerson)
    $('#readyForPickupRow').append(pickupReadyPerson);
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

  //Rendering taken from [{}] Json format
  const renderReadyForPickUp = function (pickupArray) {
    // console.log('renderReadyForPickUp:  ',pickupArray);
    let pickupList = '';
    for (let i = 0; i < pickupArray.length; i++) {
      pickupList += createPickUp(pickupArray[i]);
      // console.log('for pickupList:  ',$pickupList);
    }
    console.log('pickupList:  ',pickupList);
    $('#readyForPickupRow').prepend(pickupList);
    // $(".add-to-cart").click(addToCartHandler);
  };

  //Take the JSON
  const readyForPickUpload = function () {
    $.ajax({
      method: 'GET',
      url: `http://localhost:8080/api/admin/orders/ready_for_pickup`
    })
      .then(renderReadyForPickUp);
  };
  readyForPickUpload();
});
