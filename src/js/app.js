var searchTerm;

function show(id) {
  document.getElementById(id).style.display = 'block';
}

function hide(id) {
  document.getElementById(id).style.display = 'none';
}

function setNotification(msg) {
  document.getElementById('agentMsg').innerHTML = msg;
}

function result(ref) {
  hide('formPanel');
  hide('loading');

  if (ref === null) {
    setNotification('My bad! Try again, please');
    show('fail');

    document.getElementById('resultTerm').innerHTML = searchTerm;
    return;
  }

  setNotification('Good news! I found something');
  show('resultPanel');

  var link = document.getElementById('resultLink');
  link.href = tutorials[ref].link;
  link.innerHTML = tutorials[ref].title;
}

function depthSearch() {
  visited = {};
  for (key in tutorials)
    visited[key] = false;

  result(DFS('init'));
}


function DFS(key) {
  var node = tutorials[key];
  if (node.isFinal && (fullMatch(searchTerm, node.title) || fullMatch(searchTerm, node.content))
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
  var matchHash = {};
  for (key in tutorials)
    matchHash[key] = -1;

  var maxMatch;
  var maxMatchKey;
  var maxMatchNode;
  var nodeKey = 'init';
  var node = tutorials['init'];

  while (true) {
    maxMatch = -1;
    maxMatchNode = null;

    for (var i = 0; i < node.related.length; i++) {
      matchHash[node.related[i]] = calculateMatch(searchTerm, tutorials[node.related[i]]);
      if (matchHash[node.related[i]] > maxMatch) {
        maxMatch = matchHash[node.related[i]];
        maxMatchKey = node.related[i];
        maxMatchNode = tutorials[node.related[i]];
      }
    }
    if (node.isFinal && maxMatch <= matchHash[nodeKey]) {
      result(nodeKey);
      return;
    }
    nodeKey = maxMatchKey;
    node = maxMatchNode;
  }
}

function calculateMatch(query, node) {
  var words = query.split(' ').map(word => word.toLowerCase())

  var titleMatch = 0;
  for (var i = 0; i < words.length; i++)
    titleMatch += matchCount(words[i], node.title.toLowerCase());

  var contentMatch = 0;
  for (var i = 0; i < words.length; i++)
    contentMatch += matchCount(words[i], node.content.toLowerCase());

  console.log('tmatch - ' + titleMatch);
  console.log('cmatch - ' + contentMatch);

  return titleMatch * 5 + contentMatch;
}

function matchCount(word, text) {
  var count = 0;

  var index = text.indexOf(word);
  while (index != -1) {
    count++;
    text = text.slice(index + word.length);
    index = text.indexOf(word);
  }

  return count;
}

function init(event) {
  event.preventDefault();

  var searchBox = document.getElementById('searchBox').value;
  var depth = document.getElementById('depth').checked;
  var hillClimbing = document.getElementById('hillClimbing').checked;
  if (searchBox === '' || (!depth && !hillClimbing)) {
    setNotification('You must complete the form');
    return;
  }

  searchTerm = searchBox;
  hide('formPanel');
  setNotification('I am working, please wait ...');
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

  setNotification('Insert a new term');
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
