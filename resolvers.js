module.exports = {
  Query: {
    posts: async (_source, { daysAgo }, { dataSources }) => {
      const result = await dataSources.productHuntAPI.getPosts(daysAgo)
      return result.posts.map(post => ({
        ...post,
        screenshot_url: post.screenshot_url['850px']
      }))
    }
  }
}
