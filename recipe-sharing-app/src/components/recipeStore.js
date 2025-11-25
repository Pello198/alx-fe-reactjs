import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: '',

  favorites: [],
  recommendations: [],

  // ---- Recipe CRUD ----
  addRecipe: (newRecipe) =>
    set((state) => {
      const updated = [...state.recipes, newRecipe];
      return {
        recipes: updated,
        filteredRecipes: updated.filter((recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const updated = state.recipes.filter((r) => r.id !== id);
      return {
        recipes: updated,
        filteredRecipes: updated.filter((recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
        favorites: state.favorites.filter((favId) => favId !== id),
      };
    }),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updated = state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      );
      return {
        recipes: updated,
        filteredRecipes: updated.filter((recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),

  // ---- Search & Filter ----
  setSearchTerm: (term) =>
    set((state) => {
      const filtered = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );
      return { searchTerm: term, filteredRecipes: filtered };
    }),

  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

setRecipes: (recipes) =>
  set((state) => ({
    recipes,
    filteredRecipes: recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    ),
  })),

  // ---- Favorites ----
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // ---- Recommendations ----
  generateRecommendations: () =>
    set((state) => {
      const favoriteRecipes = state.recipes.filter((recipe) =>
        state.favorites.includes(recipe.id)
      );

      // Mock recommendation logic
      const recommended = state.recipes.filter(
        (recipe) =>
          !state.favorites.includes(recipe.id) &&
          favoriteRecipes.some(
            (fav) =>
              recipe.title
                .toLowerCase()
                .includes(fav.title.toLowerCase().split(' ')[0]) ||
              Math.random() > 0.7
          )
      );

      return { recommendations: recommended };
    }),
}));
