let express=require("express");
let app=express();
let port=5050;

//using next middle ware
/*app.use((req,res,
   next)=>{
   console.log("hi,i am 1st middleware");
   next();
});
app.use((req,res,next)=>{
   console.log("hi,i am 2st middleware");
   next();//it will to go for next 
});*/
//utility middleware
//it acts as logger:hwlps to print useful important imformation
/*app.use((req,res,next)=>{
   let time=new Date(Date.now());
   console.log(req.time,req.path,req.method);
   next();
});*/
app.get("/",(req,res)=>{
   res.send("hi i am root");
})
/*
//created a accestoken api 
app.use("/api",(req,res,next)=>{
   let{token}=req.query;
   if(token==="giveacess"){
      res.send("access provided");
   next();
   }
   console.log("access dined");
   

});*/
//USING OF MULTIPLE MIDDLEWARE
/*
let check= (req,res,next)=>{
   let{token}=req.query;
   if(token==="giveacess"){
      res.send("access provided");
   next();
   }
   console.log("access dined");
   

};
app.use("/api",check,(req,res)=>{
   res.send("it passed though check token");
});
//404 page
app.use((req,res)=>{
   res.send("page not found");
});
*/
//err middleware
app.get("/err", (req, res, next) => {
    try {
        abcd = abcd;   // this will throw error
    } catch (err) {
        next(err);     // pass error to error handler
    }
});

app.use((err, req, res, next) => {
    console.log("Error:", err.message);
    res.status(500).send("Something went wrong!",{w});
});

app.listen(port, () => {
    console.log("The app is listening");
});
 
//using next middleware
//if current middleware function does not end the request response cycle it must call next to pass control
