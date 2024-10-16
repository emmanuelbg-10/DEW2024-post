const User = require('./user')

class Client extends User {
  constructor (name, billing = 0) {
    super(name)
    this.billing = billing
  }

  notify (post) {
    if (post.price !== undefined) {
      this.billing = Number((this.billing + post.price).toFixed(2))
    }
    return super.notify(post)
  }
}

module.exports = Client
