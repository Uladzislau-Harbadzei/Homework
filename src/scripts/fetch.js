document.getElementById('usersbuton').addEventListener('DOMContentLoaded', function () {
  fetch('https://dummyjson.com/users')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});
