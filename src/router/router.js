// src/router/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Accueil from '../components/Accueil.vue';
import Livres from '../components/Livres.vue';
import Potions from '../components/Potions.vue';
import Spells from '../components/Spells.vue';
import Characters from '../components/Characters.vue';
import Movies from '../components/Movies.vue';



const routes = [
  { path: '/', component: Accueil },
  { path: '/livres', component: Livres },
  { path: '/potions', component: Potions },
  { path: '/spells', component: Spells },
  { path: '/characters', component: Characters },
  { path: '/movies', component: Movies },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
