require('dotenv').config()

const express = require('express')
const fileUpload = require('express-fileupload')

const cors = require('cors');

const path = require('path')

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const PORT = process.env.PORT
const JWT_SECRET = process.env.JWT_SECRET

const {
    accountRouter,
    chatRouter,
    searchRouter
} = require('./Routes')

const app = express()



//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = process.env.DB_URL;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



app.use(cors())
app.use(fileUpload())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/unis', searchRouter.unisRouter)
app.use('/unis/:uni', searchRouter.coursesRouter)
app.use('/unis/:uni/:course', searchRouter.filesRouter)
app.use('/unis/:uni/:course/:file', searchRouter.fileRouter)
app.use('/chats', chatRouter)
app.use('/account', accountRouter)


app.get('/admin', (req, res) => {
    console.log(req);
    res.send('Admin Request Received')
})

app.post('/admin', (req, res) => {

})


// app.get('/signup', (req, res) => {
//     // let token = jwt.sign(
//     //     { count: 0 },
//     //     process.env.JWT_SECRET,
//     //     { expiresIn: '5m'}
//     // )
//     // <input type='hidden' name='jwt' value='${token}'/>
//     res.send(`<html><body><form action='http://localhost:${PORT}/signup' method='post' ><label for='email'>Email</label><input type='email' name='email'/><label for='password'>Password</label><input type='password' name='password' /><input type='submit' value='Login' /></form></body></html>`)
// })

// app.post('/signup', async (req, res) => {
//     if(req.body.email && req.body.password){
//         try {
//             //const err = Validate(email, password);
//             //console.log("validation err: ", err)
//             //if (err) throw new Error(err)

//             const email = req.body.email;
//             const password = req.body.password;


//             const newUser = await db('users').insert({ email: email, pass: await bcrypt.hash(password, 10) })

//             const token = jwt.sign(
//                 { id: newUser.id, email: newUser.email },
//                 process.env.JWT_SECRET,
//                 { expiresIn: '30m' }
//             )


//                 res.json([{token: `Bearer ${token}`}])

//         } catch (error) {
//             if (error.message.includes("Duplicate entry")) {
//                 error.message = "A user with that email already exists"
//             }
//             res.json([{error: error.message}])
//         }

//     }else{
//         res.json([{error: 'please enter all fields'}])
//     }
// })



app.get('/login', (req, res) => {
    // let token = jwt.sign(
    //     { count: 0 },
    //     process.env.JWT_SECRET,
    //     { expiresIn: '5m'}
    // )
    // <input type='hidden' name='jwt' value='${token}'/>
    res.send(`<html><body><form action='http://localhost:${PORT}/login' method='post' ><label for='email'>Email</label><input type='email' name='email'/><label for='password'>Password</label><input type='password' name='password' /><input type='submit' value='Login' /></form></body></html>`)
})

app.post('/login', async (req, res) => {
    console.log(req.body)

    if (!req.body.email) return

    console.log("here")

    const user = await db.select('*').from('users').where('email', '=', req.body.email).catch(err => console.log(err))
    if (!user[0]) {
        res.json([{ error: 'No such user' }])
        return
    }

    const isValid = await bcrypt.compare(req.body.password, user[0].pass)
    if (!isValid) {
        res.json([{ error: 'Incorrect password' }])
        return
    }

    const token = jwt.sign(
        { id: user[0].id, email: user[0].email },
        process.env.JWT_SECRET,
        { expiresIn: '30m' }
    )
    console.log('here2')
    res.json([{
        token: `Bearer ${token}`
    }])

})




app.listen(PORT, () => {
    console.log(`Server ready at ${process.env.PUBLIC_URL}:${PORT}`);
})