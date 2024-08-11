const express=require("express");
const app=express();

// app.use((req,res,next)=>{
//     console.log("Hi I am middleware");
//     //res.send("Middleware finished");
//     next();
// });

// app.use((req,res,next)=>{
//     console.log("Hi I am 2nd middleware");
//     //res.send("Middleware finished");
//     next();
// });


// app.use((req,res,next)=>{
//     req.time=new Date(Date.now()).toString();
//     console.log(req.method,req.hostname,req.path,req.time);

//     next();
// });

// app.use("/random",()=>{
//     console.log("I am random");
//     next();
// });

// app.use("/api",(req,res,next)=>{
//     let {token}=req.query;
//     if(token=== "giveaccess"){
//         next();
//     }
//     res.send("Access denied");
// });

const check=(req,res,next)=>{
    let {token}=req.query;
    if(token=== "giveaccess"){
        next();
    }
    //res.send("Access denied");
    throw new Error("ACCESS DENIED");
};

app.get("/api",check,(req,res)=>{
    res.send("data");
});

app.get("/",(req,res)=>{
    res.send("Hi I am root");
});

app.get("/random",(req,res)=>{
    res.send("This a random page");
});

app.listen(3000,()=>{
    console.log("App listening on port 3000");
});


app.use((req,res)=>{
    res.send("Page not found");
});