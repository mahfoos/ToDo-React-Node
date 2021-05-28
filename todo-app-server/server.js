const express = require('express')
const {v4 : uuidv4} = require('uuid');
const app = express()
const cors = require('cors');
app.use(cors());

//Middleare for data on post request
app.use(express.json({extended : false}));

const todos = [
    {
        message : "wash car...",
    },
   
]

app.get("/", (req,res) => {
    res.status(200).json(todos)
});

app.post("/", (req, res) => {
    const newTodo = {
        message: req.body.message,
    }

    todos.push(newTodo)
    res.status(201).json(todos);
})

const PORT = process.env.PORT || 5001
app.listen(PORT, () => {
    console.log(`Server running on port : ${PORT}`)
});


