require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const orderIsPlaced = () => {
  return client.messages
    // To Client
    .create({
      body: 'Thank you for placing an order with us! Your order will be ready in 15 mins :-)',
      from: '+14382995889',
      to: '+15148240269'
    })
    .then(() => {
      // To Resto
      return client.messages
      .create({
        body:'Fred just placed an order. She was notified that the order will be ready in 15 mins.',
        from: '+14382995889',
        to: '+15148240269'
      })
    });
    // .then(message => console.log('twilio', message.sid));
};

const orderIsReady = () => {
  return client.messages
  // To client
  .create({
    body: 'Your order is ready, come on down! :-)',
    from: '+14382995889',
    to: '+15148240269'
  })
}

module.exports = {orderIsPlaced, orderIsReady};
