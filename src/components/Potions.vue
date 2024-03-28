<template>
  <Header />
  <div>
    <h1>Liste des Potions</h1>
    <div class="search-container">
    <input class="BarreDeRecherche" type="text" v-model="searchTerm" @keyup.enter="performSearch" placeholder="Rechercher une potion...">
    <button class="btnClasse" @click="cancelSearch">Annuler la recherche</button>
  </div>
    <!-- Pour afficher les résultats quand il y a une recherche  -->
    <div v-if="searchTerm.length > 0">
      <p>Résultats de la recherche pour "{{ searchTerm }}"</p>
      <div class="potion-grid" v-if="filteredPotions.length > 0">
        <div v-for="potion in filteredPotions" :key="potion.id" class="potion-column">
          <OnePotion :potion="potion.attributes" />
        </div>
      </div>
      <p v-else>Aucune potion trouvée.</p>
    </div>
    <!-- Pour afficher les potions normalement par pagination -->
    <div v-else>
      <div class="potion-grid" v-if="potions.length > 0">
        <div v-for="potion in potions" :key="potion.id" class="potion-column">
          <OnePotion :potion="potion.attributes" />
        </div>
      </div>
      <p v-else>Aucune potion trouvée.</p>
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
import OnePotion from './OnePotion.vue';
import Header from './Header.vue';
import Footer from './Footer.vue';

const potions = ref([]);
const currentPage = ref(1);
const pageSize = 12; // Nombre d'éléments par page
let totalPages = 1; // Initialisation à 1
const searchTerm = ref('');
const filteredPotions = ref([]);

const fetchPotions = async () => {
  try {
    const response = await apiService.getPotions(currentPage.value, pageSize);
    potions.value = response.data.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des potions', error);
  }
};

const getTotalPages = async () => {
  try {
    const totalPotions = 168; 
    totalPages = Math.ceil(totalPotions / pageSize);
  } catch (error) {
    console.error('Erreur lors du calcul du nombre total de pages', error);
  }
};

const previousPage = async () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    await fetchPotions();
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Défilement vers le haut de la page en douceur
  }
};

const nextPage = async () => {
  if (currentPage.value < totalPages) {
    currentPage.value++;
    await fetchPotions();
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Défilement vers le haut de la page en douceur
  }
};

const performSearch = async () => {
  await fetchFilteredPotions();
};

const cancelSearch = async () => {
  searchTerm.value = '';
  filteredPotions.value = []; // Réinitialiser les potions filtrées quand la recherche est annulée
  await fetchPotions(); // Recharger les potions
};

//permet de récup les potion filtrées
const fetchFilteredPotions = async () => {
  try {
      const response = await apiService.getPotionFilter(searchTerm.value);
      filteredPotions.value = response.data.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des potions filtrées', error);
  }
};

onMounted(async () => {
  await getTotalPages();
  await fetchPotions();
});
</script>

<style scoped>
.h1 {
  text-align: center;
  /* ne pas collé le titre au header*/
  margin-top: 50px; 
}

.potion-grid {
  display: flex;
  flex-wrap: wrap;
}

.potion-column {
  width: 25%; /* Chaque colonne prendra 25% de la largeur */
  box-sizing: border-box; /* Inclure le padding et la bordure dans la largeur définie */
  padding: 10px;
}
</style>
