describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })


  const pokemons = [
    {
      name: 'ivysaur',
      url: 'https://pokeapi.co/api/v2/pokemon/2/',
      hiddenAbility: 'chlorophyll',
    },
    {
      name: 'venusaur',
      url: 'https://pokeapi.co/api/v2/pokemon/3/',
      hiddenAbility: 'overgrow',
    },
  ]

  it('can navigate to a Pokemon\'s details page', function () {
    cy.visit('http://localhost:5000')

    pokemons.forEach((pokemon) => {

      cy.contains(pokemon.name).click()

      cy.get('div').should('contain', pokemon.name)


      if (pokemon.hiddenAbility) {
        cy.get('.pokemon-ability-name').should('contain', pokemon.hiddenAbility)
      }

      cy.go('back')
    })
  })
})
