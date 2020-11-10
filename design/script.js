const pgData = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';

const categories = [];

fetch(pgData)
  .then(blob => blob.json())
  .then(data => categories.push(...data))  /*... == spreading into the push!*/

function findMatching(wordsToMatch, categories){
  return categories.filter((place) => {
    const matches = new RegExp(wordsToMatch, 'gi'); 
    /* g = global, i = insensitive */
    if(wordsToMatch === '') {
      return null;
    }
    return place.category.match(matches);
  });
}

function displayMatches() {
  const matchingArray = findMatching(this.value, categories);
  const html = matchingArray.map((place) => {
    return `
      <li>
        <span class = "name">${place.name}</span>
        <span class = "location">${place.city}, ${place.state}, ${place.zip}</span>
        <span class = "category">${place.category}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);


