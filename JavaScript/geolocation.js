   
   
   
   async function render(){
    
    let response = await fetch("https://restcountries.com/v3.1/region/europe/?fields=name,capital,latlng,cca2");
    const countries = await response.json();

     let content = " ";
     for(country of countries){
      if(country.cca2== "FR"){
        content+=`<option value="${country.cca2}" selected>${country.name.official}</option>`;
      } else {
          content +=`<option value="${country.cca2}">${country.name.official}</option>`;
      }
     };
      document.querySelector('#selectcountry').innerHTML=content;
     
      
    
      
      
      response = await fetch(`https://restcountries.com/v3.1/alpha/${country.cca2}?fields=capitalInfo`);
      let mapCountry = await response.json();

      let lat = mapCountry.capitalInfo.latlng[0];
      let lng = mapCountry.capitalInfo.latlng[1];
      
      let iframe= document.querySelector('#frame');
      iframe.src=`https://www.google.com/maps/embed/v1/view?key=AIzaSyAN4FJKQD29unJZAKxZh94FQB0nmYB3rpY&center=${lat},${lng}&zoom=10`;
  
     
    
        const selectOption=document.querySelector('#selectcountry');
        selectOption.addEventListener('change',async(event)=>{
         response = await fetch(`https://restcountries.com/v3.1/alpha/${event.target.value}?fields=capitalInfo`);
         let mapChange = await response.json();
         let lat1 = mapChange.capitalInfo.latlng[0];
         let lng2 = mapChange.capitalInfo.latlng[1];
        
        iframe =document.querySelector('#frame');
        iframe.src=`https://www.google.com/maps/embed/v1/view?key=AIzaSyAN4FJKQD29unJZAKxZh94FQB0nmYB3rpY&center=${lat1},${lng2}&zoom=10`;
        });
        

}

window.addEventListener('load',render());





