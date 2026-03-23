const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, '../blog.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error("Erreur SQLite :", err.message);
    } else {
        console.log("Connecté à la base de données SQLite.");
        db.run(`CREATE TABLE IF NOT EXISTS articles (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titre TEXT NOT NULL,
            contenu TEXT,
            auteur TEXT NOT NULL,
            date TEXT,
            categorie TEXT,
            tags TEXT
        )`);
    }
});

module.exports = db;
