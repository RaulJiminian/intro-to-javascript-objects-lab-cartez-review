/*
  ✨ Code Review & Refactor Suggestions ✨
  Great work implementing game logic and working with objects and arrays! 
  The following suggestions will improve readability, consistency, and efficiency 
  while keeping everything beginner-friendly. Keep up the great work! 🚀
*/

const pokemon = require("./data");

// ✅ Game Object: Well-structured! Correctly uses arrays and objects.
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
};

// ✅ Exercise 2: Console logging `game`
console.log("Exercise 2:", game);

// ✅ Exercise 3: Add a difficulty level
// Slight improvement: Keeping a single string instead of an array of difficulty levels.
game.difficulty = "Hard";
console.log("Exercise 3:", game.difficulty);

// ✅ Exercise 4: Select a starter Pokémon
const starterPokemon = pokemon.find((p) => p.starter);
game.party.push(starterPokemon);
console.log("Exercise 4:", game.party);

// ✅ Exercise 5: Add three more Pokémon
// Improved: Using `.filter()` instead of a loop.
const additionalPokemon = pokemon
  .filter((p) => p.type === "Fire" || p.hp > 50)
  .slice(0, 3);
game.party.push(...additionalPokemon);
console.log("Exercise 5:", game.party);

// ✅ Exercise 6: Complete gyms with difficulty < 3
game.gyms.forEach((gym) => {
  if (gym.difficulty < 3) gym.completed = true;
});
console.log("Exercise 6:", game.gyms);

// ✅ Exercise 7: Evolve the starter Pokémon
const evolvedIndex = starterPokemon.number;
game.party[0] = pokemon[evolvedIndex]; // Replaces with evolved form
console.log("Exercise 7:", game.party);

// ✅ Exercise 8: Print Pokémon names in party
game.party.forEach((p) => console.log("Exercise 8:", p.name));

// ✅ Exercise 9: Print all starter Pokémon
pokemon
  .filter((p) => p.starter)
  .forEach((p) => console.log("Exercise 9:", p.name));

// ✅ Exercise 10: `catchPokemon` method
game.catchPokemon = function (pokemonObj) {
  this.party.push(pokemonObj);
};
game.catchPokemon(pokemon[98]);
console.log("Exercise 10:", game.party);

// ✅ Exercise 11: Catching Pokémon reduces pokeballs
game.catchPokemon = function (pokemonObj) {
  const pokeball = this.items.find((item) => item.name === "pokeball");
  if (pokeball.quantity > 0) {
    this.party.push(pokemonObj);
    pokeball.quantity--;
  }
};
game.catchPokemon(pokemon[150]);
console.log("Exercise 11:", game.items);

// ✅ Exercise 12: Complete gyms with difficulty < 6
game.gyms.forEach((gym) => {
  if (gym.difficulty < 6) gym.completed = true;
});
console.log("Exercise 12:", game.gyms);

// ✅ Exercise 13: `gymStatus` method
game.gymStatus = function () {
  const gymTally = { completed: 0, incomplete: 0 };

  this.gyms.forEach((gym) => {
    gym.completed ? gymTally.completed++ : gymTally.incomplete++;
  });

  return gymTally;
};
console.log("Exercise 13:", game.gymStatus());

// ✅ Exercise 14: `partyCount` method
game.partyCount = function () {
  return this.party.length;
};
console.log("Exercise 14:", game.partyCount());

// ✅ Exercise 15: Complete gyms with difficulty < 8
game.gyms.forEach((gym) => {
  if (gym.difficulty < 8) gym.completed = true;
});
console.log("Exercise 15:", game.gyms);

// ✅ Exercise 16: Log final `game` object
console.log("Exercise 16:", game);
