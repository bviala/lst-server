require('dotenv').config()
const { ApolloServer } = require('apollo-server')
const { RESTDataSource } = require('apollo-datasource-rest')

const typeDefs = require ('./typeDefs')
const resolvers = require('./resolvers')

class ProductHuntAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.producthunt.com/v1/';
  }

  willSendRequest(request) {
    request.headers.set('Accept', 'application/json');
    request.headers.set('Content-Type', 'application/json');
    request.headers.set('Authorization', `Bearer ${process.env.PRODUCTHUNT_API_TOKEN}`);
    request.headers.set('Host', 'api.producthunt.com');
  }

  async getPosts() {
    return this.get('posts');
  }
}

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({
  typeDefs, 
  resolvers,
  dataSources: () => {
    return {
      productHuntAPI: new ProductHuntAPI()
    }
  }
})

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});