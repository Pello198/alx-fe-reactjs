import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import FavoriteButton from './FavoriteButton';
const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  if (!filteredRecipes || filteredRecipes.length === 0)
    return <p>No recipes found.</p>;

  return (
    <div>
      <h2>Filtered Recipes</h2>

      {filteredRecipes.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: '1rem' }}>
          <h3>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
          <h3>
  <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
  <FavoriteButton recipeId={recipe.id} />
</h3>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
