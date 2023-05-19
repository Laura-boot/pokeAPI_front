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
    var pokemonNameDisplay = document.getElementById('pokemon-name-display');
    var pokemonImage = document.getElementById('pokemon-image');
    var pokemonNumber = document.getElementById('pokemon-number');
  
    pokemonNameDisplay.textContent = pokemon.name;
    pokemonImage.src = pokemon.sprites.front_default;
    pokemonNumber.textContent = 'Pokédex #: ' + pokemon.id;
  
    document.getElementById('pokemon-info').classList.remove('hidden');
  }
  