(function() {

  var sampleArea = document.querySelector('#xss code.sample-area'),
      searchResults = document.querySelector('#xss .attack-zone'),
      searchInput = document.querySelector('#xss #xss-search'),
      form = document.querySelector('#xss .example-form'),
      template = searchResults.innerHTML.trim();

  updateSearchResult(); // Call once to init meaningful state

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    updateSearchResult();
  });

  function updateSearchResult() {
    var html = template.replace('{term}', searchInput.value);

    executeScript();

    sampleArea.innerText = html;
    searchResults.innerHTML = html;
    hljs.highlightBlock(sampleArea);
  }

  /**
   * Super-hack. Modern browsers won't render dynamically inserted <script> tags, so we execute them by cheating.
   *
   * Don't tell :).
   */
  function executeScript() {
    try {
      var script = _(searchInput.value).strRight('<script>').strLeft('</script>').value();
      eval(script);
    }
    catch (e) {
      // Ok, probably wasn't script.
      console.debug(e);
    }
  }

})();