// Import the mysql2 package
const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',        // Your database host
    user: 'root',    // Your database username
    password: '', // Your database password
    database: 'uniconnect' // Your database name
});

module.exports = connection;