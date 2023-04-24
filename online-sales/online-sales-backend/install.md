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