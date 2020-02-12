const hideMenuPage = () => {
  $('.meal-items').remove();
  $('.menu-category').hide();
  $('.place-order').show();
}

$(() => {
  // Ensures the cart count is still there on page load
  updateCartCounter();
  createTipHandlers();

  $('.cart > img').click(() => {
    hideMenuPage();
    renderCartElements();

    calculateSubTotal();
    calculateTotalCost();
  });
});
