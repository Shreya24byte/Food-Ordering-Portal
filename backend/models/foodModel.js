const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const FoodSchema = new Schema ({
    'food': String,
    'name': String,
    'image': String,
    'price': String,
    'description': String
},
{ 
    collection :"food",
});

  module.exports = mongoose.model("food", FoodSchema);