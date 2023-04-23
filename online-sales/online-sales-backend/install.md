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