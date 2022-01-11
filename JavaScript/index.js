
async function render(){
    const result=await fetch('https://restcountries.com/v3.1/subregion/europe?fields=name');
    const countries= await result.json();
    let content='';
    for(const country of countries){
        content += `<li>${country.name.official}</li>`;    
    }
    const li = document.querySelector("#countries");
    li.innerHTML =content;
}
window.addEventListener('load',render());