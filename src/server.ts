import express from "express";
const app = express();
const port = 5000;

app.get("/", (req,res) => {
    res.send("Hello my name is oussama nabil start building a new application with docker !");
});

app.listen(port, () => {
    console.log("Server running on port" +port);
})
