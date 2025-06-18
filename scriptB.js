const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const dataContainer = document.querySelector('.data-container');
const dataElements = document.querySelectorAll('.data');

searchButton.addEventListener('click', searchData);

function searchData() {
  const searchValue = searchInput.value.toLowerCase();
  dataElements.forEach((data) => {
    const dataId = data.id.toLowerCase();
    if (dataId.includes(searchValue)) {
      data.classList.remove('hidden');
    } else {
      data.classList.add('hidden');
    }
  });
}