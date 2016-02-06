(function() {

  var sampleArea = document.querySelector('#sql-injection code.sample-area'),
      usernameInput = document.querySelector('#sql-injection #sqli-username'),
      passwordInput = document.querySelector('#sql-injection #sqli-password'),
      template = sampleArea.innerText.trim();

  usernameInput.addEventListener('keyup', updateSql);
  passwordInput.addEventListener('keyup', updateSql);

  function updateSql() {
    var username = usernameInput.value;
    var password = passwordInput.value;


    sampleArea.innerText = template.replace('{username}', username).replace('{password}', password);
    hljs.highlightBlock(sampleArea);
  }

})();