module.exports = {
  Query: {
    posts: async (_source, _args, { dataSources }) => {
      const result = await dataSources.productHuntAPI.getPosts();
      return result.posts
    },
  }
}