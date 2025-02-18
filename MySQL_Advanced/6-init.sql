// 6-init.js

const mysql = require('mysql');

// Krijo lidhjen me bazën e të dhënave
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'yourpassword', // Vendosni fjalëkalimin tuaj
    database: 'yourdatabase'  // Vendosni emrin e bazës së të dhënave
});

// Lidhja me bazën e të dhënave
connection.connect(err => {
    if (err) {
        console.error('Lidhja me bazën e të dhënave dështoi: ' + err.stack);
        return;
    }
    console.log('Lidhja me bazën e të dhënave u krijua me sukses');
});

// Thirr procedurën AddBonusTest për të shtuar bonusin për një përdorues
const user_id = 1; // Përdoruesi
const project_name = 'Python is cool'; // Emri i projektit
const bonus = 100; // Bonus

const query = `CALL AddBonusTest(?, ?, ?)`;
connection.query(query, [user_id, project_name, bonus], (err, results) => {
    if (err) {
        console.error('Ndodhi një gabim gjatë ekzekutimit të procedurës: ' + err.message);
        return;
    }
    console.log('Bonus u shtua me sukses për përdoruesin ' + user_id + ' në projektin ' + project_name);
});

// Mbylle lidhjen me bazën e të dhënave
connection.end();
