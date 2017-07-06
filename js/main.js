document.addEventListener('DOMContentLoaded', function() {
  var signIn = document.querySelector('.signin');

  var modal = document.querySelector('.modal');

  var docBody = document.querySelector('body');

  var close = document.querySelector('.close');

  var submit = document.querySelector('.submit');

  var input = document.querySelectorAll('input')

  var user = document.querySelector('#user');

  signIn.addEventListener('click', function () {
    modal.style.display = 'block';
  });

  close.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  submit.addEventListener('click', function () {
    input.forEach(function(input) {
      input.classList.add('error');
    })
  });

  user.addEventListener('click', function () {
    input.forEach(function(input) {
        input.classList.remove('error');
    })
  });
});
