import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault();

    updateRecipe({
      id: recipe.id,
      title,
      description,
    });

    alert('Recipe updated!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Title"
      />

      <textarea
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Description"
      />

      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
