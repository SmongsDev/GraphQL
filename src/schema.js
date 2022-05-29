const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    input ProductInput {
    name: String,
    price: Int,
    description: String
    }

    type Product {
        id: ID!,
        name: String,
        price: Int,
        description: String
    }

    type Query {
        getProduct(id: ID!): Product
    }

    type Mutation {
        addProduct(input: ProductInput): Int
    }
`);