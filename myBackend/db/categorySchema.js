const mongoose=require('mongoose');

const catSchema=mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    Phone:{
        type:Number,
    },
    pass:{
        type:String,
    },

    cPass:{
        type:String
    },
    orders:Array,
    cardData:Array,
    totalPrice:{
        type:Number
    }
})

const pizzaSchema=mongoose.Schema({
    name:{
        type:String,
    },
    Price:{
        type:Number,
    },
    path:{
        type:String,
    },
})
const orderSchema=mongoose.Schema({
    orders:{
        type:Array,
    },
    totalPrice:{
        type:Number
    }
})
const catModel=mongoose.model('customer',catSchema)
const pizzaModel=mongoose.model('pizza',pizzaSchema)
const orderModel=mongoose.model('order',orderSchema)
module.exports={
    catModel:catModel,
    pizzaModel:pizzaModel,
    orderModel:orderModel
}