require('dotenv').config()
const { ApolloServer } = require('apollo-server')

const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')
const ProductHuntAPI = require('./ProductHuntAPI')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      productHuntAPI: new ProductHuntAPI()
    }
  }
})

server.listen(process.env.PORT || 4000).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
