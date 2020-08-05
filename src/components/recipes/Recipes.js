import React, { Component } from 'react'
import RecipeItem from "./RecipeItem"

class Recipes extends Component {

  render() {
    return (
      <div style={userStyle}>
        {this.state.recipes.map(recipe => (
          <RecipeItem key={recipe.uri} recipe={recipe} />
        ))}
      </div>
    )
  }
}

//pasar estilos como
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

export default Recipes
