
// app.js

import express from "express"
import cursoRoutes from "./app/routes/CursoRoutes.js"

const app = express()

// Middlewares básicos
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//ROTAS
app.use(cursoRoutes);

// Healthcheck
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// 404 - Rota não encontrada
app.use((req, res) => {
    return res.status(404).json({ error: 'Rota não encontrada. ' });
})

export default app


