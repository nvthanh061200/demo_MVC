const code_xuly=require("../controller/test1.controller");
const express = require("express");
const routes = express.Router();

routes.post("/dangky",code_xuly.dang_ky);
routes.post("/dangnhap",code_xuly.dang_nhap);
routes.post("/dangxuat",code_xuly.dang_xuat);


module.exports=routes