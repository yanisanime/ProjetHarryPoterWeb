// apiService.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.potterdb.com/v1',
});
//******************************************************************************************* pour les livres
const getLivres = (pageNumber, pageSize) => {
  const url = `/books?page[number]=${pageNumber}&page[size]=${pageSize}`;
  return apiClient.get(url);
};

//pour avoir un livre filtrer
const getLivreFilter = (livreName) => {
  const url =`/books?filter[name_cont]=${livreName}`;
  return apiClient.get(url);
}


//******************************************************************************************* pour les potions
const getPotions = (pageNumber, pageSize) => {
  const url = `/potions?page[number]=${pageNumber}&page[size]=${pageSize}`;
  return apiClient.get(url);
};

//pour avoir une potion filtrer
const getPotionFilter = (potionName) => {
  const url =`/potions?filter[name_cont]=${potionName}`;
  return apiClient.get(url);
};

//******************************************************************************************* pour les sorts
const getSpells = (pageNumber, pageSize, searchTerm) => {  
  let url = `/spells?page[number]=${pageNumber}&page[size]=${pageSize}`;
  if (searchTerm) {
    url += `&filter[name]=${encodeURIComponent(searchTerm)}`;
  }
  return apiClient.get(url);
};

//Pour avoir un sort filtrer
const getSpellFilter = (spellName) => {
  const url =`/spells?filter[name_cont]=${spellName}`;
  return apiClient.get(url);
};

//******************************************************************************************* pour les personnages
const getCharacters = (pageNumber, pageSize) => {
  const url =`/characters?page[number]=${pageNumber}&page[size]=${pageSize}`;
  return apiClient.get(url);
};

//pour avoir un personnage filtrer 
const getCharacterFilter = (characterName) => {
  const url =`/characters?filter[name_cont]=${characterName}`;
  return apiClient.get(url);};


//******************************************************************************************* Pour les films
const getMovies = (pageNumber, pageSize) => {  
  const url = `/movies?page[number]=${pageNumber}&page[size]=${pageSize}`;
  return apiClient.get(url);
};

//pour avoir les film filtrer
const getMovieFilter = (movieName) => {
  const url =`/movies?filter[name_cont]=${movieName}`;
  return apiClient.get(url);};

export default {
  getLivres,
  getPotions,
  getSpells,
  getCharacters,
  getMovies,
  getCharacterFilter,
  getMovieFilter,
  getSpellFilter,
  getPotionFilter,
  getLivreFilter,
};
