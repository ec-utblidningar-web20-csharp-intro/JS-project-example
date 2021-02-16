alert("Nu registreras 'DOMContentLoaded' eventhandlern");
document.addEventListener("DOMContentLoaded", function () {
  alert("Nu händer 'DOMContentLoaded' eventet");
});

alert("Nu registreras 'window.onload' eventhandlern");
window.onload = function () {
  alert("Nu händer 'window.onload' eventet");
};
