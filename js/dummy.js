'use strict';
console.log('dummy.js file was loaded');

const dummyUsersAddUrl = 'https://dummyjson.com/users/add';

const els = {
  formEl: document.forms[0],
  nameEl: document.getElementById('name'),
  emailEl: document.getElementById('email'),
  streetEl: document.getElementById('street'),
  suiteEl: document.getElementById('suite'),
  cityEl: document.getElementById('city'),
};
console.log('els ===', els);
// B. tas pats kaip ir A tik kuriam nauja useri kuriam reikia name, email ir addreso su bent 3 savybem. https://dummyjson.com/users/add

els.formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('new user');
  const newUser = {
    name: els.nameEl.value,
    email: els.emailEl.value,
    address: {
      street: els.streetEl.value,
      suite: els.suiteEl.value,
      city: els.cityEl.value,
    },
  };
  // console.log('newUser ===', newUser);
  sendNewUserData(newUser);
});

const obj = {
  name: 'Leanne Graham',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
  },
};

async function sendNewUserData(newUserDataObj) {
  console.log('newUserDataObj ===', newUserDataObj);
  const resp = await fetch(dummyUsersAddUrl, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(newUserDataObj),
  });
  console.log('resp ===', resp);
  const rez = await resp.json();
  console.log('rez ===', rez);
}
