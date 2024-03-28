<template>
  <Header />
  <div>
    <h1>Liste des Sorts</h1>
    <div class="search-container">
    <input class="BarreDeRecherche" type="text" v-model="searchTerm" @keyup.enter="performSearch" placeholder="Rechercher un sort...">
    <button class="btnClasse" @click="cancelSearch">Annuler la recherche</button>
  </div>
    <!-- Affichage pour la recherche -->
    <div v-if="searchTerm.length > 0">
      <p>Résultats de la recherche pour "{{ searchTerm }}"</p>
      <div class="spell-grid" v-if="filteredSpells.length > 0">
        <div v-for="spell in filteredSpells" :key="spell.id" class="spell-column">
          <OneSpell :spell="spell.attributes" />
        </div>
      </div>
      <p v-else>Aucun sort trouvé.</p>
    </div>
    <!-- Affichage normal par pagination -->
    <div v-else>
      <!-- ICI on affiche les sorts de la page parce qu'il n'y a pas de recherche -->
      <div class="spell-grid" v-if="spells.length > 0">
        <div v-for="spell in spells" :key="spell.id" class="spell-column">
          <OneSpell :spell="spell.attributes" />
        </div>
      </div>
      <p v-else>Aucun sort trouvé.</p>
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
import OneSpell from './OneSpell.vue';
import Header from './Header.vue';
import Footer from './Footer.vue';


const spells = ref([]);
const currentPage = ref(1);
const pageSize = 12; // Nombre d'éléments par page
let totalPages = 1; // Initialisation à 1
const searchTerm = ref('');
const filteredSpells = ref([]);


const fetchSpells = async () => {
  try {
    const response = await apiService.getSpells(currentPage.value, pageSize);
    spells.value = response.data.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des sorts', error);
  }
};


const getTotalPages = async () => {
  try {
    const totalSpells = 315; // Le nombre total de sorts
    totalPages = Math.ceil(totalSpells / pageSize);
  } catch (error) {
    console.error('Erreur lors du calcul du nombre total de pages', error);
  }
};

const previousPage = async () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    await fetchSpells();
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Défilement vers le haut de la page en douceur
  }
};

const nextPage = async () => {
  if (currentPage.value < totalPages) {
    currentPage.value++;
    await fetchSpells();
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Défilement vers le haut de la page en douceur
  }
};

const performSearch = async () => {
  await fetchFilteredSpells();
};

const fetchFilteredSpells = async () => {
  try {
    const response = await apiService.getSpellFilter(searchTerm.value);
    filteredSpells.value = response.data.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des sorts filtrés', error);
  }
};

//cette fonction permet d'annuler la recherche
const cancelSearch = async () => {
  searchTerm.value = '';
  filteredSpells.value = [];
  await fetchSpells();
};

onMounted(async () => {
  await getTotalPages();
  await fetchSpells();
});
</script>

<style scoped>

.spell-grid {
  display: flex;
  flex-wrap: wrap;
}

.spell-column {
  width: 25%; /* Chaque colonne prendra 25% de la largeur */
  box-sizing: border-box; /* Inclure le padding et la bordure dans la largeur définie */
  padding: 10px;
}
</style>
