const mongoose = require('mongoose');
const { Schema } = mongoose;

//Schema = Configuration of products/elements
const productSchema = new Schema({
    title: {type: String, required: true, unique: true}, // String is shorthand for {type: String}
    description: String,
    price: {type: Number, min:[0, 'wrong price'], required: true},
    discountPercentage: {type: Number, min:[0, 'wrong min discountg'], max:[50, 'wrong max discount'], required: true},
    rating: {type: Number, min:[0, 'wrong min rating'], max:[5, 'wrong max rating'], required: true},
    brand: {type: String, required: true},
    category: {type: String, required: true},
    thumbnail: {type: String, required: true},
    images: [String]
  });
  
  // Scheme => model class => prodct collection ye Schema hoga
  exports.Product = mongoose.model('Product', productSchema);