const express = require('express')
const app = express()
const port = 8080
const mongoose = require('mongoose');
const DB_URL = "mongodb+srv://chairs:1234554321A@cluster0.1byu7ad.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const Schema = mongoose.Schema;


const aranzoSchema = new Schema({
    image:{ type: String, require:true},
    title:{ type: String, require:true},
    price:{ type: String, require:true}
    
  });

mongoose.connect(DB_URL).then(() => {
    console.log('Connected!')
}).catch(err=>{
    console.log(err)
})
app.listen(port, () => {
    console.log(`Link:http://localhost:${port}`)
})
const aranzoModel = mongoose.model("aranzo",aranzoSchema);

app.get("/api/chair",async (req, res) => {
    try {
        const chair = await aranzoModel.find({});

if (chair.length > 0) {
    res.status(200).send({message: "success", data: chair})
} else{
    res.status(204).send({
        message:"data is empty",
        data:null,
    })
}


    } catch (error) {
        res.status(500).send({message:error.message})
    }
} );
app.get("/api/chair/:id",async (req, res) => {
    const {id} = req.params;
    try {
        if ( chair) {
            res.status(200).send({
                massage: "success",
                data: chair,
            })
        } else {
            res.status(404).send({message: "not found"});
        }
    } catch (error) {
        res.status(500).send({message:error.message})
    }
} );
app.delete("/api/chair/:id",async (req, res) => {} );
app.post("/api/chair",async (req, res) => {} );

