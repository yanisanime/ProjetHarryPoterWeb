<template>
  <div class="one-potion" >
    <div v-if="potion.image">
      <img :src="potion.image" alt="Affiche du film" class="potion-image" @mouseover="zoomIn" @mouseleave="zoomOut" />
    </div>
    <div v-else>
      <!-- J'ai prit la liberté de mettre une belle image de potion quand l'API n'a pas d'iamge de potion pour faire plus joli -->
      <img src="../assets/images/imageDeRemplacementPotion.jpg" alt="Image de remplacement" class="potion-image" @mouseover="zoomIn" @mouseleave="zoomOut" />
    </div>
    
    <h2>{{ potion.name }}</h2>
    
    <div class="potion-info">
      <p><strong>Effet :</strong> {{ potion.effect }}</p>
      <p><strong>Caractéristiques :</strong> {{ potion.characteristics || "information non disponible" }}</p>
      <p><strong>Difficulté :</strong> {{ potion.difficulty || "information non disponible"}}</p>
      <p><strong>Inventeurs :</strong> {{ potion.inventors || "information non disponible" }}</p>
      <p><strong>Ingrédients :</strong> {{ potion.ingredients  || "information non disponible"}}</p>
      <p><strong>Fabricants :</strong> {{ potion.manufacturers || "information non disponible" }}</p>
      <p><strong>Effets secondaires :</strong> {{ potion.side_effects || "information non disponible" }}</p>
      <p><strong>Temps nécessaire :</strong> {{ potion.time || "information non disponible" }}</p>
    </div>

  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps(['potion']);
const { potion } = props;
</script>

<style scoped>
.one-potion {
  text-align: center; /* Centrer le contenu */
  border: 1px solid #ccc;
  padding:10px; /* Espace intérieur */
  margin: 10px; /* Marge extérieure */
  border-radius: 10px; /* Coins arrondis */
  background-color: #f9f9f9; /* Couleur de fond */
  width: auto; /* Largeur du résumé */
  height: 850px; /* Hauteur du résumé */
}

.potion-image {
  width: 200px; /* Ajustez la taille de l'image */
  height: auto; /* Ajustez la hauteur en fonction de la largeur */
  transition: transform 0.5s ease; /* Effet de transition */
}

.potion-info {
  margin-top: 20px;
  height: 1000px; /* Hauteur maximale du résumé */
  width: auto; /* Largeur du résumé */
  text-align: left; /* Aligner le texte à gauche */
}

h2 {
  color: #3B8070;
}

strong {
  color: #555;
}


/* Ajout d'un effet de zoom au survol */
.potion-image:hover {
  transform: scale(1.1); /* Grossissement de 10% */
}
</style>
