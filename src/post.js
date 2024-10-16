const User = require('./user')

class Post {
  #number
  #subscribers
  constructor (name, number = 0) {
    this.name = name
    this.#number = number
    this.#subscribers = []
  }

  get summary () {
    return this.name + ' publication number ' + this.#number
  }

  getSubscribers () {
    // const array = []
    // this.#subscribers.forEach(element => {
    //   array.push(element.name)
    // })
    // return array.join(',')
    return this.#subscribers.map(user => user.name).join(',')
  }

  attach (user) {
    if (user instanceof User && this.#subscribers.indexOf(user) === -1) {
      this.#subscribers.push(user)
    }
  }

  detach (user) {
    const index = this.#subscribers.indexOf(user)
    if (index !== -1) {
      this.#subscribers.splice(index, 1)
    }
  }

  publish () {
    this.#number++
    return this.#subscribers.map(element => element.notify(this))
  }
}

module.exports = Post
