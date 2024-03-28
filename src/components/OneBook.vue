<template>
  <div class="one-book">
    <!-- Couverture du livre -->
    <img :src="livre.cover" alt="Couverture du livre" class="book-cover" @mouseover="zoomIn" @mouseleave="zoomOut" />

    <!-- Titre du livre -->
    <h2>{{ livre.title }}</h2>

    <!-- Résumé du livre -->
    <div class="summary">
      <h3>Résumé</h3>
      <p>{{ livre.summary  || "Information non renseigné" }}</p>
    </div>

    <!-- Auteur du livre -->
    <p>Auteur : {{ livre.author  || "Information non renseigné" }}</p>

    <!-- Autres détails du livre -->
    <div class="book-details">
      <p><strong>Pages :</strong> {{ livre.pages   || "Information non renseigné" }}</p>
      <p><strong>Date de sortie :</strong> {{ livre.release_date  || "Information non renseigné" }}</p>
    </div>

     <!-- Lien vers la page wiki -->
     <div class="wiki-link">
      <a :href="livre.wiki" target="_blank">Wiki Harry Potter</a>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps(['livre']);
const { livre } = props;
</script>

<style scoped>
.one-book {
  border: 1px solid #ccc; /* Bordure grise */
  padding: 20px; /* Espace intérieur */
  border-radius: 10px; /* Coins arrondis */
  background-color: #ffffff; /* Couleur de fond blanche */
  display: flex; /* Utiliser Flexbox */
  flex-direction: column; /* Aligner les éléments en colonne */
  align-items: center; /* Centrer les éléments horizontalement */
  transition: transform 0.5s ease; /* Effet de transition */
}

.book-cover {
  width: auto; /* Largeur de l'image */
  height: 400px; /* Ajuste la hauteur en fonction de la largeur */
  transform: scale(1); /* Taille normale par défaut */
  transition: transform 0.5s ease; /* Effet de transition */
}

.book-details{
  margin-top: 20px;
  text-align: left; /* Aligner le texte à gauche */

}

.summary {
  margin-top: 20px;
  text-align: justify;
  width: auto; /* Largeur du résumé */
  height: 200px; /* Hauteur maximale du résumé */
}

h2 {
  color: #3B8070;
}

strong {
  color: #555;
}
/* Ajout d'un effet de zoom au survol */
.book-cover:hover {
  transform: scale(1.1); /* Grossissement de 10% */
}

</style>
