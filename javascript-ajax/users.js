const $userList = document.querySelector('#user-list');
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', () => {
  console.log(xhr.status);
  console.log(xhr.response);
  for (const user of xhr.response) {
    const li = document.createElement('li');
    li.textContent = user.name;
    $userList.appendChild(li);
  };
});

xhr.send();
