
// Lunr Search

var idx = null;
var resultDetails = [];
var $searchResults;
var $searchInput;
window.onload = function () {
var request = new XMLHttpRequest();
var query = '';
  $searchResults = document.getElementById('searchResults');
  $searchInput   = document.getElementById('searchInput');
  query          = (getParameterByName('q')) ? getParameterByName('q').trim() : '';
request.overrideMimeType("application/json");
request.open("GET", "/search.json", true);
request.onload = function() {
if (request.status >= 200 && request.status < 400) {
// Success!


var documents = JSON.parse(request.responseText);
idx = lunr(function () {
this.ref('ref');
this.field('title');
this.field('excerpt');
this.field('body');
documents.forEach(function(doc) {
this.add(doc);
resultDetails[doc.ref] = {
'title': doc.title,
'excerpt': doc.excerpt,
            };
        }, this);
      });
if (query != '') {
$searchInput.value = query;
renderSearchResults(search(query));

      }
    } else {
$searchResults.innerHTML = 'Error loading search results';
    }
  };
request.onerror = function() {
$searchResults.innerHTML = 'Error loading search results';
  };
request.send();
registerSearchHandlers();
};
function registerSearchHandlers() {
$searchInput.oninput = function(event) {
var query = event.target.value + '*';
var results = search(query);
updateQueryParam(query);

renderSearchResults(results);
  }
}
function search(query) {
return idx.search(query);
}
function renderSearchResults(results) {
// Create a list of results
var ul = document.createElement('ul');
if (results.length > 0) {
results.forEach(function(result) {
// Create result item
var li = document.createElement('li');
li.classList.add('search-item');
li.innerHTML = '<a href="' + result.ref + '"><h3>' + resultDetails[result.ref].title + '</h3><p>' + resultDetails[result.ref].excerpt + '</p></a>';
ul.appendChild(li);
    });
// Remove any existing content
while ($searchResults.hasChildNodes()) {
$searchResults.removeChild(
$searchResults.lastChild
      );
    }
  } else {
$searchResults.innerHTML = 'No results found';
  }
// Render the list
$searchResults.appendChild(ul);
}
function getParameterByName(name, url) {
if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
if (!results) return null;
if (!results[2]) return '';
return decodeURIComponent(results[2].replace(/\+/g, " "));
}
function updateQueryParam(query) {
history.pushState('', '', '/?q=' + query);
}

document.getElementById("searchForm").onkeypress = function(e) {
  var key = e.charCode || e.keyCode || 0;     
  if (key == 13) {
    e.preventDefault();
  }
}