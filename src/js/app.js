var searchTerm;


// Interface auxiliary functions
function show(id) {
  document.getElementById(id).style.display = 'block';
}

function hide(id) {
  document.getElementById(id).style.display = 'none';
}

function setNotification(msg) {
  document.getElementById('agentMsg').innerHTML = msg;
}

// Shows the result on the page
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


// Initializes the needed hash and calls the main dfs function and result()
function depthSearch() {
  // visited is a hash with every node's visitation status
  visited = {};
  for (key in tutorials)
    visited[key] = false;

  result(DFS('init'));
}


// Walks through the graph depth first looking for a match
function DFS(key) {
  var node = tutorials[key];

  // Returns the key of the current node
  // if it is a final state
  // and if it finds a match of the query words
  // in the node title or in the node content
  if (node.isFinal && (fullMatch(searchTerm, node.title) || fullMatch(searchTerm, node.content)))
    return key;

  // Marks it as visited
  visited[key] = true;

  // Iterate the related array of the current node calling dfs
  // and returns tha result of the children if a match is found
  for (var i = 0; i < node.related.length; i++) {
    if (visited[node.related[i]] == false) {
      var answer = DFS(node.related[i]);
      if (answer != null)
        return answer;
    }
  }

  // Returns null if the current node or
  // it's direct and indirect children are not matches
  return null;
}


// Returns true if every word of s1 is contained in s2
// or false otherwise
function fullMatch(s1, s2) {
  s2 = s2.toLowerCase();
  var words = s1.split(' ').map(word => word.toLowerCase());

  for (var i = 0; i < words.length; i++)
    if (s2.indexOf(words[i]) == -1)
      return false;

  return true;
}


// Greedily walks through the graph looking for the best match value
function hillClimbingSearch() {
  // Initializes a hash with a custom match value
  var matchHash = {};
  for (key in tutorials)
    matchHash[key] = -1;

  // Initializes the variables used
  var maxMatch;
  var maxMatchKey;
  var maxMatchNode;
  var nodeKey = 'init';
  var node = tutorials['init'];

  // Iterate through the nodes
  while (true) {
    maxMatch = -1;
    maxMatchNode = null;

    // Finds the best child node
    for (var i = 0; i < node.related.length; i++) {
      matchHash[node.related[i]] = calculateMatch(searchTerm, tutorials[node.related[i]]);
      if (matchHash[node.related[i]] > maxMatch) {
        maxMatch = matchHash[node.related[i]];
        maxMatchKey = node.related[i];
        maxMatchNode = tutorials[node.related[i]];
      }
    }

    // Returns the current node if all other nodes are worse or equal to the current
    if (node.isFinal && maxMatch <= matchHash[nodeKey]) {
      result(nodeKey);
      return;
    }

    // If not, makes the current node be the best child node
    nodeKey = maxMatchKey;
    node = maxMatchNode;
  }
}


// Calculates a match score for a query in a node
// Title matches are 5 times more valuable than content matches
function calculateMatch(query, node) {
  var words = query.split(' ').map(word => word.toLowerCase())

  var titleMatch = 0;
  for (var i = 0; i < words.length; i++)
    titleMatch += matchCount(words[i], node.title.toLowerCase());

  var contentMatch = 0;
  for (var i = 0; i < words.length; i++)
    contentMatch += matchCount(words[i], node.content.toLowerCase());

  return titleMatch * 5 + contentMatch;
}


// Returns the amount of occurences of a word in a text
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


// Initializes the page and variables
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


// Restarts user interaction
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
