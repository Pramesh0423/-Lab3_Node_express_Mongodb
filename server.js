const express = require('express');
const mongoose = require('mongoose');
const restaurantRouter = require('./routes/RestaurantRoutes.js');

const app = express();
app.use(express.json()); // Make sure it comes back as json

//TODO - Replace you Connection String here
mongoose.connect('mongodb+srv://Pramesh0423:Priya@9849187358@gbcwinter2021.88y4u.mongodb.net/GBCFULLSTACK?retryWrites=true&w=majority', {
  //Priya@9849187358
  //GBCFULLSTACK
useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(restaurantRouter);

app.listen(8081, () => { console.log('Server is running...') });