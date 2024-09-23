const mongoose = require('mongoose');

//schema creation
const subscriberSchema = mongoose.Schema({
    //schema properties
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    zipCode: {
        type: Number,
        min: [10_000, "Zip code too short, must be 5 digits"],
        max: 99_999 //zipcode must be 5 digits long
    },
    //course subscribers have been enrolled in
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course "}]
});
//retyrns substriber info 
subscriberSchema.methods.getInfo = function () {
    return `Name: ${this.name} Email: ${this.email} Zip Code:
   ${this.zipCode}`;
};
// finds subscriber by zipcode
subscriberSchema.methods.findLocalSubscribers = function () {
    return this.model("Subscriber")
        .find({ zipCode: this.zipCode })
        .exec();
};

module.exports = mongoose.model("Subscriber", subscriberSchema);