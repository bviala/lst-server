const { gql } = require('apollo-server')

module.exports = gql`
  type Query {
    posts(daysAgo: Int): [Post]
  }
  type Post {
    id: ID!
    name: String!
    comments_count: Int
    votes_count: Int
    tagline: String
    screenshot_url: String
    makers: [Maker]
  }
  type Maker {
    id: ID!
  }
`
