
const reset = document.getElementById("btnReset");
const btnSearch = document.getElementById('btnSearch');

function searchKeywords() {
    const input = document.getElementById('recommendationKey').value.toLowerCase();
    console.log(input);
    const resultDiv1 = document.getElementById('result1');
    const resultDiv2 = document.getElementById('result2');
    resultDiv1.innerHTML = '';
    resultDiv2.innerHTML = '';
   
    fetch('/travel_recommendation_api.json')
      .then(response => response.json())
      //.then(json => console.log(JSON.stringify(json)))
      .then(data => {
        if (input == 'countries' || input == 'country'){
          console.log('You are looking for countries? There you go!');            
            console.log('found something');
            const city1 = data.countries[0].cities[0];
            const description1 = city1.description;
            resultDiv1.innerHTML += `<h1>You are looking for ${input}? Here you go!</h1>`;
            resultDiv1.innerHTML += `<h2>${city1.name}</h2>`;
            resultDiv1.innerHTML += `<img src="${city1.imageUrl}" alt="hjh">`;
            resultDiv1.innerHTML += `<p> ${description1}</p>`;

            const city2 = data.countries[1].cities[0];
            const description2 = city2.description;
            resultDiv2.innerHTML += `<h2>${city2.name}</h2>`;
            resultDiv2.innerHTML += `<img src="${city2.imageUrl}" alt="hjh">`;
            resultDiv2.innerHTML += `<p> ${description2}</p>`;  
        } else if (input == 'beaches' || input == 'beach'){
          console.log('You are looking for beaches? There you go!');            
          console.log('found something');
          const beach1 = data. beaches[0];
          const description1 = beach1.description;
          resultDiv1.innerHTML += `<h2>${beach1.name}</h2>`;
          resultDiv1.innerHTML += `<img src="${beach1.imageUrl}" alt="hjh">`;
          resultDiv1.innerHTML += `<p> ${description1}</p>`;
          resultDiv1.innerHTML += `<p></p>`;

          const beach2 = data.beaches[1];
          const description2 = beach2.description;
          resultDiv2.innerHTML += `<h2>${beach2.name}</h2>`;
          resultDiv2.innerHTML += `<img src="${beach2.imageUrl}" alt="hjh">`;
          resultDiv2.innerHTML += `<p> ${description2}</p>`; 

        } else if (input == 'temples' || input == 'temple'){
          console.log('You are looking for beaches? There you go!');            
          console.log('found something');
          const temple1 = data.temples[0];
          const description1 = temple1.description;
          resultDiv1.innerHTML += `<h2>${temple1.name}</h2>`;
          resultDiv1.innerHTML += `<img src="${temple1.imageUrl}" alt="hjh">`;
          resultDiv1.innerHTML += `<p> ${description1}</p>`;

          const temple2 = data.temples[1];
          const description2 = temple2.description;
          resultDiv2.innerHTML += `<h2>${temple2.name}</h2>`;
          resultDiv2.innerHTML += `<img src="${temple2.imageUrl}" alt="hjh">`;
          resultDiv2.innerHTML += `<p> ${description2}</p>`;  
                                    
        }else {
            resultDiv1.innerHTML = 'Unfortunately, we could not find anything for you.';
          }     
        
      })
      .catch(error => {
        console.error('Error:', error);
        resultDiv1.innerHTML = 'An error occurred while fetching data.';
      });
  }

  function clearAll(){
    const resultDiv1 = document.getElementById('result1');
    const resultDiv2 = document.getElementById('result2');
    const searchBar = document.getElementById('recommendationKey');
    resultDiv1.innerHTML = '';
    resultDiv2.innerHTML = '';
    recommendationKey.innerHTML = '';
    recommendationKey.setAttribute('placeholder', 'What are you looking for?');

  }
  reset.addEventListener('click', clearAll);
  btnSearch.addEventListener('click', searchKeywords);