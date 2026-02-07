import express from "express"

const app = express();

app.use(express.static('public'));

app.get("/hii", (req, res) => {
  res.send("Hello Candy Store");
});

app.listen(3000, ()=>{
    console.log("Server started");
})