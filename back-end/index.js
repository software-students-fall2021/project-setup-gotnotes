require('dotenv').config()

const express = require('express')
const fileUpload = require('express-fileupload')
const contentDisposition = require('content-disposition')
const cors = require('cors');

const path = require('path')

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const mime = require('mime-types')

const PORT = process.env.PORT
const JWT_SECRET = process.env.JWT_SECRET

const app = express()
app.use(cors())
app.use(fileUpload())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/unis', (req, res) => {
    console.log(req);
    res.send('Unis Request Received')
})

app.get('/unis/:uni', (req, res) => {
    console.log(req.params);
    res.send(req.params.uni + ' Request Received')
})

//this post is for subscribing to a class
app.post('/unis/:uni', (req,res) => {
    console.log(req.params);
    res.send(req.body.courseID + ' Request Received')
})


app.get('/unis/:uni/:course', (req, res) => {
    console.log(req.params);
    res.send(req.params.course + ' Request Received')
})

//this post is for liking, disliking a file
app.post('/unis/:uni/:course', (req, res) => {

})


app.get('/unis/:uni/:course/:file', (req, res) => {
    console.log(req.params);
    res.send(req.params.file + ' Request Received')
})
//this post is for adding comments to a file, liking, and disliking
app.post('/unis/:uni/:course/:file', (req, res) => {

})

app.get('/chats', (req, res) => {
    console.log(req);
    res.send('Chat Request Received')
})

app.get('/chats/:chatID', (req, res) => {
    console.log(req.params);
    res.send(req.params.chatID + ' Request Received')
})

app.get('/account', (req, res) => {
    console.log(req);
    res.send('Account Request Received')
})

app.get('/admin', (req, res) => {
    console.log(req);
    res.send('Admin Request Received')
})

app.post('/admin', (req, res) => {

})

app.get('/addFile', (req, res) => {
    console.log(req);
    res.send('AddFile Request Received')
})
app.post('/addFile', (req, res) => {

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