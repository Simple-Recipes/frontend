import axios from 'axios';

const API_URL = 'http://localhost:8080/recipes';

export interface RecipeDTO {
    title: string;
    ingredients: string[];
    directions: string[];
    link: string;
    source: string;
    ner: string[];
  }
  

export const publishRecipe = async (recipe: RecipeDTO, token: string): Promise<RecipeDTO> => {
  const response = await axios.post<RecipeDTO>(`${API_URL}/publish`, recipe, {
    headers: {
      'User-Token': token,
      'Content-Type': 'application/json'
    },
    withCredentials: true,
  });
  return response.data;
};
