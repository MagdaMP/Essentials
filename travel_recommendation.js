
const reset = document.getElementById("btnReset");
const btnSearch = document.getElementById('btnSearch');

function searchKeywords() {
    const input = document.getElementById('recommendationKey').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    //resultDiv.innerHTML = '';
    fetch('/travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        const country = data.countries.find(item => item.name.toLowerCase() === input);
        if (country) {
          const city = country.cities[1];
          const description = city.description;
          resultDiv.innerHTML += `<h2>${city.name}</h2>`;
          resultDiv.innerHTML += `<img src="${city.imageUrl}" alt="hjh">`;
          resultDiv.innerHTML += `<p> ${description}</p>`;
          //resultDiv.innerHTML += `<p><strong>Prevention:</strong> ${prevention}</p>`;
          //resultDiv.innerHTML += `<p><strong>Treatment:</strong> ${treatment}</p>`;
        } else {
          resultDiv.innerHTML = 'Unfortunately, we could not find anything for you.';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
      });
  }
    btnSearch.addEventListener('click', searchKeywords);