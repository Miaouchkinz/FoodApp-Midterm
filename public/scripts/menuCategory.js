$(document).ready(function(){

    $('#sandwich').click(function(){

      $.ajax('/scripts/test1.js', { method: 'GET' })
      .then(function (mealItem) {
        console.log('Success: ', mealItem);
        $('#meal-items').prepend(mealItem);
      });

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
