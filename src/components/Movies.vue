<template>
  <Header />
  <div>
    <h1>Liste des Films</h1>
    <div class="search-container">
    <input class="BarreDeRecherche" type="text" v-model="searchTerm" @keyup.enter="performSearch" placeholder="Rechercher un film...">
    <button class="btnClasse" @click="cancelSearch">Annuler la recherche</button>
    </div>
    <!-- ICI on Affiche les films quand il y a eut une recherche -->
    <div v-if="searchTerm.length > 0">
      <p>Résultats de la recherche pour "{{ searchTerm }}"</p>
      <div class="movies-container" v-if="filteredMovies.length > 0">
        <div v-for="movie in filteredMovies" :key="movie.id" class="movie">
          <OneMovie :key="movie.id" :movie="movie.attributes" />
        </div>
      </div>
      <p v-else>Aucun film trouvé.</p>
    </div>
    <!-- ICI on affiche les films normalement par pagination -->
    <div v-else>
      <div class="movies-container" v-if="movies.length > 0">
        <div v-for="movie in movies" :key="movie.id" class="movie">
          <OneMovie :key="movie.id" :movie="movie.attributes" />
        </div>
      </div>
      <p v-else>Aucun film trouvé.</p>
    </div>

    <div class="LesButtons">
      <button class="btnClasse" @click="previousPage" :disabled="currentPage === 1">Page précédente</button>
      <span>{{ currentPage }}</span>
      <button class="btnClasse"  @click="nextPage" :disabled="currentPage === totalPages">Page suivante</button> 
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import apiService from '../services/apiService';
import OneMovie from './OneMovie.vue';
import Header from './Header.vue';
import Footer from './Footer.vue';


const movies = ref([]);
const currentPage = ref(1);
const pageSize = 2; // Nombre d'éléments par page
let totalPages = 1; // Initialisation à 1
const searchTerm = ref('');
const filteredMovies = ref([]);

const fetchMovies = async () => {
  try {
    const response = await apiService.getMovies(currentPage.value, pageSize);
    movies.value = response.data.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des films', error);
  }
};

const getTotalPages = async () => {
  try {
    const totalMovies = 11; 
    totalPages = Math.ceil(totalMovies / pageSize);
  } catch (error) {
    console.error('Erreur lors du calcul du nombre total de pages', error);
  }
};

const previousPage = async () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    await fetchMovies();
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Défilement vers le haut de la page en douceur
  }
};

const nextPage = async () => {
  if (currentPage.value < totalPages) {
    currentPage.value++;
    await fetchMovies();
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Défilement vers le haut de la page en douceur
  }
};

const performSearch = async () => {
  await fetchFilteredMovies();
};

const cancelSearch = async () => {
  searchTerm.value = '';
  filteredMovies.value = [];
  await fetchMovies();
};

const fetchFilteredMovies = async () => {
  try {
    const response = await apiService.getMovieFilter(searchTerm.value);
    filteredMovies.value = response.data.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des films filtrés', error);
  }
};

onMounted(async () => {
  await getTotalPages();
  await fetchMovies();
});
</script>

<style scoped>
.movies-container {
  display: flex;
  flex-wrap: wrap;
}

.movie {
  width: 50%; /* Chaque film occupe 50% de l'espace disponible */
  box-sizing: border-box; /* Inclure les bordures et le padding dans la largeur */
  padding: 10px; /* Espacement entre les films */
}
</style>
