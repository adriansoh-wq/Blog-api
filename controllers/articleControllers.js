const Article = require('../models/articleModel');

exports.createArticle = (req, res) => {
    const { titre, contenu, auteur, date, categorie, tags } = req.body;
    if (!titre || !auteur) {
        return res.status(400).json({ erreur: "Le titre et l'auteur sont obligatoires." });
    }
    const newArticle = { titre, contenu, auteur, date, categorie, tags: JSON.stringify(tags) };
   
    Article.create(newArticle, (err, id) => {
        if (err) return res.status(500).json({ erreur: "Erreur serveur" });
        res.status(201).json({ message: "Article créé avec succès", id: id });
    });
};

exports.getAllArticles = (req, res) => {
    const filters = { categorie: req.query.categorie, date: req.query.date };
    Article.findAll(filters, (err, rows) => {
        if (err) return res.status(500).json({ erreur: "Erreur serveur" });
        res.status(200).json({ articles: rows });
    });
};

exports.searchArticles = (req, res) => {
    const { query } = req.query;
    if (!query) return res.status(400).json({ erreur: "Paramètre manquant" });
    Article.search(query, (err, rows) => {
        if (err) return res.status(500).json({ erreur: "Erreur serveur" });
        res.status(200).json({ articles: rows });
    });
};

exports.getArticleById = (req, res) => {
    Article.findById(req.params.id, (err, row) => {
        if (err) return res.status(500).json({ erreur: "Erreur serveur" });
        if (!row) return res.status(404).json({ erreur: "Article non trouvé" });
        res.status(200).json(row);
    });
};

exports.updateArticle = (req, res) => {
    const { titre, contenu, categorie, tags } = req.body;
    const updateData = { titre, contenu, categorie, tags: tags ? JSON.stringify(tags) : undefined };
    Article.update(req.params.id, updateData, (err, changes) => {
        if (err) return res.status(500).json({ erreur: "Erreur serveur" });
        if (changes === 0) return res.status(404).json({ erreur: "Article non trouvé" });
        res.status(200).json({ message: "Article mis à jour avec succès" });
    });
};

exports.deleteArticle = (req, res) => {
    Article.delete(req.params.id, (err, changes) => {
        if (err) return res.status(500).json({ erreur: "Erreur serveur" });
        if (changes === 0) return res.status(404).json({ erreur: "Article non trouvé" });
        res.status(200).json({ message: "Article supprimé" });
    });
};

