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
    // console.log(cuntry.capital?cuntry.capital[0]:'not fund')
    const {flags,name,capital}=cuntry
    return `
        <div class='country'>
            <img src="${flags.png}" alt="">
            <h3>Nmae:${name.common}</h3>
            <h3>Capital:${capital?capital[0]:'not fund'}</h3>    
        </div>
    
    `
}

loadAllCuntries()