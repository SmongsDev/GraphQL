const { ApolloServer } = require('apollo-server');

const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();

const schema = buildSchema(`
    type Query{
        pizza_buns: [PizzaBun]
    }

    type PizzaBun{
        pb_idx: ID,
        pb_name: String,
        size: Int,
        bread: String,
        sauce: String,
        topping: String
    }
`)

const resolver = {
    pizza_buns: async () => {
        return await new Promise((resolve) => {
            pool.getConnection(function(err, connection){
                connection.query(
                    'SELECT * FROM pizza_bun',
                    (err, results) => {
                        connection.release();
                        if (err) throw err;
                        resolve(results);
                    }
                )
            })
        })
    }
}

const server = new ApolloServer({
    schema, resolver
})

server.listen().then(({url}) => console.log(`GraphQL Service running on ${url}`))