  var link = document.querySelector(".button-say");

  var popup = document.querySelector(".modal-login");
  var close = popup.querySelector(".modal-close");
  var first = popup.querySelector('[name=first]');
  var email = popup.querySelector('[name=email]');
  var comment = popup.querySelector("[name=comment]");

  var storage = localStorage.getItem('first');
  var storage = localStorage.getItem('email');

  var form = popup.querySelector('form');

  form.addEventListener('submit', function(evt) {
    if (!first.value || !email.value || !comment.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add('modal-error');
    } else {
      localStorage.setItem('first', first.value)
      localStorage.setItem('email', email.value)
    }
  });

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    first.focus();
    if (storage) {
      first.value = storage;
      email.focus();
    } else {
      first.focus();
    }
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });

  window.addEventListener('keydown', function (evt) {
   if (evt.keyCode === 27) {
    if (popup.classList.contains('modal-show')) {
      evt.preventDefault();
      popup.classList.remove('modal-show');
    }
  }
});

