const Remote = require('../services/remote');

class User {
  /**
   * Creates a User object.
   * @param {string} name 
   * @param {string} email 
   * @param {string} password 
   */
  constructor(name, email, password) {
    this._name = name;
    this._email = email;
    this._password = password;
  }

  save() {
    return Remote.createPromise('http://api.enriquece.me/users', 'post', this._toJSON())
  }

  /**
   * Serializes object to JSON.
   */
  _toJSON(){
    return `{
      "name": "${this._name}",
      "email": "${this._email}",
      "password": "${this._password}"
    }`
  }
};

module.exports = User;
