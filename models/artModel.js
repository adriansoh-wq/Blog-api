const db = require('../config/db');

const Article = {
    create: (article, callback) => {
        const sql = `INSERT INTO articles (titre, contenu, auteur, date, categorie, tags) VALUES (?, ?, ?, ?, ?, ?)`;
        db.run(sql, [article.titre, article.contenu, article.auteur, article.date, article.categorie, article.tags], function(err) {
            callback(err, this ? this.lastID : null);
        });
    },
    findAll: (filters, callback) => {
        let sql = `SELECT * FROM articles WHERE 1=1`;
        const params = [];
        if (filters.categorie) {
            sql += ` AND categorie = ?`;
            params.push(filters.categorie);
        }
        if (filters.date) {
            sql += ` AND date = ?`;
            params.push(filters.date);
        }
        db.all(sql, params, callback);
    },
    findById: (id, callback) => {
        db.get(`SELECT * FROM articles WHERE id = ?`, [id], callback);
    },
    update: (id, article, callback) => {
        const sql = `UPDATE articles SET titre = COALESCE(?, titre), contenu = COALESCE(?, contenu), categorie = COALESCE(?, categorie), tags = COALESCE(?, tags) WHERE id = ?`;
        db.run(sql, [article.titre, article.contenu, article.categorie, article.tags, id], function(err) {
            callback(err, this ? this.changes : 0);
        });
    },
    delete: (id, callback) => {
        db.run(`DELETE FROM articles WHERE id = ?`, [id], function(err) {
            callback(err, this ? this.changes : 0);
        });
    },
    search: (query, callback) => {
        const sql = `SELECT * FROM articles WHERE titre LIKE ? OR contenu LIKE ?`;
        const searchTerm = `%${query}%`;
        db.all(sql, [searchTerm, searchTerm], callback);
    }
};

module.exports = Article;
