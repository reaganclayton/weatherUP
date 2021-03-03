const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
// Loading env
dotenv.config({ path: './config.env' });

const app = express();

// Dev log
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(cors());
// Parse as json
app.use(express.json());

// Result routes
app.use('/result', require('./routes/result'));

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});