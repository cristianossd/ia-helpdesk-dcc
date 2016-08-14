var seachTerm;

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

hide('loading');
hide('resultPanel');
hide('fail');

var form = document.getElementById('submit');
form.addEventListener('click', init);
