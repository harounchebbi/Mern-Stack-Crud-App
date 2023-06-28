const mongoose = require('mongoose');
require('dotenv').config();
// Allow Promises
mongoose.Promise = global.Promise;
// Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true,useUnifiedTopology:true,useFindAndModify:false  });
// Validation
mongoose.connection
  .once('open', () => console.log('Connected to the database!'))
  .on('error', err => console.log('Error with the database!', err));
