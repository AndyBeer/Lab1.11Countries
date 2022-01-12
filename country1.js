var Country = /** @class */ (function () {
    function Country(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
    return Country;
}());
var usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
var mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
var algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"]);
function SwitchCountry() {

    let input = document.getElementById("CountryList");
    var country;
    if (input.innerText === "USA") {
        //set country to usa 
        country = usa;
    }
    else if (input.innerText === "Mexico") {
        country = mexico;
    }
    else if (input.innerText === "Algeria") {
        country = algeria;
    }
    let a = country.name;
    console.log(a);
    document.getElementById("CountryName").innerText = country.name;
    document.getElementById("OfficialLanguage").innerText = country.lang;
    document.getElementById("HelloWorld").innerText = country.greeting
    DisplayColors(country);
}
function DisplayColors(country) {
    document.getElementById("Color1").style.backgroundColor = country.colors[0];
    document.getElementById("Color2").style.backgroundColor = country.colors[1];
    document.getElementById("Color3").style.backgroundColor = country.colors[2];
}
