const box = document.getElementById('countrybox');

async function addCountries() {
  const json = await fetch('https://restcountries.com/v3.1/all').then(async (res) => await res.json());
  const countryList = [];

  for (let i = 0; i < json.length; i++) {
    countryList.push(json[i]);
  }

  countryList.sort((a, b) => a.population - b.population);

  const list = document.createElement('ul');

  countryList.forEach((country) => {
    const item = document.createElement('li');

    item.innerHTML = `<p class="countryHeader ${country.region.toLowerCase()}">${country.flag} ${country.name.common}</p><br /><p class="countryPopulation">Has a population of ${country.population} people.</p><br/>`;

    list.appendChild(item);
  });

  box.appendChild(list);

  console.log(countryList);
}

addCountries();