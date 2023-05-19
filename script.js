document.getElementById('search-button').addEventListener('click', function() {
    var pokemonName = document.getElementById('pokemon-name').value.toLowerCase();
    if (pokemonName.trim() === '') {
      return;
    }
    
    fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonName)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(function(data) {
        displayPokemonInfo(data);
      })
      .catch(function(error) {
        console.log('Erro:', error);
        alert('Pokemon não encontrado!');
      });
  });

  
  function displayPokemonInfo(pokemon) {
    //var pokemonImage = document.getElementById('pokemon-image');

    pokemonImage.src = pokemon.sprites.front_default;
    pokemonName = pokemon.name;
    pokemonID = pokemon.id;

    document.getElementById('pokemon-info').classList.remove('hidden');
  }
  
  var pokeballImage = document.getElementById('pokeball-image');
  var pokemonImage = document.getElementById('pokemon-image');

  var pokemonName;
  var pokemonID;

  pokeballImage.addEventListener('click', function() {
    var pokemonNameDisplay = document.getElementById('pokemon-name-display');
    var pokemonNumber = document.getElementById('pokemon-number');

    pokeballImage.style.position = 'absolute';
    pokeballImage.style.zIndex = -1;

    pokemonImage.classList.toggle('hidden');
    
    pokemonNameDisplay.textContent = pokemonName;
    pokemonNumber.textContent = 'Pokédex #: ' + pokemonID;


  });
