'use strict';
console.log('dummyLogin.js file was loaded');

const loginUrl = 'https://dummyjson.com/auth/login';

// nusitaikyti i forma ir inputus
const formEl = document.forms[0];
// formai uzdeti eventListeneri
formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('pateikta');
  const emailValue = formEl.elements.email.value;
  const passwValue = formEl.elements.password.value;
  // console.log({ emailValue, passwValue });
  const userCredentials = {
    username: emailValue,
    password: passwValue,
  };
  console.log('userCredentials ===', userCredentials);

  sendLoginData(userCredentials);
});
// pateikiant form sudaryti objekta su password ir username savybem
// issiusti i https://dummyjson.com/auth/login

// pasitikrinti ka gaunams suvede kminchelle ir 0lelplR
function sendLoginData(loginData) {
  fetch(loginUrl, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(loginData),
  })
    .then((resp) => {
      console.log('resp ===', resp);
      // sekmes atveju status === 200
      if (resp.status === 200) {
        console.log('sekme');
        // sekmes atveju naviguoti i index.html
        window.location.replace('index.html');
      } else if (resp.status === 400) {
        console.log('nesekme');
        alert('pasitikrinkite laukus');
      }
      // nesekmes atveju status === 400
      return resp.json();
    })
    .then((loginRezult) => {
      // nesekmes atveju loginRezult yra message 'Invalid credentials'
      // sekmes atveju loginRezult butu id laukas su reiksme
      console.log('loginRezult ===', loginRezult);
    })
    .catch((error) => {
      console.warn('ivyko klaida:', error);
    });
}
// pasitikrinti ka gaunams suvede james ir secret

// sekmes atveju naviguoti i index.html
// nesekmes atveju pranesti htmle apie klaida
