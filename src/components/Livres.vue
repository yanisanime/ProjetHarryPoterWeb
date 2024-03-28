<template>
    <Header />
    <h1>Liste des Livres</h1>
    <div class="search-container">
    <input class="BarreDeRecherche" type="text" v-model="searchTerm" @keyup.enter="performSearch" placeholder="Rechercher un livre...">
    <button class="btnClasse" @click="cancelSearch">Annuler la recherche</button>
  </div>
  <!-- ICI c'est pour afficher les livre filtrer après une recherche -->
  <div v-if="searchTerm.length > 0">
    <p>Résultats de la recherche pour "{{ searchTerm }}"</p>
    <div class="books-container" v-if="filteredLivres.length > 0">
      <div v-for="livre in filteredLivres" :key="livre.id" class="book">
        <OneBook :key="livre.id" :livre="livre.attributes" />
      </div>
    </div>
    <p v-else>Aucun livre trouvé.</p>
  </div>
  <!-- ICI c'est pour afficher les livres normalement par pagination -->
  <div v-else>
    <div class="books-container" v-if="livres.length > 0">
      <div v-for="livre in livres" :key="livre.id" class="book">
        <OneBook :key="livre.id" :livre="livre.attributes" />
      </div>
    </div>
    <p v-else>Aucun livre trouvé.</p>
  </div>

    <div class="LesButtons">
      <button class="btnClasse" @click="previousPage" :disabled="currentPage === 1">Page précédente</button>
      <span>{{ currentPage }}</span>
      <button class="btnClasse" @click="nextPage" :disabled="currentPage === totalPages">Page suivante</button>
    </div>
    <Footer />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import apiService from '../services/apiService';
import OneBook from './OneBook.vue';
import Header from './Header.vue';
import Footer from './Footer.vue';

const livres = ref([]);
const currentPage = ref(1);
const pageSize = 4; // Nombre d'éléments par page
let totalPages = 1; // Initialisation à 1
const searchTerm = ref('');
const filteredLivres = ref([]);

const fetchLivres = async () => {
  try {
    const response = await apiService.getLivres(currentPage.value, pageSize);
    livres.value = response.data.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des livres', error);
  }
};

const getTotalPages = async () => {
  try {
    const totalLivres = 7; 
    totalPages = Math.ceil(totalLivres / pageSize);
  } catch (error) {
    console.error('Erreur lors du calcul du nombre total de pages', error);
  }
};

const previousPage = async () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    await fetchLivres();
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Défilement vers le haut de la page en douceur
  }
};

const nextPage = async () => {
  if (currentPage.value < totalPages) {
    currentPage.value++;
    await fetchLivres();
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Défilement vers le haut de la page en douceur
  }
};

const performSearch = async () => {
  await fetchFilteredLivres();
};

const cancelSearch = async () => {
  searchTerm.value = '';
  filteredLivres.value = []; // Réinitialiser les livres filtrés
  await fetchLivres();
};

const fetchFilteredLivres = async () => {
  try {
    const response = await apiService.getLivreFilter(searchTerm.value);
    filteredLivres.value = response.data.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des livres filtrés', error);
  }
};

onMounted(async () => {
  await getTotalPages();
  await fetchLivres();
});
</script>

<style scoped>
.books-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /* Espacement équitable entre les éléments */
}

.book {
  width: calc(50% - 10px); /* Chaque livre occupe 50% de la largeur avec un espacement de 10px entre eux */
  box-sizing: border-box; /* Inclure les bordures et le padding dans la largeur */
  padding: 10px; /* Espacement entre les livres */
}

</style>
