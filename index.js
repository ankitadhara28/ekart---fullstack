let express = require("express");
let cors = require("cors");


let app = express();
app.use(cors());

app.get('/loyalty-points',(req,res)=>
{
  let purchaseAmount = parseFloat(req.query.purchaseAmount);
  let result = purchaseAmount * loyaltyRate;
  res.send(result.toString());
})

app.get('/shipping-cost',(req,res)=>
{
  let weight = parseFloat(req.query.weight);
  let distance = parseFloat(req.query.distance);
  let result = weight * distance * 0.1;
  res.send(result.toString());
})

app.get('/estimate-delivery',(req,res)=>
{
  let shippingMethod = req.query.shippingMethod;
  let distance = parseFloat(req.query.distance);
  let result;
  if(shippingMethod=='standard')
  {
    result = distance/50;
  }
  else
  {
    result = distance/100;
  }
  res.send(result.toString());
})

app.get('/calculate-tax',(req,res)=>
{
  let cartTotal = parseFloat(req.query.cartTotal);
  let result = ((taxRate*cartTotal)/100);
  res.send(result.toString());
})

app.get('/membership-discount',(req,res)=>
{
  let isMember = req.query.isMember==='true';
  let cartTotal = parseFloat(req.query.cartTotal);
  let result;
  let result2;
  if(isMember)
  {
    result2 = cartTotal - (cartTotal * discountPercentage/100);
     result = 'discount percentage is applicable: '+ result2;
  }
  else
  {
    result = 'No discount is applied';
  }
  res.send(result);
})

app.get('/cart-total',(req,res)=>
{
  let newItemPrice = parseFloat(req.query.newItemPrice);
  let cartTotal = parseFloat(req.query.cartTotal);
  let result = newItemPrice + cartTotal;
  res.send(result.toString());
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

//server-side values
let taxRate = 5; //5%
let discountPercentage = 10; //10%
let loyaltyRate = 2; //2 points per $1