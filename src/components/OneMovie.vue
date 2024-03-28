<template>
  <div class="one-movie">
    <!-- Image du film -->
    <img :src="movie.poster" alt="Affiche du film" class="movie-poster" @mouseover="zoomIn" @mouseleave="zoomOut" />

    <!-- Titre du film -->
    <h2>{{ movie.title }}</h2>

    <!-- Résumé du film -->
    <div class="summary">
      <h3>Résumé</h3>
      <p>{{ movie.summary   || "Information non renseigné"}}</p>
    </div>

    <!-- Lien vers la page wiki -->
    <div class="wiki-link">
      <a :href="movie.wiki" target="_blank">Wiki Harry Potter</a>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';

const { movie } = defineProps(['movie']);
const isZoomed = ref(false);

const zoomIn = () => {
  isZoomed.value = true;
};

const zoomOut = () => {
  isZoomed.value = false;
};
</script>

<style scoped>
.one-movie {
  border: 1px solid #ccc; /* Bordure grise */
  padding: 20px; /* Espace intérieur */
  border-radius: 10px; /* Coins arrondis */
  background-color: #ffffff; /* Couleur de fond blanche */
  display: flex; /* Utiliser Flexbox */
  flex-direction: column; /* Aligner les éléments en colonne */
  align-items: center; /* Centrer les éléments horizontalement */
  transition: transform 0.5s ease; /* Effet de transition */
}

.movie-poster {
  width: 400px; /* Largeur de l'image */
  height: auto; /* Ajuste la hauteur en fonction de la largeur */
  transform: scale(1); /* Taille normale par défaut */
  transition: transform 0.5s ease; /* Effet de transition */

}

.summary {
  margin-top: 20px;
  text-align: justify;
  width: auto; /* Largeur du résumé */
  height: 200px; /* Hauteur maximale du résumé */
}

h2 {
  color: #5d704b;
}

.wiki-link {
  text-align: center;
  margin-top: 20px;
  text-decoration: none; /* Supprimer le soulignement du lien */
}

/* Ajout d'un effet de zoom au survol */
.movie-poster:hover {
  transform: scale(1.1); /* Grossissement de 10% */
}
</style>
