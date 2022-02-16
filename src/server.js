const app = require("./index")

const connect = require("./configs/db");



app.listen(3000, async () => {

    try {
        
     await connect()
 
     console.log("hello port 3000 guys.")
 
 
    } catch (e) {
 
     console.log(e.message);
        
    }
 })