npm i -g @nestjs/cli

net new online-sales-backend => npm


nest g module user

nest g controller user

nest g service user

npm i bcrypt

npm i -D @types/bcrypt

docker pull postgres

docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres

npm i --save @nestjs/config => config DB (https://docs.nestjs.com/techniques/configuration)

npm install --save typeorm pg @nestjs/typeorm  => ORM (https://docs.nestjs.com/recipes/sql-typeorm)

npx typeorm migration:create ./src/migration/create_table_user => migrations
npx typeorm migration:create ./src/migration/create_table_state => migrations
npx typeorm migration:create ./src/migration/create_table_city => migrations
npx typeorm migration:create ./src/migration/create_table_address => migrations

npx typeorm migration:create ./src/migration/alter_table_state => alterando migrations
npx typeorm migration:create ./src/migration/insert_in_state => alterando migrations
npx typeorm migration:create ./src/migration/insert_in_city => alterando migrations

nest g module state => criando o modulo de state
nest g module city => criando o modulo de city
nest g module address => criando o modulo de address

nest g controller state => criando o controller do state
nest g service state => criando o service do state
nest g controller city => criando o controller do city
nest g service city => criando o service do city

npm install @nestjs/cache-manager cache-manager => 

nest g module cache => criando o modulo de cache
nest g service cache => criando o service de cache

npm i --save class-validator class-transformer => Validações


nest g controller address => criando o controller do address
nest g service address => criando o service do address

npm install --save @nestjs/passport passport passport-local
npm install --save-dev @types/passport-local

nest g module auth
nest g service auth
nest g controller auth

npm install --save @nestjs/jwt passport-jwt
npm install --save-dev @types/passport-jwt

npx typeorm migration:create ./src/migration/alter_table_user => migrations