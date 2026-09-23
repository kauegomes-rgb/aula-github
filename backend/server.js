const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const produto = {
    nome: "Mouse Gamer",
    preco: 150,
    categoria: "Periféricos"
};

app.get("/", (req, res) => {
    res.json(produto);
});

app.listen(3000, () => {
    console.log("Servidor funcionando na porta 3000");
}); 