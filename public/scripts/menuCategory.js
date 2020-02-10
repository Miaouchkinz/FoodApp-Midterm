$(document).ready(function () {
//   const mealItem = `<div class="meal-items conainer-lg">
//   <div class="row meal-items-row">
//     <div class="col-lg-3">
//       <img src="/images/sandwich7.png" alt="BLT">
//     </div>

//     <div class="col-lg-9 meal-items-row-container">
//         <div class="row meal-items-row">
//             <div class="col-lg-8 meal-items-row-description">
//                 <span class="heading">
//                     <p>
//                       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi officiis ratione unde voluptatibus sapiente deserunt voluptate culpa nam non suscipit architecto, eos ullam perspiciatis, quasi laboriosam tenetur neque facere aliquam.
//                     </p>
//                 </span>
//             </div>
//             <div class="col-lg-1">
//             </div>
//             <div class="col-lg-3 price-quantity">
//               <span>
//                 <p>
//                     <div class="btn-group" role="group" aria-label="Basic example">
//                         <button type="button" class="btn btn-success">+</button>
//                         <button type="button" class="btn btn-light">0</button>
//                         <button type="button" class="btn btn-danger">-</button>
//                       </div>
//                 </p>
//                 <p>
//                   $ 0.00
//                 </p>
//               </span>
//             </div>
//         </div>
//     </div>
//     </div>
//   </div>
// </div>
// `;


  // $('#sandwich').click(function(){

  //   $.ajax('/scripts/test1.js', { method: 'GET' })
  //   .then(function (mealItem) {
  //     console.log('Success: ', mealItem);
  //     $('#meal-items').prepend(mealItem);
  //   });

  // });

    // New tweet HTML format
    const createMenuItems = function(element) {
      console.log(element)
      const menuElement = `<div class="meal-items conainer-lg">
      <div class="row meal-items-row">
        <div class="col-lg-3">
          <img src="/images/sandwich7.png" alt="BLT">
        </div>

        <div class="col-lg-9 meal-items-row-container">
            <div class="row meal-items-row">
                <div class="col-lg-8 meal-items-row-description">
                    <span class="heading">
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi officiis ratione unde voluptatibus sapiente deserunt voluptate culpa nam non suscipit architecto, eos ullam perspiciatis, quasi laboriosam tenetur neque facere aliquam.
                        </p>
                    </span>
                </div>
                <div class="col-lg-1">
                </div>
                <div class="col-lg-3 price-quantity">
                  <span>
                    <p>
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-success">+</button>
                            <button type="button" class="btn btn-light">0</button>
                            <button type="button" class="btn btn-danger">-</button>
                          </div>
                    </p>
                    <p>
                      $ 0.00
                    </p>
                  </span>
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
    `;

      return $tweet;
    };



  // Rendering taken from [{}] Json format
  const renderMenuElements = function (menuItemArray) {
    console.log(menuItemArray);
    // $menuItems = '';
    // for (let i = 0; i < menuItemArray.length; i++) {
    //   let lastMenuItem = menuItemArray.pop();
    //   $menuItems += createTweetElement(lastMenuItem);
    // }
    // $('#meal-items').prepend($menuItems);
  };

  const loadMenuSandwitch = function () {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:8080/api/menu/sandwich'
    })
      .then(renderMenuElements);
  };

  $('#sandwich').click(function(){
    loadMenuSandwitch();
    // $.ajax('/scripts/test1.js', { method: 'GET' })
    // .then(function (mealItem) {
    //   console.log('Success: ', mealItem);
    //   $('#meal-items').prepend(mealItem);
    // });

  });


});

  // $button.on('click', function () {
  // $.ajax('test1.html', { method: 'GET' })
  //   .then(function (testHTML) {
  //     console.log('Success: ', testHTML);
  //     $button.prepend(testHTML);
  //   });
  // });


  // Create new meal item elements HTML format
  // const createMealItemElements = function(tweet) {
  //   const userTweet = `${escape(tweet.content.text)}`;
  //   let $tweet = `<article class="tweet-container">
  //     <div class="tweet-container-header">
  //       <div style="flex-grow: 1;">
  //           <img class="newton" src="${tweet.user.avatars}">
  //       </div>
  //       <div style="flex-grow: 1;">
  //           <h2>${tweet.user.name}</h2>
  //       </div>
  //       <div style="flex-grow: 8;"></div>
  //       <div style="flex-grow: 1;">
  //           <h2>${tweet.user.handle}</h2>
  //       </div>
  //     </div>
  //     <div class="tweet-container-content">
  //       <h2>${userTweet}</h2>
  //     </div>
  //     <footer class="formButtonCounter">
  //       <span>${tweet.created_at}</span>
  //       <span class="icons">
  //       <img src="/images/flag.png">
  //       <img src="/images/retweet.png">
  //       <img src="/images/heart.png">
  //       </span>
  //     </footer>
  //   </article>`;

  //   return $tweet;
  // };


// $(function() {
//   const $button = $('#load-more-posts');
//   $button.on('click', function () {
//     console.log('Button clicked, performing ajax call...');
//     $.ajax('more-posts.html', { method: 'GET' })
//     .then(function (morePostsHtml) {
//       console.log('Success: ', morePostsHtml);
//       $button.replaceWith(morePostsHtml);
//     });
//   });
// });
