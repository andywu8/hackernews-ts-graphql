# hackernews-ts-graphql

# Resource
https://www.howtographql.com/typescript-apollo/2-a-simple-query/

# Instructions
* mkdir hackernews-typescript
* cd hackernews-typescript
* npm init -y
* npm install --save-dev typescript@^4.3.5 ts-node-dev@^1.1.8
* touch tsconfig.json           
* copy and paste tsconfig.json   
* npm install apollo-server@^3.1.1 graphql@^15.5.1 nexus@^1.1.0
* npm install prisma@^3.5.0 --save-dev
* npm install @prisma/client@^3.5.0
* mkdir src
* touch src/schema.ts src/index.ts
* npm run generate (to update your schema.graphql and nexus-typegen.ts)
* npm run dev


# Additional Stuff
* Create migration with Prism and update Prisma client --> after you update schema.prisma: npx prisma migrate dev --name "init"
* npx prisma migrate dev --name "add-user-model"
* query the database with prism: npx ts-node src/script.ts              
    *   Issue with typescript version --> run npm install --save-dev ts-node
* query command:
query {
  feed {
    id
    url
    description
  }
}

# Helpful notes
* apollo-server is a fully-featured GraphQL server. 
* Nexus is a library to create type-safe GraphQL schemas. Nexus ensures GraphQL types and Typescript types never go out of sync.
* Prisma Client exposes a CRUD API for the models in your schema for you to read and write in your database.
* Note that, the relation between User and Link is bidirectional. A user has zero or more links that they have created. Similary a single link is optionally connected to a user who posted the link. To reflect this bidirectional relation, you will add a postedBy field to the existing Link model definition in your GraphQL schema.

