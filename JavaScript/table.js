


async function render(){
   
    const response = await fetch('http://localhost:8080/coutrytable');
    
    
    const countries= await response.json();

    
     let table='';

    for (const country of countries){
        table+=`<tr>
        <th scope="row">${country.name}</td>
        <td class="text-end">${country.area}</td>
        <td class="text-end">${country.population}</td>
        <td>${country.capital}</td></tr>`;
    }

    let tbody=document.querySelector("#countriesTable");
    tbody.innerHTML=table;

}

 
window.addEventListener('load',render());

