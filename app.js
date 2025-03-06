const pokemon = require('./data')

const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }
  
//   console.dir(pokemon, { maxArrayLength: null })
//Exercise 1:
console.log("Excercise 2",game);
//use console.log() to log JUST the name of the Pokemon with the number 59 using the index of the Pokemon in the array.

function getPokemonName(number) {
    for (let i=0; i < pokemon.length; i++) {
        if (pokemon[i].number === number) {
            return pokemon[i].name;
        }
   }
}
const pokemonName = getPokemonName(59);
// //Exercise 2

// console.log(pokemonName)

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/

game.difficulty= [ "easy", "medium", "hard", "super hard"]
console.log('Exercise 3', game.difficulty)

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?
*/

let starterPokemon;
for (let i=0; i< pokemon.length; i++) {
  if (pokemon[i].starter === true) {
    starterPokemon = pokemon[i];
    if  (game.party.length > 1){
    game.party.push(starterPokemon)
    }
  }
}

console.log("Exercise 4 Part One",game.party)
console.log('Exercise 4 Part Two',starterPokemon)

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?

method
filer
find

choose only 3!

seach by HP or Type

Solve Exercise 5 here:
*/

let selectedPokemon = [];
for (let i=0; i<pokemon.length; i++) {
  if(pokemon [i].type === "Fire" || pokemon [i].hp > 50) {
    selectedPokemon.push(pokemon [i]);
  }
  if (selectedPokemon.length === 3) {
    break;
  }
}

console.log ('Excercise 5', game)

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/

for (let i=0; i< game.gyms.length; i++) {
  if(game.gyms [i].difficulty < 3) {
    game.gyms[i].completed= true; 
  }
}
console.log('Excercise 6',game.gyms);

 /*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/

// function evolvePokemon (party) {

// for (let i=0; i< party.length; i++) {
//   let pokemon = party [i];
//   if (evolutions[pokemon.id]) {
//     party.slice(i, 1, evolutions[pokemon.id]);
//   }
// }
// }

// evolvePokemon(party);

// console.log ("Excercise 7", evolvePokemon);