const { RESTDataSource } = require('apollo-datasource-rest')

class ProductHuntAPI extends RESTDataSource {
  constructor () {
    super()
    this.baseURL = 'https://api.producthunt.com/v1/'
  }

  willSendRequest (request) {
    request.headers.set('Accept', 'application/json')
    request.headers.set('Content-Type', 'application/json')
    request.headers.set('Authorization', `Bearer ${process.env.PRODUCTHUNT_API_TOKEN}`)
    request.headers.set('Host', 'api.producthunt.com')
  }

  async getPosts (fromDaysAgo) {
    const query = fromDaysAgo ? `posts?days_ago=${fromDaysAgo}` : 'posts'
    return this.get(query)
  }
}

module.exports = ProductHuntAPI
