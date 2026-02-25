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
app.use((req,res,next)=>{
   console.log(req);
   next();
});
app.get("/",(req,res)=>{
   res.send("hi i am root");
})
 app.listen(port,()=>{
    console.log("the app is listining");
 });
 
//using next middleware
//if current middleware function does not end the request response cycle it must call next to pass control
