Information concernant le projet Harry Potter API

Developper Yanis MERIEM & Axel GUIGUE

(le projet se somme TODOLIST parce qu'on est reparti de la base d'un projet déjà configuré pour gagnier du temps)

Pour le projet, il faut le clonner à partir du dépot git : 
Pour le lancé, j'utiliser la commande : npm run dev 


Dans le dossier src/components/ 
J'ai mit toutes mes vues. 

Le projet présente plusieurs page film/Personnage/Livre/Potion/Sort
Pour chaque parti, s'il n'y a pas d'image, j'ai fait en sorte qu'une image s'affiche par 
défaut pour gardé un côté joli.

Le fichier styleGlobal.css contient le css global à appliqué au projet pour évité les 
répétitions de code. 
Le fichier apiService.js s'occupe de faire le lien avec l'API 
Les routes sont dans le dossier src/router/router.js

Pour les images de base pour les remplacements, elles sont dans le dossier src/assets/images

Le fichier main.js est la base de l'application qui démare de projet. Normalement après la comande npm run dev, tout devrai se lancer corectement

