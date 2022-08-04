const sqlite3 = require("sqlite3").verbose();
const axios = require("axios");

const db = new sqlite3.Database("./mock.db", sqlite3.OPEN_READWRITE, (err) => {
    if(err) return console.error(err.message);

    console.log('connection successful ---- ');
});

// axios
//   .get('')
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     if (err) return console.error(err.message);
//   });

// db.run('CREATE TABLE users(first_name, last_name, username, password, email, id)');

// const sql = `INSERT INTO users(first_name, last_name, username, password, email, id) VALUES(?,?,?,?,?,?)`;

// db.run(sql,['mike','codes','mike_codes','123','mike_codes@gmail.com', 1], (err)=>{
//     if (err) return console.error(err.message);

//     console.log('A new row has been created ...');
// });

// const sql = `select * from users`;

// db.all(sql, [], (err,rows)=>{
//     if (err) return console.error(err.message);

//     rows.forEach(row =>{
//         console.log(row);
//     });
// });

db.close((err)=>{
    if (err) return console.log(err.message);
});