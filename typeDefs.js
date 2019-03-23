const { gql } = require('apollo-server');

module.exports = gql`
  type Query {
    posts: [Post]
  }
  type Post {
    id: ID!
    name: String!
  }
`