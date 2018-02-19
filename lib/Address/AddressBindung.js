const errors = require('../errors');

class AddressBindung {
  /**
   * AddressBindung combindes a pair of two addresses for sender and receiver.
   * 
   * @constructor
   * @param {Object} addresses
   * @param {Address} receiver - The receiver address.
   * @param {Address} sender - The sender address.
   */
  constructor({ receiver, sender } = {}) {
    if (!receiver || !sender) {
      throw Error(errors.usage.missingAddressBindings);
    }

    /** @type {Address} */
    this._receiver = receiver
    /** @type {Address} */
    this._sender = sender;
  }

  /**
   * @returns {Object} - The pair of addresses.
   */
  getAddresses() {
    return {
      receiver: this._receiver.getData(),
      sender: this._sender.getData()
    };
  }
}

module.exports = AddressBindung;
