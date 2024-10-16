const PaidPost = require('./paid-post')

class Magazine extends PaidPost {
  constructor (name, price, topic) {
    super(name, price)
    this.topic = topic
  }

  get summary () {
    return super.summary + ' of ' + this.topic
  }
}

module.exports = Magazine
