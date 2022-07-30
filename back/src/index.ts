import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { todoResolver } from './resolver/todo.resolver';
import { todoSchema } from './schemas/todo.schema'

import { PrismaClient } from '@prisma/client'
import { container } from "tsyringe";

const dao = new PrismaClient()
container.register<PrismaClient>('database', { useValue: dao });

const server = new ApolloServer({
  resolvers: todoResolver(),
  typeDefs: todoSchema,
  csrfPrevention: true,
  cache: 'bounded',
  logger: console,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
})