const planetList = document.getElementById("planet-list")
let planetNames = []

fetch("https://swapi.dev/api/planets")
.then(r => r.json())
.then(data => {
    console.log(data)
    planetNames = data.results.filter(planet => {
        return planet.climate !== "frozen"
    }).map(planet => {
        return planet.name.toUpperCase()
    })
    addPlanets()
})

function addPlanetsToDom(){
    planetNames.forEach(planet => {
        const el = document.createElement('li')
        el.innerText = planet
        planetList.append(el)
    })
}
