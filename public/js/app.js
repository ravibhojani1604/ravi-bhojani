

function submit() {
    const city = document.getElementById("myCity").value
    const url = `http://api.weatherapi.com/v1/current.json?key=56db5f9fca4b40668c5163421232804&q=${city}`;
    const name = document.getElementById("name");
    const region = document.getElementById("region")
    const text = document.getElementById("text")
    const header = document.getElementById("headerjs")
    const img = document.getElementById("myImg")


    fetch(url)
        .then(response => response.json())
        .then(jsonData => {
            name.innerHTML = (jsonData.location.country);
            region.innerHTML = (jsonData.location.region);
            text.innerHTML = (jsonData.current.condition.text);
            img.src = "/images icon/day/116.png"

            geoData("ami", (hi, name) => {
                console.log(hi, name)
            })
        }
        )
}