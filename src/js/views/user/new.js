const UserController = require('../../controllers/users-controller');

class ViewNewUser {
  constructor(form) {
    this._form = form;
    this._submit = this._form.querySelector('#createNewUser');
    this._addButtonClickEvent()
  };

  _setAttributes() {
    this._name = this._form.querySelector('input[name=name]').value;
    this._email = this._form.querySelector('input[name=email]').value;
    this._password = this._form.querySelector('input[name=password]').value;
  }

  _serialize() {
    this._setAttributes()
    return {
      name: this._name,
      email: this._email,
      password: this._password
    };
  };

  _addButtonClickEvent() {
    const instance = this;
    this._submit.onclick = function(e){
      e.preventDefault();
      const {name, email, password} = instance._serialize();
      UserController.create(name, email, password);
    }
  }
}

module.exports = ViewNewUser;