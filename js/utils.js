(function() {

  Reveal.addEventListener('ready', function() {
    console.log('ok');
    var trainingUrl = document.body.dataset.trainingUrl;
    var loginInfo = document.body.dataset.loginInfo;
    if (!trainingUrl || trainingUrl.length == 0 ) {
      console.log("Couldn't find traning URL on body. Links will be ugly.");
    }

    var tryIts = document.querySelectorAll('.try-it');
    Array.prototype.forEach.call(tryIts, function(tryItDiv) {

      var heading = document.createElement('h1');
      heading.innerText = "Try it yourself!";
      tryItDiv.appendChild(heading);

      var link = document.createElement('a');
      var anchor = tryItDiv.dataset.section || "";
      link.href = trainingUrl + "#" + anchor;
      link.innerText = trainingUrl;
      link.target = "_blank";
      tryItDiv.appendChild(link);

      if (loginInfo) {
        var usernameAndPassword = document.createElement('span');
        usernameAndPassword.innerText = '(' + loginInfo + ')';
        usernameAndPassword.classList.add('login');
        tryItDiv.appendChild(usernameAndPassword);
      }

      var sectionTitle = document.createElement('h3');
      sectionTitle.innerText = tryItDiv.dataset.title;
      sectionTitle.classList.add('section');
      tryItDiv.appendChild(sectionTitle);
    });
  });

})();