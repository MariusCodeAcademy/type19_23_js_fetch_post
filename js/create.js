'use strict';
console.log('create.js file was loaded');

const postsUrl = 'https://jsonplaceholder.typicode.com/posts';

const els = {
  formEl: document.forms[0],
  titleEL: document.getElementById('title'),
  contentEL: document.getElementById('content'),
  userIdEL: document.getElementById('userId'),
};
console.log('els ===', els);
// A. sukurti forma su inputu title, text, ir userId(selectas)
// pateikiant forma siusti duomenis i https://jsonplaceholder.typicode.com/posts ir sukurti nauja posta. iskonsolinti atsakyma

els.formEl.addEventListener('submit', (event) => {
  // sustabdyti forma nuo perkrovimo
  event.preventDefault();
  console.log('forma pateikta');
  const newPostData = {
    title: els.titleEL.value,
    body: els.contentEL.value,
    userId: +els.userIdEL.value,
  };
  console.log('newPostData ===', newPostData);

  fetch(postsUrl, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(newPostData),
  })
    .then((resp) => resp.json())
    .then((rez) => console.log('rez ===', rez))
    .catch((error) => {
      console.warn('ivyko klaida:', error);
    });
});

// A.1 userId tuetu buti selektas su 50 useriu id. sugeneruotu dinamiskai nuo 1 iki 50

// B. tas pats kaip ir A tik kuriam nauja useri kuriam reikia name, email ir addreso su bent 3 savybem. https://jsonplaceholder.typicode.com/users
