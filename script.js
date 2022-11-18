const countryContainer = document.querySelector('.countries')

const butt = document.getElementById("butt");
butt.onclick = function(){ 
  getCountry(document.getElementById("country")); 
  document.getElementById('country').value = "";
};

function getCountry(element){
  console.log(element.value);
}

const getCountryInfo = (countryName) =>{
  const xhr = new XMLHttpRequest();
  xhr.open('GET',`https://restcountries.com/v3.1/name/${countryName}`)
  xhr.send();
  xhr.addEventListener('load', function(){
    const [data] = JSON.parse(this.responseText)
    console.log(data)
    // get unique key object (money)
    const currencies = data.currencies;
    const currenciesName = Object.values(currencies)[0].name;
    const currenciesSymbol = Object.values(currencies)[0].symbol;
     // get unique key object (language)
     const language = data.languages
     const languageName = Object.values(language)[0];
    const country = `
    <div class="country">
      <img class="country_img" src="${data.flags.svg}" alt="country ${data.name.common}">
      <div class="country_info">
        <h1 class="country_name">${data.name.common}</h1>
        <h3 class="country_region">${data.continents[0]}</h3>
        <p class="country_info_text"><span class="symbol">&#128378;</span> - ${(+data.population / 1000000).toFixed(2)} млн людей</p>
        <p class="country_info_text"><span class="symbol">&#128483;</span> - ${languageName}</p>
        <p class="country_info_text"><span class="symbol">&#128176;</span> - ${currenciesSymbol} ${currenciesName}</p>
      </div>
    </div>`;
    countryContainer.insertAdjacentHTML('beforeend', country);
  });
}
getCountryInfo('ukraine')
getCountryInfo('canada')
getCountryInfo('usa')





