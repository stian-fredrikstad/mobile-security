(function() {

  var holder = document.querySelector('#csrf-zone');
  var quickDemoButton = document.querySelector('#csrf-demo-button-quick');
  var slowDemoButton = document.querySelector('#csrf-demo-button-slow');
  var kittenDemoButton = document.querySelector('#csrf-demo-button-kittens');

  quickDemoButton.addEventListener('click', function(e) {
    var frame = document.createElement('iframe');
    frame.src = '/js/csrf.html';

    e.target.parentNode.querySelector('.csrf-zone').appendChild(frame);
  });

  slowDemoButton.addEventListener('click', function(e) {
    var frame = document.createElement('iframe');
    frame.src = '/js/csrf.html?t=2000';

    var output = e.target.parentNode.querySelector('.csrf-zone');
    output.appendChild(frame);

    setTimeout(function() {
      clearAllChildren(output);
    }, 3000);
  });

  kittenDemoButton.addEventListener('click', function(e) {
    var frame = document.createElement('iframe');
    frame.src = '/js/csrf.html?t=1';
    frame.style.display = 'none';

    var kittens = document.createElement('img');
    kittens.src = "/img/kittens.jpg";

    var output = e.target.parentNode.querySelector('.csrf-zone');
    output.appendChild(frame);
    output.appendChild(kittens);

    setTimeout(function() {
      clearAllChildren(output);
    }, 5000);
  });


  function clearAllChildren(el) {
    while (el.firstChild) {
      el.removeChild(el.firstChild);
    }
  }

})();