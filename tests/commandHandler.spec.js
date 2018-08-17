const expect = require('chai').expect
const sinon = require('sinon')

const CommandHandler = require('../services/commandHandler')
const commandHandler = new CommandHandler()
const eventStore = require('../services/eventStore')

describe.only('CommandHandler', () => {

  it('can create an account', () => {
    const expectedEvent = {
      type: 'account_created',
      accountId: 123,
      data: {
        owner: 'John Snow'
      },
      eventNumber: 1,
      position: 1
    }
    const fakeEventStore = sinon.stub(eventStore, 'createEvent').returns(expectedEvent)

    console.log('>>>>>> ', commandHandler.createAccount({owner: 'John Snow'}))

    expect(commandHandler.createAccount({owner: 'John Snow'})).to.equal(expectedEvent)
  })

})
