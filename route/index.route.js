const test1_routes=require("../route/test1.route");

function route(app){
    app.use("/account",test1_routes)
}
module.exports=route