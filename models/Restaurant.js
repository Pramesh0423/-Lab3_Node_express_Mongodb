const mongoose = require('mongoose');

// Question 3 - schema
const RestaurantSchema = new mongoose.Schema({
    address:{
        building:{
            type: String,
            trim: true
        },
        street:{
            type: String,
            trim: true
        },
        zipcode:{
            type: String,
            trim: true
        }
    },
    city:{
        type: String,
        trim: true
    },
    cuisine:{
        type: String,
        trim: true
    },
    name:{
        type: String,
        trim: true
    },
    restaurant_id:{
        type: String,
        trim: true
    },

});


const Restaurants = mongoose.model("Restaurants", RestaurantSchema);
module.exports = Restaurants;