//determing keys based on whether prod or dev

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}

//ie, pull in the keys and export them to whatever is asking
