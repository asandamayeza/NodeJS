const mongoose = require('mongoose');

//schema creation
const subscriberSchema = mongoose.Schema({
    //schema properties
    name: String,
    email: String,
    zipCode: Number
}); //define schema properties 

module.exports = mongoose.model("Subscriber", subscriberSchema); // exported the model