let input = document.getElementById('input');

document.getElementById('input');
input.addEventListener('keyup', function () {
  let filter = input.value.toLowerCase(),
    filterItems = document.querySelectorAll('#list li');
  filterItems.forEach((item) => {
    if (item.innerHTML.toLowerCase().indexOf(filter) > -1) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
});
