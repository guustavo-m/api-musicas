const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());

const musicaRoutes = require('./src/routes/musicaRoutes');

app.use('/musicas', musicaRoutes);

app.listen(PORT, () => {
console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
console.log(`📦 API MVC implementada com sucesso!`);
});