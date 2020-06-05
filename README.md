# Ecoleta (NLW)

Projeto da **Next Level Week 1.0**, da Rocketseat.

## Sobre a aplicação

O objetivo desse projeto era de criar uma aplicação com as funcionalidades de cadastro e de listagem de pontos de coleta de material reciclável. Desde o back end, até o front end e o mobile, foi utilizado o **TypeScript**.

## Como foi construída a aplicação


### Back end

Nessa aplicação, o papel do back end é de intermediar a conversa entre o front end e o mobile com o banco de dados. Por isso foi utilizada o conceito de **API Rest** para desenvolver essa parte. Nela, o back end, por meio de requisições HTTP, realiza ações dentro do banco de dados com base no que é recebido no corpo dessas requisições.

Para implementar esse conceito, as seguintes bibliotecas foram utilizadas:
 - Express: gerenciar as rotas da aplicação.
 - Knex: facilitar a interação com o banco de dados, que armazena os pontos de coleta.
 - Multer: lidar com as imagens que vem do front end.


### Front end

![Front end](https://user-images.githubusercontent.com/29464328/83920604-f6eb6400-a752-11ea-9021-2cff27590f85.png)

No front end, foi utilizado o **React** como framework principal. Essa parte da aplicação ficou encarregada de prover para o usuário uma interface de cadastro de ponto de coleta.

Para isso, foram utilizadas as seguintes bibliotecas e ferramentas:
 - Axios: realizar as requisições para o back end.
 - Leaftlet: prover um mapa para que o usuário possa selecionar uma localidade.


### Mobile

![Mobile](https://user-images.githubusercontent.com/29464328/83921186-3797ad00-a754-11ea-824c-e0c22b3d2b9d.png)

Como no front end, também foi utilizado React no mobile. Porém, em vez de utilizar o React Native sozinho, foi utilizado uma ferramenta chamada **Expo**, que facilita a criação de aplicações mobile, já que não necessita do Android SDK para executar.

Aqui, o objetivo era listar para o usuário todos os pontos de coleta em uma determinada cidade, mostrando por meio de um mapa essas localidades.

---
:pencil: [Relatório de desenvolvimento no Notion](https://www.notion.so/juanbelieni/Ecoleta-NLW-1a0c9be33328449f8e8cd608ad0dfd44)
