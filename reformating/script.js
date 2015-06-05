var totalRooms = 4
    , totalWindows = 2
    , floorType = 'board'
    , driveway = 'plain'
    , exteriorWalls = 'Brown'
    , garageDoor = 'Light Brown'
    , interiorWalls = 'Grey'
    , featuredWall = 'Red'
    , washingInstalled = false
    , buffaloGrass = true
    , expect = require('chai').expect;
describe('Constructing house', function () {
    it('I want tiled floor in the main area', function () {
        expect(floorType).to.equal('tiled')
    })
    it('I want driveway to be exposed aggregate', function () {
        expect(driveway).to.equal('Exposed aggregate')
    })
    it('A washing should be install in the launday', function () {
        expect(washingInstalled).to.be.true
    })
    it('Backyard should not have buffalo grass', function () {
        expect(buffaloGrass).to.be.false
    })
    describe('Rooms', function () {
        it('Minimum 4 rooms required', function () {
            expect(totalRooms).to.be.at.least(4)
        })
        it('Total windows in the master bed must be 2', function () {
            expect(totalWindows).to.equal(2)
        })
    })
    describe('Paint', function () {
        describe('Exterior', function () {
            it('walls should be light brown', function () {
                expect(exteriorWalls).to.equal('Light brown')
            })
            it('garage door should be dark brown', function () {
                expect(garageDoor).to.equal('Dark brown')
            })
        })
        describe('Interior', function () {
            it('main walls should be white', function () {
                expect(interiorWalls).to.equal('White')
            })
            it('featured wall should be maroon', function () {
                expect(featuredWall).to.equal('Maroon')
            })
        })
    })
})
