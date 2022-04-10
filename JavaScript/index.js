
async function render(){
    const result = await fetch('http://localhost:8080/CountryNames');
    const countries= await result.json();
    let content='';
    for(const country of countries){
        content += `<li>${country.name}</li>`;    
    }
    const ul = document.querySelector("#countries");
    ul.innerHTML =content;
}
window.addEventListener('load',render());