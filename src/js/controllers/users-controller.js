const User = require('../models/user');

class UsersController {
  static create(name, email, password) {
    const user = new User(name, email, password);
    user.save()
    .then(response => {
      if (response.ok) {
        alert('Usuário cadastrado com sucesso!');
      }
    
      return response.json()
    })
    .then(json => console.log(json))
    .catch(err => console.log(err));
  }
}

module.exports = UsersController;