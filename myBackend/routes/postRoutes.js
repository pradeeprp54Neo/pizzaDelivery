const express = require('express');
const fs = require('fs');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const jwtSecret = "asd889asdas5656asdas887";
const app = express();
const nodemailer =require('nodemailer')
app.use(express.json())
app.use(express.urlencoded({ extended: false }));


const autenticateToken=async(req, res, next) =>{
    const authHeader = await req.headers['authorization']
 const token = authHeader && authHeader.split(' ')[1]
    console.log(token+"/////////")
    if (token== null) {
        console.log( "Token not match" );
    }
    else {
       
        jwt.verify(token, jwtSecret, (err, data) => {
            if (err) {
                console.log( "Token incorrect" )
            }
            else {
                console.log("Match")
                next();
            }
        })
    }
}
const db = "mongodb://localhost:27017/pizzadelivery";

const connectDb = async () => {
    try {
        await mongoose.connect(db);
        console.log("mongodb connected");
    }
    catch (err) {
        console.log(err.message)
    }
}
connectDb();

const { catModel } = require('../db/categorySchema.js');
const { pizzaModel } = require('../db/categorySchema.js')
const { orderModel } = require('../db/categorySchema.js')
router.get('/getusers', (req, res) => {
    catModel.find({}, (err, data) => {
        if (err) throw err;
        res.send(data)
    })

})
router.get('/getmenu', (req, res) => {
    pizzaModel.find({}, (err, data) => {
        if (err) throw err;
        res.send(data)
    })

})
router.get('/getorder', (req, res) => {
    orderModel.find({}, (err, data) => {
        if (err) throw err;
        res.send(data)
    })

})
router.get('/getcount', (req, res) => {
    catModel.find({}, (err, data) => {
        if (err) throw err;
        res.send(data)
    })

})
router.post('/loginuser', (req, res) => {
    let id = req.body.id
    let name = req.body.name
    let payload = {
        uid: req.body.email
    }
    const token = jwt.sign(payload, jwtSecret, { expiresIn: 360000 })
    console.log(token+"*********")
    res.send( token )
    async function main() {
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
    
        // create reusable transporter object using the default SMTP transport
        const transporter = nodemailer.createTransport({
          service:"gmail",
            auth: {
                user: 'your email',
                pass: 'your password'
            }
        });
        var mailOptions = {
            from: 'your email ',
            to: req.body.email,
            subject: 'Orders is Confirmed!!!!!!',
            text: `
            hey ${name},
            We are glad that you choose us ! you order is confirmed and it will be delivered within 30 minutes

            If you have any query contact this number: 1234567890,
            Thank you,
            PizzaPark
            `
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
        }

       
    router.get('/loggedin', (req, res) => {
        res.send(id)
    })
    router.get('/emailme',(req,res)=>{
        console.log("oye hoye")
        main().catch(console.error);
    })
})
router.post('/adduser', (req, res) => {
    let ins = new catModel({ name: req.body.name, email: req.body.email, phone: req.body.age, pass: req.body.pass, cPass: req.body.cPass })
    ins.save((err) => {
        if (err) {
            console.log(err)
        }
        else console.log("catgory addedd")
    })
})
router.post('/orderdata', (req, res) => {
    console.log(req.body)
    let ins = new orderModel({ orders: req.body.orders, totalPrice: req.body.totalPrice})
    ins.save((err) => {
        if (err) {
            console.log(err)
        }
        else res.send(req.body)
    })
})
router.put("/addquan", (req, res) => {
    console.log("hey update")
    console.log(req.body.id+" iddddd")
    catModel.findOneAndUpdate({ _id: req.body.id },
        { orders: req.body.orders, totalPrice: req.body.totalPrice }, function (err, docs) {
            if (err) {
                console.log(err.message)
            }
            else {
                console.log("Updated Docs : ", docs);
            }
        });
})
router.put("/deletepro", (req, res) => {
    console.log("hey delete")
      console.log(req.body.cart)
    catModel.findOneAndUpdate({ _id: req.body.id },
        { orders: req.body.cart ,totalPrice:req.body.totalPrice}, function (err, docs) {
            if (err) {
                console.log(err.message)
            }
            else {
                console.log("Updated Docs : ", docs);
            }
        });
})
router.put('/updateorders', (req, res) => {
    console.log(req.body.orders)
    catModel.updateOne({ _id: req.body.id },
        { orders: req.body.orders }, function (err, docs) {
            if (err) {
                console.log(err.message)
            }
            else {
                console.log("Updated Docs : ", docs);
            }
        });
})
router.put('/updateuser', (req, res) => {
    console.log('hey')
    catModel.updateOne({ _id: req.body.id },
        { totalPrice: req.body.totalPrice }, function (err, docs) {
            if (err) {
                console.log(err.message)
            }
            else {
                console.log("Updated Docs : ", docs);
            }
        });

})
router.put('/updatecard', (req, res) => {
    console.log(req.body.id)
    catModel.findOneAndUpdate({ _id: req.body.id },
        { cardData: req.body.details }, function (err, docs) {
            if (err) {
                console.log(err.message)
            }
            else {
                console.log("Updated Docs : ", docs);
            }
        });
})
router.put('/checkout', (req, res) => {
    console.log(req.body.id)
    catModel.findOneAndUpdate({ _id: req.body.id },
        { orders: req.body.data, totalPrice: 0 }, function (err, docs) {
            if (err) {
                console.log(err.message)
            }
            else {
                console.log("Updated Docs : ", docs);
            }
        });
})
module.exports = router