const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');

/**
* @swagger
* components:
* schemas:
* Article:
* type: object
* required:
* - titre
* - auteur
* properties:
* titre:
* type: string
* contenu:
* type: string
* auteur:
* type: string
* date:
* type: string
* categorie:
* type: string
* tags:
* type: array
* items:
* type: string
*/

/**
* @swagger
* /api/articles:
* post:
* summary: Créer un nouvel article
* tags: [Articles]
* requestBody:
* required: true
* content:
* application/json:
* schema:
* $ref: '#/components/schemas/Article'
* responses:
* 201:
* description: Création réussie
*/
router.post('/', articleController.createArticle);

/**
* @swagger
* /api/articles:
* get:
* summary: Récupérer tous les articles
* tags: [Articles]
* parameters:
* - in: query
* name: categorie
* schema:
* type: string
* - in: query
* name: date
* schema:
* type: string
* responses:
* 200:
* description: Liste des articles
*/
router.get('/', articleController.getAllArticles);

/**
* @swagger
* /api/articles/search:
* get:
* summary: Rechercher un article
* tags: [Articles]
* parameters:
* - in: query
* name: query
* required: true
* schema:
* type: string
* responses:
* 200:
* description: Résultats de la recherche
*/
router.get('/search', articleController.searchArticles);

/**
* @swagger
* /api/articles/{id}:
* get:
* summary: Obtenir un article par ID
* tags: [Articles]
* parameters:
* - in: path
* name: id
* required: true
* schema:
* type: integer
* responses:
* 200:
* description: Détails de l'article
*/
router.get('/:id', articleController.getArticleById);

/**
* @swagger
* /api/articles/{id}:
* put:
* summary: Modifier un article
* tags: [Articles]
* parameters:
* - in: path
* name: id
* required: true
* schema:
* type: integer
* requestBody:
* content:
* application/json:
* schema:
* $ref: '#/components/schemas/Article'
* responses:
* 200:
* description: Article mis à jour
*/
router.put('/:id', articleController.updateArticle);

/**
* @swagger
* /api/articles/{id}:
* delete:
* summary: Supprimer un article
* tags: [Articles]
* parameters:
* - in: path
* name: id
* required: true
* schema:
* type: integer
* responses:
* 200:
* description: Article supprimé
*/
router.delete('/:id', articleController.deleteArticle);

module.exports = router;
