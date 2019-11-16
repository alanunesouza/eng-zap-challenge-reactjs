# Desafio Engenheiro FrontEnd - Grupo Zap

## :Grupo Zap: Sobre o desafio

Reformule a camada de apresentação e visual do site legado da maneira que preferir, com alguns comportamentos obrigatórios:

Quando se clicar em cima de um imóvel, deve apresentar uma tela de detalhe com as informações dele.
Permitir a possibilidade do usuário navegar entre as fotos do imóvel na listagem e/ou detalhe.
Paginação por 20 elementos.
Interface responsiva (front) / adaptável para telas diferentes (apps).

<hr>

## :Grupo Zap: Regras de negócio

- Um imóvel não é elegível em **NENHUM PORTAL** se:

1. Ele tem lat e lon iguais a 0.

- Caso o imóvel seja para venda, ele é elegível para o portal ZAP se:

1. O valor do metro quadrado (chave usableAreas) não pode ser menor/igual a R\$ 3.500,00 - apenas considerando imóveis que tenham usableAreas acima de 0 (imóveis com usableAreas = 0 não são elegíveis).
2. Quando o imóvel estiver dentro do bounding box dos arredores do Grupo ZAP considere a regra de valor mínimo (do imóvel) 10% menor.

- Caso o imóvel seja para aluguel, ele é elegível para o portal Viva Real se:

1. O valor do condomínio não pode ser maior/igual que 30% do valor do aluguel - apenas aplicado para imóveis que tenham um monthlyCondoFee válido e numérico (imóveis com monthlyCondoFee não numérico ou inválido não são elegíveis).
2. Quando o imóvel estiver dentro do bounding box dos arredores do Grupo ZAP considere a regra de valor máximo (do aluguel do imóvel) 50% maior.

<hr>

## Como rodar localmente?

Clone o projeto:

```
git clone https://github.com/alanunesouza/eng-zap-challenge-reactjs.git
```

Após clonar o projeto, insira os seguintes comandos em seu terminal:

```
cd eng-zap-challenge-reactjs && yarn && yarn start:dev
```

<hr>

## Como fazer o deploy?

Instale o heroku em sua máquina (https://devcenter.heroku.com/articles/heroku-cli#download-and-install);

Clone o projeto:

```
git clone https://github.com/alanunesouza/eng-zap-challenge-reactjs.git
```

Após clonar o projeto, insira os seguintes comandos em seu terminal:

```
cd eng-zap-challenge-reactjs && yarn && yarn build
```

Logue com sua conta Heroku com o seguinte comando:

```
heroku login
```

Após logar com sua conta da heroku, digite:

```
heroku create test-deploy
```

e em seguida:

```
yarn install
git add .
git commit -m "initial commit"
heroku git:remote -a test-deploy
git push heroku master
```

Obs.: A conta free pela Heroku permite somente 2 ou 3 builds.

<hr>

## Demo pelo Heroku

https://eng-zap-challenge-production.herokuapp.com/
