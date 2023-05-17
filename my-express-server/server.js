const express = require('express')
const app = express()
//npx nodemon index.js

app.get("/", function(request,response) {

response.send("<h1>Hello World</h1>")

})

app.get("/contact", function(request,response) {

    response.send("Contact me at: xxxx")
    
    })

app.get("/about", function(request,response) {

    response.send("I'm Anil")
    
    })

app.listen(3000, function() {

    console.log("Server started on port 3000")
})