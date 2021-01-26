const express=require('express');
const app=express();
const post=3000;

const routes=require("./route/index.route");
routes(app);
app.listen(post,function(){
    console.log("listing: ahi "+post);
});