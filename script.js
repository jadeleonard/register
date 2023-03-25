var Contenty = document.getElementById('content');
var i = document.getElementById('imyContent');

i.addEventListener('click', function (event) {
  event.preventDefault();
  Contenty.style.display = 'block';
});
