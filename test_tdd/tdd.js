var color1 = 'Black'
    , color2 = 'White'
    , color3 = 'Red'
    , expect = require('chai').expect;

suite('Color Test', function() {

    it('color 1 should be Black', function() {
        expect(color1).to.equal('Black')
    })

    it('color 2 should be Red', function() {
        expect(color2).to.equal('White')
    })

    it('color 3 should be Black', function() {
        expect(color3).to.equal('Red')
    })
})
