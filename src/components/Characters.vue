<template>
  <Header />
  <div>
    <h1>Liste des Personnages</h1>
    <div class="search-container">
    <input class="BarreDeRecherche" type="text" v-model="searchTerm" @keyup.enter="performSearch" placeholder="Rechercher un personnage...">
    <button class="btnClasse" @click="cancelSearch">Annuler la recherche</button>
  </div>
    <div v-if ="searchTerm.length > 0">
      <p>Résultats de la recherche pour "{{ searchTerm }}"</p>
        <div class="character-grid" v-if="filteredCharacters.length > 0">
            <div v-for="character in filteredCharacters" :key="character.id" class="character-column">
              <OneCharacter :character="character.attributes" />
          </div>
        </div>
        <p v-else>Aucun personnage trouvé. Taper "Entré" pour valider la recherche.</p>
    </div>
    <div v-else>
      <!-- ICI on affiche les personnage de la page parce qu'il n'y a pas de recherche -->
        <div class="character-grid" v-if="characters.length > 0">
          <div v-for="character in characters" :key="character.id" class="character-column">
            <OneCharacter :character="character.attributes" />
        </div>
      </div>
      <p v-else>Aucun personnage trouvé.</p>
    </div>
    
    <div class="LesButtons">
      <button class="btnClasse" @click="previousPage" :disabled="currentPage === 1">Page précédente</button>
      <span>{{ currentPage }}</span>
      <button class="btnClasse" @click="nextPage" :disabled="currentPage === totalPages">Page suivante</button>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import apiService from '../services/apiService';
import OneCharacter from './OneCharacter.vue';
import Header from './Header.vue';
import Footer from './Footer.vue';

const characters = ref([]);
const currentPage = ref(1);
const pageSize = 12; // Nombre d'éléments par page
let totalPages = 1; // Initialisation à 1
const searchTerm = ref('');
const filteredCharacters = ref([]);

/**
 * Récupère la liste des personnages
 */
const fetchCharacters = async () => {
  try {
    const response = await apiService.getCharacters(currentPage.value, pageSize);
    //ICI je veux remplacé les personnages par les nouveaux
    characters.value = response.data.data; // Mettre à jour les personnages
    } catch (error) {
    console.error('Erreur lors de la récupération des personnages', error);
  }
};

const getTotalPages = async () => {
  try {
    const totalCharacters = 4675; // Le nombre total de personnages
    totalPages = Math.ceil(totalCharacters / pageSize);
  } catch (error) {
    console.error('Erreur lors du calcul du nombre total de pages', error);
  }
};


const previousPage = async () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    await fetchCharacters();
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Défilement vers le haut de la page en douceur
  }
};

const nextPage = async () => {
  if (currentPage.value < totalPages) {
    currentPage.value++;
    await fetchCharacters();
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Défilement vers le haut de la page en douceur
  }
};

const performSearch = async () => {
  await fetchFilteredCharacters();
};

const fetchFilteredCharacters = async () => {
  try {
    const response = await apiService.getCharacterFilter(searchTerm.value);
    filteredCharacters.value = response.data.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des personnages filtrés', error);
  }
};

const cancelSearch = async () => {
  searchTerm.value = ''; // Réinitialiser le terme de recherche
  filteredCharacters.value = []; // Réinitialiser les personnages filtrés
  await fetchCharacters(); // Afficher à nouveau les personnages de la page actuelle
};

onMounted(async () => {
  await getTotalPages();
  await fetchCharacters();
});
</script>

<style scoped>
.character-grid {
  display: flex;
  flex-wrap: wrap;
}

.character-column {
  width: 25%; /* Chaque colonne prendra 25% de la largeur */
  box-sizing: border-box; /* Inclure le padding et la bordure dans la largeur définie */
  padding: 10px;
}
</style>
