const db = require('../Database/UniConnect DBConfiguration');
const bcrypt = require('bcrypt');


// Controllers
const getAllStudents = (req, res) => {
    res.send("All Students Retrieved");
};

const getStudentId = (req, res) => {
    res.send("Student with ID retrieved");
};

const index = (req, res) => {
    const indexNumber = req.body.Index;
    const studentPassword = req.body.Password;
    // console.log("This is index number", indexNumber);

    db.query(
        'SELECT * FROM studentrecords WHERE IndexNumber = ?',
        [indexNumber], 
        (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Database query error' });
            }

            // Check if a user was found
            if (results.length === 0) {
                console.log('No user found with the given index number');
                return res.status(404).json({ error: 'User not found' });
            }
            // Get the hashed password from the database
            const user = results[0];
            // console.log("This is user: ", user);
            if(studentPassword === user.Password){
                res.json({ message: 'Login successful', student: user });
            }else{
                res.status(401).json({ error: 'Check Password credentials' });
            } 
            // Assuming 'Password' is the column name
            
            // bcrypt.compare(studentPassword, hashedPassword, (err, match) => {
            //     if (err) {
            //         console.error(err);
            //         return res.status(500).json({ error: 'Error comparing passwords' });
            //     }

            //     if (match) {
            //         res.json({ message: 'Login successful', student: user });
                    
            //     } else {
            //         // Passwords do not match
            //         res.status(401).json({ error: 'Check Password credentials' });
            //     }
            // });
        }
    );
};

module.exports = { getAllStudents, getStudentId, index };