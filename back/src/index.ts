import { ApolloServer } from "apollo-server";
import { todoResolver } from './resolver/todo.resolver';
import { todoSchema } from './schemas/todo.schema'

const server = new ApolloServer({
  resolvers: todoResolver,
  typeDefs: todoSchema,
  csrfPrevention: true,
  cache: 'bounded'
});

server.listen().then(({url}) => {
  console.log(`🚀  Server ready at ${url}`);

})