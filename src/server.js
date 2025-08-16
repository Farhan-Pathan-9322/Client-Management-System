const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'clientflow'
});

 db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

app.post('/register', (req, res) => {
    const { name, email, address, password } = req.body;
    const sql = 'INSERT INTO users (name, email, address, password) VALUES (?, ?, ?, ?)';
    db.query(sql, [name, email, address, password], (err, result) => {
        if (err) throw err;
        res.send({ message: 'User registered successfully!' });
        res.redirect('/home');
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
    db.query(sql, [email, password], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send({ message: 'Login successful!', user: result[0] });
        } else {
            res.send({ message: 'Invalid credentials!' });
        }
    });
});

app.post('/schedule', (req, res) => {
    const { userId, topic, numberOfPeople, startTime, endTime, date } = req.body;
    const sql = 'INSERT INTO meetings (userId, topic, numberOfPeople, startTime, endTime, date) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [userId, topic, numberOfPeople, startTime, endTime, date], (err, result) => {
        if (err) throw err;
        res.send({ message: 'Meeting scheduled successfully!' });
    });
});

app.get('/meetings/:userId', (req, res) => {
    const { userId } = req.params;
    const sql = 'SELECT * FROM meetings WHERE userId = ?';
    db.query(sql, [userId], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

app.delete('/deleteMeeting/:id',(req,res)=>{
    const id=req.params.id;
    const sql='delete from meetings where id=?'; 
    db.query(sql,[id],(err,result)=>{
     if(err){
         console.error('Error in deleting the meeting',err);
         res.status(500).json({error:'An error occured '});
         } 
         else{
             res.status(200).json({message:'Meeting deleted Successfully..'});
         }  
    });
 });


app.listen(5000, () => {
    console.log('Server running on port 5000');
});


