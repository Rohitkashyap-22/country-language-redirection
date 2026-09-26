// country, urlto
// ]
// visitor = "US"
// language = can be multiple in a country
// redirect user as per language and country

// ----------------------main---------------
// fetch the json file
const visitor = "UK"
const language = "spanish"
let url = null
for(let i=0; i<countries.length; i++){

    if(countries[i].country === visitor){

        for(let j=0; j<countries[i].urls.length; j++){

            if(countries[i].urls[j].lang === language){

                url = countries[i].urls[j].urlto_1;
                console.log(url);
            }
        }
        break;

    }
}

window.location.href = url
