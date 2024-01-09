import mongoose from 'mongoose'

const proShcema = new mongoose.Schema({
    name: String,
    info:String,
    price:Number
  });
  const Product = mongoose.model('product004', proShcema);

  export default Product