console.log("Nu registreras 'DOMContentLoaded' eventhandlern");
document.addEventListener("DOMContentLoaded", function () {
  console.log("Nu händer 'DOMContentLoaded' eventet");
});

console.log("Nu registreras 'window.onload' eventhandlern");
window.onload = function () {
  console.log("Nu händer 'window.onload' eventet");
};
