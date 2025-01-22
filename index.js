// const fs = require("fs") //filesystem
// fs.writeFile("./a.txt", "Hello from global", (err) = > {
//     console.log("success");
// })


// const fs = require("fs"); //filesystem
// fs.readFile("./a.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log("err");
//     } else {
//         console.log("data");
//     }
// })


// const fs = require("fs") //filesystem
// const username = "vani";
// const email = "vani@gmail.com"
// fs.writeFile("./a.text", `${username} and ${email}`, (err) => {
//     console.log("success ");
// })
// fs.readFile("./a.text", "utf-8", (err, data) => {
//     console.log(data);
// })

// Expressjs CODE

// const express = require("express");
// const app = express();
//node --watch index.js
//get,post,put,delete
// app.get("/", (req, res) => {
//     res.send("server responded successfully")
// })
// app.post("/users", (req, res) => {
//     res.send("from post route")
// })
// app.post("/", (req, res) => {
//     const token = req.headers.token
//     res.send(`${token}`);
// })
// app.use(express.json())
// app.post("/", (req, res) => {
//     const name = req.body.name
//     res.send(`${name}`);
// })

// app.get("/login", (req, res) => {
//         res.send("logged in successfully")
//     })
//app.get(path,callback)
// app.delete("/delete", (req, res) => {
//     res.send("delete")
// })
// app.get("/pages", (req, res) => {
//     const pageNumber = req.query.pageNumber;
//     res.send(pageNumber);
// })
// app.get("/pages", (req, res) => {
//     const { username, email } = req.query;
//     res.send(`${username} and ${email}`);
// })

// app.get("/pages", (req, res) => {
//     const name = req.query.username;
//     const email = req.query.email;
//     res.send(`${username} and ${email}`);
// })

// const express = require("express");
// const app = express();
// const fs = require("fs")
// app.use(express.json()); //built in middleware


// app.post("/users", (req, res) => {
//     const name = req.body.name
//     fs.writeFile("./a.txt", name, (err) => {

//         fs.readFile("./a.txt", "utf-8", (err, data) => {
//             if (data === name) {
//                 res.send("success");
//             } else {
//                 res.send("logging error");
//             }
//         })
//     })

// })
// app.post("/users", (req, res) => {
//     const username = req.body.username;

//     if (username === "vani") {
//         res.send("success in users")
//     } else {
//         res.send("something went wrong")
//     }
// })
// app.post("/login", (req, res) => {
//     const username = req.body.username;
//     if (username === "vani") {
//         res.send("success in login")
//     } else {
//         res.send("something went wrong")
//     }
// })
// app.post("/signup", (req, res) => {
//     const username = req.body.username;
//     if (username === "vani") {
//         res.send("success in signup")
//     } else {
//         res.send("something went wrong")
//     }
// })

// function sampleMiddlewareUsername(req, res, next) {
//     const username = req.body.username;
//     if (username === "vani") {
//         next()
//     } else {
//         res.send("something went wrong")
//     }
// }

// function middlewareIPAddress(req, res, next) {
//     const token = req.headers.token;
//     if (token === "123456789") {
//         next()
//     } else {
//         res.send("something went wrong")
//     }
// }
// app.post("/users", sampleMiddlewareUsername, middlewareIPAddress, (req, res) => {
//     res.send("success in users")
// })




// app.post("/login", (req, res) => {
//     const username = req.body.username;
//     if (username === "vani") {
//         res.send("success in login")
//     } else {
//         res.send("something went wrong")
//     }
// })
// app.post("/signup", (req, res) => {
//     const username = req.body.username;
//     if (username === "vani") {
//         res.send("success in signup")
//     } else {
//         res.send("something went wrong")
//     }
// })

// app.listen(3000, () => {
//     console.log("server  started");
// })


// app.set("view engine", "ejs")
// app.use(express.static("views"));
// app.get("/", (req, res) => {
//     res.render("home")
// })


// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// app.use(express.json())
// mongoose.connect("mongodb://localhost:27017/globalDB")
//     .then(() => { console.log("db connected") })
//     .catch(() => { console.log("db not connected") })

// const mySchema = mongoose.Schema({
//     user: String,

// })

// const user = mongoose.model("user", mySchema);
// app.post("/", (req, res) => {
//     const username = req.body.username;
//     const details = {
//         user: username
//     }
//     const userDetails = new user(details);
//     userDetails.save()
//         .then(() => {
//             res.send("something went wrong")
//         })
// })

// app.listen(3000, () => {
//     console.log("started server")
// }) p.listen(3000, () => {
//     console.log("started server")
// })


//db to backend connection
// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// app.use(express.json())
// mongoose.connect("mongodb://localhost:27017/globalDB")
//     .then(() => { console.log("db connected") })
//     .catch(() => { console.log("db not connected") })

// const mySchema = mongoose.Schema({
//     user: String,
//     email: String,
// })

// const user = mongoose.model("user", mySchema);
// app.post("/login", (req, res) => {
//     const username = req.body.username;
//     const email = req.body.email;
//     const details = {
//         user: username,
//         email: email,
//     }
//     const userDetails = new user(details);
//     userDetails.save()
//         .then(() => {
//             res.send("success")
//         })
//         .catch(() => {
//             res.send("something went wrong")
//         })
// })

// app.listen(3000, () => {
//     console.log("started server")
// })


//db to backend connection
// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// app.use(express.json())
// mongoose.connect("mongodb://localhost:27017/globalDB")
//     .then(() => { console.log("db connected") })
//     .catch(() => { console.log("db not connected") })

// const mySchema = mongoose.Schema({
//     user: String,
//     email: String,
// })

// const user = mongoose.model("user", mySchema);
// app.get("/", (req, res) => {
//     const username = req.query.username;
//     const email = req.body.email;

//     const details = {
//         user: username,
//         email: email
//     }
//     const userDetails = new user(details);
//     userDetails.save()
//         .then(() => {
//             res.send("success")
//         })
//         .catch(() => {
//             res.send("something went wrong")
//         })
// })


// app.listen(3000, () => {
//         console.log("started server")
//     })


// app.post("/", async(req, res) => {
//     const username = req.body.username;
//     const email = req.body.email;


//     const details = {
//         user: username,
//     }
//     const userDetails = new user(details);
//     const response = await userDetails.save()
//     req.send(`this is it $ {
//         response
//     }`)
//     userDetails.save()
//         .then(() => {
//             res.send("success")
//         })
//         .catch(() => {
//             res.send("something went wrong")
//         })
// })


// //db to backend connection
// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const cors = require("cors")
// app.use(express.json())
// app.use(cors())
// mongoose.connect("mongodb://localhost:27017/globalDB")
//     .then(() => { console.log("db connected") })
//     .catch(() => { console.log("db not connected") })

// const mySchema = new mongoose.Schema({
//     randomName: String,
// })

// const user = mongoose.model("user", mySchema)
// app.post("/login", async(req, res) => {
//     const randomName = req.body.randomName;

//     const details = {
//         randomName: randomName
//     }
//     const userDetails = new user(details);
//     const response = await userDetails.save()
//     res.send("success");
// })

// // app.get("/", (req, res) => {
// //     res.send("hello from backend")
// // })
// app.listen(3000, () => {
//     console.log("started server")
// })

// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const cors = require("cors")
// const jwt = require("jsonwebtoken")

// app.use(express.json());
// app.use(cors());

// mongoose.connect("mongodb://localhost:27017/globalDB")
//     .then(() => (console.log("db connected")))
//     .catch(() => (console.log("db not connected")))


// const mySchema = mongoose.Schema({
//     name: String,
//     pwd: String
// })
// const user = mongoose.model("user", mySchema);


// app.post("/", (req, res) => {
// res.json({ success: true })
// })
//     const name = req.body.name;
//     const pwd = req.body.pwd;
//     const skey = "vani";
//     const token = jwt.sign(name, skey)
//     const details = {
//         name: name,
//         pwd: token
//     }
//     const userdetails = new user(details)
//     userdetails.save()
//         .then(() => { res.send("success") })
//         .catch(() => { res.send("wrong") })
// })

// app.listen(3000, () => {
//     console.log("Server started");
// })


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/globalDB")
    .then(() => (console.log("db connected")))
    .catch(() => (console.log("db not connected")))

const userSchema = new mongoose.Schema({
    name: String,
    pwd: String
});

const User = mongoose.model("user", userSchema);

app.post("/", async(req, res) => {
    const { name } = req.body;

    // try {
    //     const user = await User.findOne({ name });
        if (user) {
            res.json({ success: true });
        } else {
            res.json({ success: false });
        }
    // } catch (error) {
    //     console.log("Error fetching user");
    // }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
