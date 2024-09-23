
const mongoose = require("mongoose"),
 Subscriber = require("./models/subscriber");

 mongoose.connect(
    "mongodb://0.0.0.0:27017/recipe_db",
    { useNewUrlParser: true }
   );
   mongoose.connection;

   //Adding data in bulk to app instead of via contact form
   let contacts = [
    {
        name: "Lethu Manzini",
        email: "manzini@gmail.com",
        zipCode: 11122
        },
    {
    name: "Nkule mayeza",
    email: "nkule@gmail.com",
    zipCode: 22333
    },
    {
    name: "Swazi Dlamini",
    email: "swadlamini@gmail.com",
    zipCode: 33344
    },
    {
    name: "Amanda Dlamini",
    email: "dlamini@gmail.com",
    zipCode: 44555
    }
   ];

   Subscriber.deleteMany()
    .exec()
    .then(() => {
    console.log("Subscriber data is empty!");
    });

   let commands = [];

   contacts.forEach((c) => {
    commands.push(Subscriber.create({
   name: c.name,
   email: c.email,
   zipCode: c.zipCode 
    }));
   });

   Promise.all(commands)
    .then(r => {
    console.log(JSON.stringify(r));
    mongoose.connection.close();
    })
    .catch(error => {
        console.log(`ERROR: ${error}`);
 });