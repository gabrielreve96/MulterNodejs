const express=require("express");
const multer = require("multer");




const app = express()
////Destino de archivo
const upload = multer({dest:"/Upload"})

app.use(express.json())
app.use(express.urlencoded({extended:true}))
////ruta para subir la imagen
app.post("/" , upload.single('img') , (req,res)=>{
 
    const datosImg=req.file;
    console.log(datosImg)
    res.send("Viendo datos")

})

app.listen(4000 , () => console.log("Servidor iniciado"))
