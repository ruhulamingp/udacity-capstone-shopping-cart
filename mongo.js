const config = require('./config/index');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose
  .connect(config.mongoUri, {
  })
  .then(() => {
    console.log('Mongodb is connected!!');
  })
  .catch(err => {
    console.warn(err);
  });

