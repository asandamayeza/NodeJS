const Subscriber = require('../models/subscriber'); // require the subscriber model

exports.getAllSubscribers = (req, res) => { //retrieve all subscribers
    Subscriber.find({})
    .exec()
        .then((subscribers) => {
            res.render("subscribers", {
                subscribers: subscribers
            });
        })
        .catch((error) => {
            console.log(error.message);
            return [];
        })
        .then(() => {
            console.log("Promise Complete")
        });
};

exports.getSubscriptionPage = (req, res) => { //render the contact page 
    res.render("contact");
};

exports.saveSubscriber = (req, res) => { //save subscribers 
    let newSubscriber = new Subscriber({
        name: req.body.name,
        email: req.body.email,
        zipCode: req.body.zipCode
    });
    newSubscriber.save()
    .then((result) => {
        res.render("thanks");
    })
    .catch((error) => {
        res.send(error);
    });
};