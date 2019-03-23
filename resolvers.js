module.exports = {
  Query: {
    posts: async (_source, { daysAgo }, { dataSources }) => {
      const result = await dataSources.productHuntAPI.getPosts(daysAgo)
      return result.posts
    }
  }
}
