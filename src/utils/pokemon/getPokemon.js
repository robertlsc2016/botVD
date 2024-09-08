const axios = require("axios");
const fs = require("fs");
const path = require("path");
const store = require("../../redux/store");
const { start_WhosThatPokemon } = require("../../redux/actions/actions");

const rootPathPokemonFiles = path.resolve(
  __dirname,
  "..",
  "..",
  "..",
  "images",
  "pokemons-media"
);
const pathBackground_Photo = path.resolve(
  rootPathPokemonFiles,
  "background.png"
);
const pathInput_PokemonPhoto = path.resolve(
  rootPathPokemonFiles,
  "pokemon.png"
);
const pathDarkened_PokemonPhoto = path.resolve(
  rootPathPokemonFiles,
  "pokemon_darkened.png"
);
const pathMergedPhotos = path.resolve(
  rootPathPokemonFiles,
  "merged_normal.png"
);
const pathMergedPhotosDarkened = path.resolve(
  rootPathPokemonFiles,
  "merged_darkened.png"
);

module.exports.getPokemon = async function () {
  const randomNumber = Math.floor(Math.random() * 1025) + 1;

  const pokemon = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${randomNumber}`
  );

  const url_photo = pokemon.data.sprites.front_default;

  const response = await axios({
    url: url_photo,
    method: "GET",
    responseType: "stream",
  });

  console.log(pokemon.data.species.name);

  await store.dispatch(start_WhosThatPokemon(pokemon.data.species.name));

  const writer = fs.createWriteStream(pathInput_PokemonPhoto);
  return await new Promise((resolve, reject) => {
    response.data.pipe(writer);
    writer.on("finish", resolve);
    writer.on("error", reject);
  });

  // return pokemon.data.species.name;
};
