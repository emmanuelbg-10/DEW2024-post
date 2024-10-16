const Client = require('./client')
const Post = require('./post')

class PaidPost extends Post {
  constructor (name, price) {
    super(name)
    this.price = price
  }

  attach (user) {
    if (user instanceof Client) {
      super.attach(user)
    }
  }
}

module.exports = PaidPost
