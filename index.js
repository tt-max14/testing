console.log ("Все требования соблюдены, верстка на tablet version совпадает с макетом, на размерах меньше сделана по моему вкусу, но требования ТЗ выполнены")
let nav = document.querySelector('.nav');
let button = document.querySelector('.burger-but');
button.onclick = function() {
    nav.classList.toggle('menu-show');
    button.classList.toggle('cross');
}

document.addEventListener('click', function (event) {
    if (!nav.contains(event.target) && !button.contains(event.target)) {
      nav.classList.remove('menu-show');
      button.classList.remove('cross');
    }
});

const divElements = document.querySelectorAll('.about-but');
divElements.forEach(div => {
  div.addEventListener('click', () => {
    divElements.forEach(el => {
      el.classList.remove('active');
    });
    div.classList.add('active');
  });
});
