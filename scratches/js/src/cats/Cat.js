class Cat {

  constructor(name) {
    this.name = name || 'Kitty';
  }

  meet(target) {
    if (!target) throw new TypeError('Missing target')
    return this.name + ', meet ' + target
  }

}

export { Cat }
