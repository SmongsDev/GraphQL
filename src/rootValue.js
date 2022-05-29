const products = require('./products');
const defaultProducts = require('./defaultProducts');

module.exports = {
    getProduct: ({ id }) => {
        return products.find((product) => product.id === parseInt(id));
    },
    addProduct: ({ input }) => {
        input.id = products.length === 0 ? 1 : products[products.length - 1].id + 1;
        products.push(input);
        return input.id;
    },
};