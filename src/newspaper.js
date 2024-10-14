const PaidPost = require('./paid-post')

class Newspaper extends PaidPost {
  constructor (name, price, district) {
    super(name, price)
    this.district = district
  }

  get summary () {
    return super.summary + ` of ${this.district}`
  }
}

module.exports = Newspaper
