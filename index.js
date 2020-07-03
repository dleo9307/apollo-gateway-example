const { ApolloServer } = require('apollo-server');
const { ApolloGateway } = require('@apollo/gateway');

const gateway = new ApolloGateway({
    serviceList:[
        {name: 'bookProject', url: 'http://localhost:3000/graphql'},
        {name: 'proxyProject', url: 'http://localhost:7000/graphql'},
    ]
})

const server = new ApolloServer({gateway, subscriptions: false})

server.listen().then(({url}) =>{
    console.log(`Server ready at ${url}`);
})
