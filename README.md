# <a href="https://imgbb.com/"><img src="https://i.ibb.co/c1ykYDW/image-2024-09-22-T23-32-45-105-Z.png" alt="image-2024-09-22-T23-32-45-105-Z" border="0"></a> Imersão BackEnd Alura com Google Gemini
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/marcosfshirafuchi/dslist/blob/main/LICENSE)


# Sobre o projeto
<a href="https://ibb.co/WtNpTZW"><img src="https://i.ibb.co/NSgn456/image-2024-11-18-T21-57-26-058-Z.png" alt="image-2024-11-18-T21-57-26-058-Z" border="0"></a><br><br>
Essa é a última Imersão de 2024. A sua chance de desbravar o mundo das APIs com Node.js, configurar o seu primeiro servidor e criar um blog de fotos na prática, com o suporte do Google Gemini.


Projeto BackEnd InstaBytes é uma aplicação backend node com o suporte do Google Gemini, foi desenvolvida durante o [**Imersão BackEnd Alura com Google Gemini**](https://www.alura.com.br/imersao-dev-back-end-google-gemini?utm_source=social&utm_medium=linkedin&utm_campaign=imersao-dev-back-end-nov24&utm_content=ultimas-horas), evento organizado pela [Alura](https://www.alura.com.br/) que ocorreu nos dias: 18 a 22 de novembro no ano de 2024.



## Aulas da Imersão BackEnd Alura com Google Gemini
<a href="https://ibb.co/z4XL84x"><img src="https://i.ibb.co/RD3MhDb/image-2024-11-18-T22-04-59-504-Z.png" alt="image-2024-11-18-T22-04-59-504-Z" border="0"></a>


# Tecnologias utilizadas
## Back end

- <img width="70px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" title = "Node JS" /> Node JS : versão 22.11.0;
- <img width="70px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"  title = "VS Code"/> VS Code: IDEA usada durante a imersão backend.
- <img width="70px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" title = "Mongo DB" /> Mongo DB: Banco de dados usado na nuvem.
- <img width="100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original-wordmark.svg" title = "Postman"/> Postman: Usado para testar os serviço do Backend.

# Como executar o projeto

## Back end
Pré-requisitos: Instalação do Node.JS e IDEA: VSCode

```bash
# clonar repositório
git clone https://github.com/marcosfshirafuchi/Alura-backend-instabytes.git

# Comando para instalar 
npm init es6 -y
npm install express

# Comando para executar o programa(Neste caso, precisar apertar (ctrl + C) para sair da execução do programa, salva as alterações do código e precisa executar de novo o comando por causa das alterações)
node server.js

# Comando para executar o programa com alterações do código depois salvo(Neste caso, não precisa executar de novo o comando por causa das alterações)
node --watch server.js

# Instalar o multer
npm install multer

# Instalar o Google Gemini
npm i @google/generative-ai

# Instalar o cors
npm i cors

# Instalar dotenv
npm install dotenv

```
Serviços do backEnd para testar no Postman:

```
# Método GET - URL
http://localhost:3000/posts

# Método POST - URL
http://localhost:3000/upload

#Colocar foto no método POST
Clique em form-data -> Na coluna KEY, escolha File e digite o nome no campo -> Na coluna VALUE, selecione a imagem do computador

# Método PUT - URL
http://localhost:3000/upload/id(O id gerado pelo método post)

# Body do PUT
{
    "alt":"Foto da cidade de  veneza"
}
```


# Autor

Marcos Ferreira Shirafuchi

https://www.linkedin.com/in/marcosshirafuchi/

