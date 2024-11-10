// res.status(200).send(index, password);

//     First, retrieve the user from the database based on the index number
//     db.query(
//         'SELECT * FROM students WHERE IndexNumber = ?',
//         [index],
//         (err, results) => {
//             if (err) {
//                 console.error(err);
//                 return res.status(500).json({ error: 'Database query error' });
//             }

//             // Check if a user was found
//             if (results.length === 0) {
//                 return res.status(401).json({ error: 'Invalid credentials' });
//             }

//             // Get the hashed password from the database
//             const user = results[0];
//             const hashedPassword = user.password; // Assuming 'password' is the column name
//             res.json(hashedPassword)
          
//             bcrypt.compare(password, hashedPassword, (err, match) => {
//                 if (err) {
//                     console.error(err);
//                     return res.status(500).json({ error: 'Error comparing passwords' });
//                 }

//                 if (match) {
//                     res.json({ message: 'Login successful', student: user });
//                 } else {
//                     // Passwords do not match
//                     res.status(401).json({ error: 'Invalid credentials' });
//                 }
//             });
//         }
//     );