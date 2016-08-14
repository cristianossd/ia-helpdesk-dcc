var searchTerm;

function show(id) {
  document.getElementById(id).style.display = 'inline-block';
}

function hide(id) {
  document.getElementById(id).style.display = 'none';
}

function result(ref) {
  hide('formPanel');
  hide('loading');

  if (ref === null) {
    show('fail');

    document.getElementById('resultTerm').innerHTML = searchTerm;
    return;
  }

  show('resultPanel');
  var link = document.getElementById('resultLink');
  link.href = tutorials[ref].link;
  link.innerHTML = tutorials[ref].title;
}

function depthSearch() {
  console.log('Running depth first search');

  visited = {};
  for (key in tutorials)
    visited[key] = false;

  result(DFS('init'));
}


function DFS(key) {
  var node = tutorials[key];
  if (node.isFinal && fullMatch(searchTerm, node.title))
    return key;

  visited[key] = true;

  for (var i = 0; i < node.related.length; i++) {
    if (visited[node.related[i]] == false) {
      var answer = DFS(node.related[i]);
      if (answer != null)
        return answer;
    }
  }

  return null;
}

function fullMatch(s1, s2) {
  s2 = s2.toLowerCase();
  var words = s1.split(' ').map(word => word.toLowerCase());

  for (var i = 0; i < words.length; i++)
    if (s2.indexOf(words[i]) == -1)
      return false;

  return true;
}

function hillClimbingSearch() {
  console.log('Running Hill Climbing');

  /*
   * call result() function passing the reference
   * of the tutorial
   *
   * if the algorithm did not find the tutorial,
   * pass null for result()
   *
   */

  result(12); // testing with index 12
}

function init(event) {
  event.preventDefault();

  var searchBox = document.getElementById('searchBox').value;
  var depth = document.getElementById('depth').checked;
  var hillClimbing = document.getElementById('hillClimbing').checked;
  if (searchBox === '' || (!depth && !hillClimbing))
    return;

  searchTerm = searchBox;
  hide('formPanel');
  show('loading');

  if (depth)
    // execute depth-first search
    depthSearch();
  else
    // execute hill-climbing
    hillClimbingSearch();
}

function restart(event) {
  event.preventDefault();

  hide('fail');
  hide('resultPanel');
  show('formPanel');
}

hide('loading');
hide('resultPanel');
hide('fail');

var form = document.getElementById('submit');
form.addEventListener('click', init);

var tryAgain = document.getElementById('tryAgainBt');
tryAgain.addEventListener('click', restart);

var back = document.getElementById('backBt');
back.addEventListener('click', restart);
