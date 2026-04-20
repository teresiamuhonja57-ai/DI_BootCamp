const url = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

fetch(url)
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Unable to fetch data");
        }
    })
    .then(data => console.log(data))
    .catch(error => console.log(error));

    //exercise2
    const sunUrl = "https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10&offset=2";

fetch(sunUrl)
    .then(response => {
        if (response.ok) return response.json();
        throw new Error("Failed to fetch sun gifs");
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));
    //exercise3
    async function getStarship() {
    try {
        const response = await fetch("https://www.swapi.tech/api/starships/9/");
        
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        
        const data = await response.json();
        console.log(data.result);
    } catch (error) {
        console.log("Error caught:", error);
    }
}

getStarship();
