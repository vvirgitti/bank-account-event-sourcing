class EventStore {

  constructor() {
    this.events = []
    this.currentPosition = 1
  }

  createEvent(event) {
    const savedEvent = {
      ...event,
      position: this.currentPosition
    }
    this.events.push(event)
    return savedEvent
  }

}

module.exports = new EventStore()
