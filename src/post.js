const User = require('./user')

class Post {
  #number = 0
  #subscribers = []
  constructor (name) {
    this.name = name
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
    if (user instanceof User) {
      if (!this.#subscribers.includes(user)) {
        this.#subscribers.push(user)
      }
    }
  }

  detach (user) {
    // const index = this.#subscribers.indexOf(user)
    // if (index >= 0) {
    //   this.#subscribers.splice(index, 1)
    // }
    this.#subscribers = this.#subscribers.filter(u => u !== user)
  }

  publish () {
    this.#number++
    return this.#subscribers.map(element => element.notify(this))
  }
}
module.exports = Post
