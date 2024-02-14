const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const path = require('path')
const connectDB = require('./utils/db_connect')

const UserRoutes = require('./routes/UserRoutes')


dotenv.config()
connectDB();


const app = express();
app.use(cors());
app.use(express.json());

app.get('/api', (req, res)=>{
    return res.json({
        success: true,
        message: "API is running successfully."
    })
})

app.use('/api/users', UserRoutes );

const server = app.listen(process.env.PORT,"0.0.0.0",
    console.log(
        `Server started at: http://localhost:${process.env.PORT || 5000}`
      ) )
