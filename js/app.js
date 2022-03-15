const loadAllCuntries=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>allCountries(data))
}
const allCountries=(countries)=>{
    // console.log(countries)
    const countriesHtml=countries.map(cuntry=>getCountry(cuntry))
    const container=document.getElementById('countries')
    container.innerHTML=countriesHtml.join(' ')
}
const getCountry=(cuntry)=>{
    console.log(cuntry.flags.png)
    return `
        <div class='country'>
            <img src="${cuntry.flags.png}" alt="">
            <h3>${cuntry.name.common}</h3>
        </div>
    
    `
}

loadAllCuntries()