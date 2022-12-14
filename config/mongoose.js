const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/habit_tracker_db'); //connect to database

const db = mongoose.connection;  //acquire the connection to check if its successful or not


db.on('error',console.error.bind(console,"error connecting to db"));  //if error

//db up and running
db.once('open',function(){
    console.log("Succefully connected to mongodb");
});

// mongodb://localhost