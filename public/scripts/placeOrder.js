$(document).ready(function () {

// Order Is Ready button with tip- put the avatar into ready for pickup table
const notifyClientWaiting = function(){
  // console.log('id: place-order');
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
return notifyClientWaiting;
//   // $('#waitingOrderNumber').append(notifyClientWaiting);
//   $('#waiting').append(notifyClientWaiting);
//   $(this).closest( ".place-order" ).hide();
};


  const renderWaitingForClient = function () {
    $('#waiting').append(notifyClientWaiting);
  };

  const waitingForClient = function () {
    $.ajax({
      method: 'GET',
      url: `http://http://localhost:8080/api/orders/:id`
    })
      .then(renderWaitingForClient);
  };

////////////////////////////////////////////////////////////////////////////////////

  const getCartItemAndQty = () => {
    let cartItems = []
    let keys = Object.keys(localStorage);

    for (let [key, value] of Object.entries(localStorage)) {
      cartItems.push(JSON.parse(localStorage.getItem(key)))
    }

    cartItems.map((x, i) => { return { [keys[i]] : x.qty } });

    return cartItems;
  }
  // create event.handler that triggers above
  // pass info to ajax post to create order
  // once all is done, it should clear cart and render waiting page
  $('#place-order').click( () => {
    // getCartItemAndQty()
    //   .then( (cartItems) => {
        $.ajax({
          method: 'POST',
          url: '/api/orders/new',
          data: {
            cartItems: getCartItemAndQty()
          }
        })
      .then(() => {
        localStorage.clear();
      }).then(waitingForClient); // <---------------YoonSoon
      //TO ADD: .then(render waiting page function)
  })

});
