const Client = require('./client')
const Post = require('./post')

class PaidPost extends Post {
  constructor (name, price) {
    super(name)
    this.price = price
  }

  attach (client) {
    if (client instanceof Client) {
      super.attach(client)
    }
  }
}

module.exports = PaidPost
