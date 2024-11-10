const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const connection = require('./Database/UniConnect DBConfiguration.js');
const StudentRoute = require('./Routes/StudentsRoute.js')

// Dependencies
app.use(express.json());
app.use(cors())
app.use(bodyParser.json());

// Routes
app.use('/uniconnect', StudentRoute)

//CONNECTION
// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database as ID:', connection.threadId);
});


// Port Connections
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 