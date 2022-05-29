import { ApolloServer } from 'apollo-server';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/typeDefs';

const server = new ApolloServer({
    typeDefs, resolvers
});

server.listen().then(({url}) => console.log(`GraphQL Service running on ${url}`))