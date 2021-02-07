const express = require('express');
const restaurantModel = require('../models/Restaurant.js');
const app = express();

//Q.4
//http://localhost:8081/restaurants
app.get('/restaurants', async (req, res) => {
  var restaurant = '';

  //Q.6
  const sorting = req.query.sortBy;

  if (sorting == 'DESC') {
    restaurant = await restaurantModel.find({}).select(" _id cuisine name city restaurant_id ").sort({ 'restaurant_id': -1 });
  }
  else if (sorting == 'ASC') {
    restaurant = await restaurantModel.find({}).select(" _id cuisine name city restaurant_id ").sort({ 'restaurant_id': 1 });
  }else 
    restaurant = await restaurantModel.find({});

  try {
    res.status(200).send(restaurant);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Q.5
// http://localhost:8081/restaurants/cuisine/Japanese
app.get('/restaurants/cuisine/:name', async (req, res) => {
  const name = req.params.name
  const restaurants = await restaurantModel.find({ cuisine: name });
  try {
    if (restaurants.length != 0) {
      res.send(restaurants);
    } else {
      res.send(JSON.stringify({ status: false, message: "No data found" }))
    }
  } catch (err) {
    res.status(500).send(err);
  }
});


//Q.7
// http://localhost:8081/restaurants/Delicatessen
app.get('/restaurants/Delicatessen', async (req, res) => {
  const restaurant = await restaurantModel.find(
    {
      $and: [{ cuisine: 'Delicatessen' },
      { "city": { $not: { "$eq": "Brooklyn" } } }]
    }).select("cuisine name city ").sort({ 'name': 1 });
  try {
    res.status(200).send(restaurant);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app


