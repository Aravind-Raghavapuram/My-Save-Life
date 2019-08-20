var exp = require("express");
var app = exp();
const port = 3000;
var path = require("path");
var bodyparser = require("body-parser");
app.use(bodyparser.json());
var mongo = require("mongodb").MongoClient;
var mongoose=require('mongoose');
var dbo;

mongo.connect(
  "mongodb://Dileep0553:123Dileep@ds213183.mlab.com:13183/medicals",
  (err, db) => {
    if (err) throw err;
    dbo = db.db("medicals");
  }
);

app.post("/log/reg", (req, res) => {
  dbo.collection("register").insert(req.body, (err, data) => {
    console.log(data);
  });

});
app.post("/log", (req, res) => {
  dbo
    .collection("register")
    .find({ $and: [{ un: req.body.un, pwd: req.body.pwd }] })
    .toArray((err, data) => {
      if (err) throw err;
      if (data[0] != null) {
        res.send(data);
      } else {
        res.send(null);
      }
    });
});
app.post("/app/medicine", (req, res) => {
  dbo.collection("medicine").insert(req.body, (err, data) => {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
});
app.get("/app/medicine", (req, res) => {
  dbo.collection('register').find().toArray((err,data)=>{
      console.log(data);
      res.send(data);
  });
});

app.delete('/app/medicine/:id',(req,res)=>{
  var oid=mongoose.Types.ObjectId(req.params.id);
  console.log(oid);
  dbo.collection('medicine').remove({_id:oid},(err,data)=>{
    res.send(data);
  })

});
app.post("/app/company", (req, res) => {
  dbo.collection("company").insert(req.body, (err, data) => {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });
});
app.delete('/app/company/:id',(req,res)=>{
  var oid=mongoose.Types.ObjectId(req.params.id);
  dbo.collection("company").remove({_id:oid},(err,data)=>{
    if(err) throw err;
    res.send(data);
  })
})
app.get("/app/co", (req, res) => {
  dbo.collection('company').find().toArray((err,data)=>{
      res.send(data);
  });
});

app.put('/app/company',(req,res)=>{
  console.log(req.body);
  var oid=mongoose.Types.ObjectId(req.body._id);
  dbo.collection('company').update({_id:oid},{$set:{cname:req.body.cname,clocation:req.body.clocation,cemail:req.body.cemail,cnumber:req.body.cnumber}},(err,data)=>{
    if(err) throw err;
    res.send(data);
  })
});

app.put('/app/medicine',(req,res)=>{
  console.log(req.body);
  var oid=mongoose.Types.ObjectId(req.body._id);
  dbo.collection('medicine').update({_id:oid},{$set:{company:req.body.company,name:req.body.name,price:req.body.price,quantity:req.body.quantity,type:req.body.type,usage:req.body.usage}},(err,data)=>{
    if(err) throw err;
    res.send(data);
  })
});

app.put('/app/newsale',(req,res)=>{
  var oid=mongoose.Types.ObjectId(req.body._id);
  dbo.collection('medicine').update({_id:oid},{$set:{quantity:req.body.quantity}},(err,data)=>{
    if(err) throw err;
    res.send(data);
  })
})

app.use(exp.static(path.join(__dirname, "dist/pro")));
app.listen(3000, () => {
  console.log(`server staretd with ${port}`);
});
