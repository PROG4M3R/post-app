const express = require("express");
const multer = require("multer");
const uploadFile = require("./services/storage.service");
const postModel = require("./models/post.model"); 
const cors = require("cors"); // to allow request from frontend to backend

const app = express();

app.use(express.json());
app.use(cors());

const upload = multer({storage: multer.memoryStorage()}); // multer setup to handle file upload in memory

app.post("/", upload.single("image"), async (req ,res)=>{
    
    // image kit returns url of image after upload
    const result = await uploadFile(req.file.buffer);
    
    
    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    })

    return res.status(201).json({
        message: "post created",
        post
    })
})


app.get("/posts",async (req,res)=>{
    const posts = await postModel.find();

    return res.status(200).json({
        message: "posts fetched succesfully",
        posts
    })
})

module.exports = app;