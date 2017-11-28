/*const UserController = require('./controllers/users-controller');

const form = document.createElement('form');
const methodAttr = document.createAttribute('method');
methodAttr.value = 'post';
form.setAttributeNode(methodAttr);

const nameLabel = document.createElement('label');
nameLabel.innerHTML = 'Nome:';

const emailLabel = document.createElement('label');
emailLabel.innerHTML = 'E-mail:';

const passwordLabel = document.createElement('label');
passwordLabel.innerHTML = 'Password:';

const nameInput = document.createElement('input');
const nameAttrName = document.createAttribute('name');
const nameAttrType  = document.createAttribute('type');
nameAttrName.value = 'name';
nameAttrType.value = 'text';
nameInput.setAttributeNode(nameAttrName);
nameInput.setAttributeNode(nameAttrType);

const emailInput = document.createElement('input');
const emailAttrName = document.createAttribute('name');
const emailAttrType  = document.createAttribute('type');
emailAttrName.value = 'email';
emailAttrType.value = 'email';
emailInput.setAttributeNode(emailAttrName);
emailInput.setAttributeNode(emailAttrType);

const passwordInput = document.createElement('input');
const passwordAttrName = document.createAttribute('name');
const passwordAttrType  = document.createAttribute('type');
passwordAttrName.value = 'password';
passwordAttrType.value = 'password';
passwordInput.setAttributeNode(passwordAttrName);
passwordInput.setAttributeNode(passwordAttrType);

const nameP = document.createElement('p');
const emailP = document.createElement('p');
const passwordP = document.createElement('p');

nameP.appendChild(nameLabel);
nameP.appendChild(nameInput);
emailP.appendChild(emailLabel);
emailP.appendChild(emailInput);
passwordP.appendChild(passwordLabel);
passwordP.appendChild(passwordInput);

const btn = document.createElement('button');
btn.innerHTML = 'Enviar';
btn.onclick = function(e){
  e.preventDefault();
  const name = document.querySelector('input[name=name]').value
  const email = document.querySelector('input[name=email]').value
  const password = document.querySelector('input[name=password]').value
  UserController.create(name, email, password);
}

form.appendChild(nameP);
form.appendChild(emailP);
form.appendChild(passwordP);
form.appendChild(btn);

document.body.appendChild(form);*/

