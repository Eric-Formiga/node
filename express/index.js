const express = require('express')
const path = require('path')

const app = express()

app.use("/meusite", express.static(path.join(__dirname, 'client')))


app.get("/", (req, res)=>{
  // res.set("content-type", "text/html")

  res.send("<h1>visão rapaziada!!</h1>")
})

app.post("/", (req, res)=>{

  res.send("<h1>visão rapaziada do post !!</h1>")
})

app.put("/", (req, res)=>{

  res.send("<h1>visão rapaziada do PUT !!</h1>")
})

app.delete("/", (req, res)=>{

  res.send("<h1>visão rapaziada do DELETE !!</h1>")
})

const PORT = 3000

app.listen(PORT, ()=>{
  console.log(`Server running on port: ${PORT}`)
})
