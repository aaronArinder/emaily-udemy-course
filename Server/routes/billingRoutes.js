const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

//handling a post request by making a charge object to sent to stripe
//getting req.body.id with body-parser, acting as middleware
module.exports = app => {
  app.post('/api/stripe', (req, res) => {
    stripe.charges
      .create({
        amount: 500,
        currency: 'usd',
        description: '$5 for 5 credits',
        source: req.body.id
      })
      .then(charge => {
        console.log(charge);
      });
  });
};

// export const fetchUser = () => {
//   return function(dispatch) {
//     axios
//       .get('/api/current_user')
//       .then(res => dispatch({ type: FETCH_USER, payload: res.data }));
//   };
// };
