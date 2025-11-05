const greeting = document.getElementById('greeting');
const url = window.location.href;
const splitter = '=';
const index = url.indexOf(splitter) + 1;
const username = url.slice(index);
greeting.textContent = `Hello my friend \n ${username}`;
