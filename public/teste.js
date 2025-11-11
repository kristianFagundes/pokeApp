let response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
let body = await response.json()
let habilidades = body["abilities"]
let habilidade = habilidades[0]
let habilidade2 = habilidade ["ability"]
console.log(habilidade2["url"])

