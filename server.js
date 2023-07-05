const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sample data store
let students = [];

// Serve the registration form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle student registration
app.post('/register', (req, res) => {
  const { firstName, lastName, mobileNumber, email } = req.body;

  // Perform any additional validations here

  // Add student to data store
  students.push({ firstName, lastName, mobileNumber, email });

  res.send('Registration successful!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
