module.exports = {


    dang_ky: (req, res) => {
        res.json("30day");
    },
    dang_nhap: (req, res) => {
        res.json({
            message: "xsmb ngay gan nhat",
        });
    },
    dang_xuat: (req, res) => {
        res.json({
            message: "XXXX",
            ketqua:" xmsb tim kiem theo ngay"
        })
    }

    // app.get("/test1",(req,res)=>{
    //     
    // })
    // app.post("/test1",(req,res)=>{
    //     res.json({
    //         message: "test1",
    //     });
    // })
}