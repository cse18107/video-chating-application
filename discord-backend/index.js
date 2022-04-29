const express = require('express');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();


const authRoutes = require('./routes/authRoutes');
const friendInvitationRoutes = require('./routes/friendInvitationRoutes.js');
const socketServer = require('./socketServer');


const PORT = process.env.PORT || process.env.API_PORT;

const app = express();
app.use(express.json());
app.use(cors());

app.use('/',(req,res)=>{
    res.status(200).json({
        message:'working'
    })
})

app.use('/api/auth',authRoutes);
app.use('/api/friend-invitation',friendInvitationRoutes);

const server = http.createServer(app);
socketServer.registerSocketServer(server);


mongoose.connect(process.env.MONGO_URI).then(()=>{
    server.listen(PORT,()=>{
        console.log(`server is listening on ${PORT}`)
    });
    console.log('database is successfully connected');
}).catch((error)=>{
    console.log(error.message);
});
