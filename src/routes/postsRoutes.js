import express from "express"; // Importa o framework Express para criar a API
import multer from "multer"; // Importa o middleware Multer para lidar com uploads de arquivos
// Importa funções controladoras de postsController.js (provavelmente contendo lógica de banco de dados)
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postsController.js";
import cors from "cors";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}

// Configura armazenamento em disco para arquivos enviados
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Define o diretório de destino para arquivos (`./uploads` ou `uploads/`)
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    // Define o nome do arquivo salvo (mantém o nome original)
    cb(null, file.originalname);
  },
});

// Cria uma instância do Multer usando a configuração de armazenamento e destino
const upload = multer({ dest: "./uploads", storage });

// Define rotas para a API
const routes = (app) => {
  // Habilita o parsing de dados JSON no corpo das requisições
  app.use(express.json());
  app.use(cors(corsOptions));

  // Rota GET para listar todos os posts
  app.get("/posts", listarPosts);

  // Rota POST para criar um novo post
  app.post("/posts", postarNovoPost);

  // Rota POST para upload de imagem
  // Usa o middleware `upload.single("imagem")` para processar uploads de um único arquivo chamado "imagem"
  // Após upload bem-sucedido, chama a função `uploadImagem` para lidar com a imagem
  app.post("/upload", upload.single("imagem"), uploadImagem);

  app.put("/upload/:id",atualizarNovoPost)
};

export default routes;