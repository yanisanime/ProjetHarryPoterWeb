<template>
  <div class="one-spell">
    <div v-if="spell.image">
      <img :src="spell.image" alt="Image du sort" class="spell-image" @mouseover="zoomIn" @mouseleave="zoomOut" />
    </div>
    <div v-else>
      <!-- J'ai prit la liberté de mettre une belle image de sort quand l'API n'a pas d'iamge de sort pour faire plus joli -->
      <img src="../assets/images/imageDeRemplacementSort.jpg" alt="Image de remplacement" class="spell-image" @mouseover="zoomIn" @mouseleave="zoomOut" />
    </div>
    <h2>{{ spell.name  || "Information non renseigné" }}</h2>
    <div class="spell-details">
      <p><strong>Créateur :</strong> {{ spell.creator || "Information non renseigné"}}</p>
      <p><strong>Catégorie :</strong> {{ spell.category  || "Information non renseigné" }}</p>
      <p><strong>Incantation :</strong> {{ spell.incantation  || "Information non renseigné" }}</p>
      <p><strong>Mouvement de main :</strong> {{ spell.hand   || "Information non renseigné"}}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps(['spell']);
const { spell } = props;


</script>

<style scoped>
.one-spell {
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  background-color: #f9f9f9;
  text-align: center; /* Centrer le contenu */
  width: auto; /* Largeur du résumé */
  height: 500px; /* Hauteur du résumé */
  
}

.spell-image {
  width: 200px; /* Ajustez la taille de l'image */
  height: auto; /* Ajustez la hauteur en fonction de la largeur */
  transition: transform 0.5s ease; /* Effet de transition */
}

.spell-details {
  margin-top: 20px;
  text-align: left; /* Aligner le texte à gauche */
}

h2 {
  color: #3B8070;
}

strong {
  color: #555;
}
/* Ajout d'un effet de zoom au survol */
.spell-image:hover {
  transform: scale(1.1); /* Grossissement de 10% */
}
</style>
