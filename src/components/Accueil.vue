<!-- src/components/Accueil.vue -->
<template>
   <Header />

   <div class="content">
  <h2>Bienvenue sur l'Encyclopédie de l'Univers Harry Potter</h2>
      <p>Plongez dans la magie de l'Univers Harry Potter.</p>
      <p>Découvrez les mystères des maisons de Poudlard, explorez les recoins sombres du Chemin de Traverse et suivez les aventures palpitantes de vos personnages préférés.</p>
      <p>Devenez un expert en sortilèges, apprenez l'histoire des reliques de la mort et explorez les secrets du monde magique.</p>
      <p>Que vous soyez un sorcier chevronné ou un simple Moldu curieux, ce guide est fait pour vous!</p>
      <p>Entrez dans ce monde merveilleux et laissez-vous emporter par la magie.</p>
    </div>
    <Footer />
</template>

<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
</script>

<style scoped>
h2 {
  margin-top: 0;
  margin-bottom: 50px; /* Espace entre le titre et le premier paragraphe */
}

.content {
  padding-top: 200px; /* Ajustez la valeur de padding selon la hauteur de votre header */
  text-align: justify; /* Justifie le texte au centre */
  max-width: 800px; /* Largeur maximale du contenu */
  text-align: center; /* Centre le contenu */
  margin: 0 auto; /* Centre le contenu horizontalement */
  padding-bottom: 100px; /* Espace en bas du contenu */
}
</style>