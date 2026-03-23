API Backend - Blog
#Description

Ce projet consiste en le développement d’une API Backend pour la gestion d’un blog, réalisé dans le cadre du cours INF222 – Développement Backend.
L’API permet de gérer des articles (CRUD) avec des fonctionnalités de recherche et de filtrage.

# Objectifs

Concevoir une API REST
Manipuler une base de données
Structurer un projet backend
Documenter une API avec Swagger

#Technologies utilisées

Backend : Node.js (Express) (ou autre selon ton choix)
Base de données : MongoDB / MySQL / SQLite
Documentation API : Swagger
Tests API : Postman / Swagger UI

#Endpoints de l’API

Créer un article
POST /api/articles

Body :

{
  "titre": "Mon article",
  "contenu": "Contenu ici...",
  "auteur": "Nom",
  "categorie": "Tech",
  "tags": ["node", "api"]
}

#Récupérer tous les articles

GET /api/articles

#Possibilité de filtrer :

/api/articles?categorie=Tech&date=2026-03-18

#Récupérer un article par ID

GET /api/articles/{id}

#Modifier un article

PUT /api/articles/{id}

#Supprimer un article

DELETE /api/articles/{id}

#Rechercher un article

GET /api/articles/search?query=texte

#Codes HTTP utilisés

200 : Succès
201 : Création réussie
400 : Requête invalide
404 : Ressource non trouvée
500 : Erreur serveur

#Documentation API

La documentation est disponible via Swagger :
http://localhost:3000/api-docs

