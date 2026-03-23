const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const articleRoutes = require('./routes/articleRoutes');

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Configuration Swagger
/*const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Blog INF222',
            version: '1.0.0',
            description: 'API Backend pour la gestion des articles de blog',
        },
        servers: [{ url: `http://localhost:${PORT}` }],
    },
    apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));*/

// Routes de l'API
app.use('/api/articles', articleRoutes);

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
    console.log(`Documentation Swagger dispo sur http://localhost:${PORT}/api-docs`);
});
