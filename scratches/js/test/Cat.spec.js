import { expect } from 'chai';
import { Cat } from '../src/Cat'

describe('Cat', function () {

  describe('constructor', function () {
    it('should use Kitty as the default name', function () {
      let cat = new Cat()
      expect(cat.name).to.equal('Kitty')
    })
    it('should set the name if provided', function () {
      let cat = new Cat('Feral')
      expect(cat.name).to.equal('Feral')
    })
  })

  describe('meet()', function () {
    it('should throw a TypeError if no target parameter', function () {
      expect(function () {
        (new Cat()).meet()
      }).to.throw(TypeError)
    })

    it('should meet the target', function() {
      let meet = (new Cat('Paw')).meet('Meow')
      expect(meet).to.equal('Paw, meet Meow')
    })
  })

})
