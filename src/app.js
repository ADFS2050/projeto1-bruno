import express from "express";
import cursoRoutes from "./app/routes/CursoRoutes.js";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Swagger
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Cursos",
      version: "1.0.0",
    },
  },
  apis: ["./src/app/routes/*.js"],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Rotas
app.use(cursoRoutes);

// 404 - Rota não encontrada
app.use((req, res) => {
  res.status(404).json({ error: "Rota não encontrada." });
});

export default app;
