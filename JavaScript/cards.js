


async function render(){
    const response = await fetch('https://restcountries.com/v3.1/region/europe?fields=flags,name,capital,maps');
    const countries= await response.json();
  
    let cards=" ";

    for (const country of countries){
    
        cards += `<div id="cards"  class="row row-cols-2 row-cols-md-5 g-4" >
                    <div class="col">
                        <div class="card h-100" style="width: 14rem;">
                            <a  href="${country.maps.openStreetMaps}" target="_blank">
                            <img  src="${country.flags.png}" class="card-img-top" alt=""></a>
                            <div class="card-body">
                                <h5 class="row card-title">${country.name.official}</h5>
                                <p class="row card-text">${country.capital}</p>
                            </div>
                
                         </div>
                    </div> 
                </div>`;                                      
    
    }

    let div= document.querySelector("#cards");
    div.innerHTML=cards;

}
window.addEventListener('load',render());
