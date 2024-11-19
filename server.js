import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Gato fofo dormindo",
        imagem: "https://placekitten.com/400/200"
    },
    {
        id: 3,
        descricao: "Paisagem com um gato",
        imagem: "https://picsum.photos/seed/cats/600"
    },
    {
        id: 4,
        descricao: "Gato brincando com um novelo de lã",
        imagem: "https://source.unsplash.com/random/600x400/?cat,toy"
    },
    {
        id: 5,
        descricao: "Gato olhando pela janela",
        imagem: "https://unsplash.com/photos/2d4lAQAlbqs"
    },
    {
        id: 6,
        descricao: "Gato preto em uma noite escura",
        imagem: "https://www.pexels.com/photo/black-cat-on-a-black-background-1015554/"
    }
];

const app = express();
app.use(express.json());
app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/posts",(req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorID(id){
    return posts.findIndex((post) =>{
        return post.id === Number(id)
    });
}

app.get("/posts/:id",(req, res) => {
    const index = buscarPostPorID(req.params.id);
    res.status(200).json(posts[index]);
});