require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const PORT = process.env.PORT || 3500;

//connect Database
connectDB();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'), {
    setHeaders: (res, path, stat) => {
        if (path.endsWith('.js')) {
          res.set('Content-Type', 'application/javascript');
        }
    }
}));
app.use('/', require('./middleware/requests'));


app.use('/login', require('./routes/api/login'));
app.use('/register', require('./routes/api/register'));
app.use('/refresh', require('./routes/api/refresh'));
app.use('/profile', require('./routes/api/protected'));
app.use('/retrieveData', require('./routes/api/retrieveData'));
app.use('/logout', require('./routes/api/logout'));

mongoose.connection.once('open', () => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
});