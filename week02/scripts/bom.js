const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('list');

const listElement = document.createElement('li');
const delBtn = document.createElement('button');

listElement.textContent = input.value;
delBtn.textContent = "❌";

listElement.append(delBtn);
list.append(listElement);