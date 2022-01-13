


async function render(){
   
    const response = await fetch('https://restcountries.com/v3.1/region/europe?fields=name,area,population,capital');
    
    
    const countries= await response.json();

    const FORMATER = new Intl.NumberFormat('en-US');
    
     let table='';

    for (const country of countries){
        table+=`<tr>
        <th scope="row">${country.name.official}</td>
        <td class="text-end">${FORMATER.format(country.area)}</td>
        <td class="text-end">${FORMATER.format(country.population)}</td>
        <td>${country.capital[0]}</td></tr>`;
    }

    let tbody=document.querySelector("#countriesTable");
    tbody.innerHTML=table;

}

 
window.addEventListener('load',render());

