class User {
  constructor (name) {
    this.name = name
  }

  read (text) {
    return this.name + ' is reading ' + text
  }

  notify (post) {
    return this.read(post.summary)
  }
}

module.exports = User
