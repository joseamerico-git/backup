# Criando o server api
npm init -y
npm install express bcrypt cors dotenv jsonwebtoken sequelize mysql2
npm install typescript --save-dev
npm install nodemon --save-dev

# Criando um arquivo de configuração typescript

npx tsc --init

# Alterando o arquivo de configuração typescript "outDir": "./dist",  

# Para compilar o arquivo index.ts
npx -tsc
teremos a saída na pasta dist

# Para executar o arquivo index.js
node dist/index.js
ou 
npx nodemon dist/index.js

# Podemos abrir um novo terminal e digitar o comando 
npx tsc --watch

# Com isso posso retornar no outro terminal, e quando salvar alguma alteração no arquivo index.ts automáticamente os resultados serão apresentados no terminal.

# Posso também alterar o script em package.json adicionando , "dev":"nodemon dist/index.js"

Executar com o comando npm run dev ou npm run typescript

# Criando a estrutura de pastas
dentro de src criamos as pastas
controllers, routes, models e db. 
Ainda dentro de src criamos um arquivo


npm install --save-dev @types/express

## Criando endpoints 

http://localhost:3001/api/products GET --> devolvemos todos os produtos.

http://localhost:3001/api/user POST --> agregamos usuário.

http://localhost:3001/api/user/login POST --> login.


bcrypt --> npm i --save-dev @types/bcrypt

npm i --save-dev @types/jsonwebtoken

Front-end
# Instalando angular cli

npm install -g @angular/cli

npm i --save-dev @types/cors

npm i -g forever

forever start app.js