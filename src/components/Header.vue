<template>
    <div class="header">
      <router-link to="/" class="home-link">Accueil</router-link>
      <nav class="menu">
        <router-link to="/livres" class="menu-link">Livres</router-link>
        <router-link to="/potions" class="menu-link">Potions</router-link>
        <router-link to="/spells" class="menu-link">Sorts</router-link>
        <router-link to="/characters" class="menu-link">Personnages</router-link>
        <router-link to="/movies" class="menu-link">Films</router-link>
      </nav>
    </div>
  </template>
  
  <style scoped>
  .header {
    display: flex; /* Afficher les éléments en ligne */
    justify-content: space-between; /* Espace entre les éléments */
    align-items: center; /* Centrer verticalement les éléments */
    position: fixed; /* Fixer le header en haut de la page */
    top: 0; /* Coller le header en haut de la page */
    left: 0; /* Coller le header à gauche de la page */
    width: 100%; /* Largeur du header à 100% */
    background-color: #b1aea3; /* Couleur de fond du header */
    z-index: 1000;  /* Position du header au-dessus des autres éléments */
    padding: 15px; /* Espace intérieur du header */
  }
  
  .home-link {
    text-decoration: none; /* Supprimer le soulignement du lien */
    color: #fff; /* Couleur du texte */
    text-align: left; /* Aligner le texte à gauche */
  }
  
  .menu {
    display: flex;
    justify-content: center; /* Centrer les éléments du menu horizontalement */
    flex-grow: 1; /* Permet au menu de prendre tout l'espace restant */
  }
  
  .menu-link {
    color: #fff;
    text-decoration: none;
    margin: 0 10px;
    padding: 10px;
    transition: color 0.3s ease;
  }
  
  .menu-link:hover {
    color: #eac663;
  }
  
  </style>
  