const uuidv4 = require('uuid/v4');

const eventStore = require('./eventStore')

class CommandHandler {

  createAccount(accountDetails) {
    return eventStore.createEvent({
      type: 'account_created',
      accountId: uuidv4(),
      data: accountDetails,
      eventNumber: 1
    })
  }

}

module.exports = CommandHandler
