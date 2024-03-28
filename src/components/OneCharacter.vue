<template>
  <div class="one-character">
    <div v-if="character.image">
      <img :src="character.image" alt="Image du personnage" class="character-image" @mouseover="zoomIn" @mouseleave="zoomOut" />
    </div>
    <div v-else>
      <!-- Utilisation d'une image de remplacement en cas d'absence d'image -->
      <img src="../assets/images/imageDeRemplacementCharactere.jpg" alt="Image de remplacement" class="character-image" @mouseover="zoomIn" @mouseleave="zoomOut" />
    </div>
    <h2>{{ character.name || "Nom inconnu" }}</h2>
    <div class="character-details">
        <p><strong>Maison :</strong> {{ character.house|| "Non renseigné" }}</p>
        <p><strong>Statut de sang :</strong> {{ character.blood_status || "Non renseigné"}}</p>
        <p><strong>Genre :</strong> {{ character.gender || "Non renseigné" }}</p>
        <p><strong>Date et lieu de naissance :</strong> {{ character.born || "Non renseigné" }}</p>
        <p><strong>Patronus :</strong> {{ character.patronus || "Non renseigné" }}</p>
        <p><strong>Patronus :</strong> {{ character.patronus|| "Non renseigné"  }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps(['character']);
const { character } = props;

</script>

<style scoped>
.one-character {
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  background-color: #f9f9f9;
  width: auto;/* Largeur du résumé */
  height: auto; /* Hauteur du résumé */
  text-align: center; /* Centrer le contenu */
}

.character-details {
  margin-top: 20px;
  text-align: left; /* Aligner le texte à gauche */
}

h2 {
  color: #3B8070;
}

strong {
  color: #555;
}

.character-image {
  width: 200px;
  height: auto;
  transition: transform 0.5s ease;
}

/* Effet de zoom au survol */
.character-image:hover {
  transform: scale(1.1);
}
</style>
