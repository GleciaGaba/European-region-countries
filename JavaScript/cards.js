


async function render(){
    const response = await fetch('http://localhost:8080/countrycard');
    const countries= await response.json();
  
    let cards=" ";

    for (const country of countries){
    
        cards += `<div id="cards"  class="card-group g-4" >
                    <div class="col">
                        <div class="card h-100">
                            <a  href="${country.maps}" target="_blank">
                            <img  src="${country.flag}" class="card-img-top" alt=""></a>
                            <div class="card-body">
                                <h5 class="row card-title">${country.name}</h5>
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
