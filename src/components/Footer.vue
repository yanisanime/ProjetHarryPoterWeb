<template>
    <footer class="footer">
        <div class="container">
            <p class="TitreFooter">Encyclopédie de l'Univers Harry Potter</p>
            <div class="text">© 2024 - Tous droits réservés</div>
            <div class="text">Créé par Yanis MERIEM & Axel GUIGUE</div>
            <!-- ici je met le lien de l'api -->
            <div class="textInformatif">Ce site utilise l'API <a href="https://potterdb.com/" >PotterDB</a>.</div>
        </div>
    </footer>
</template>

<style>
.footer {
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #b1aea3; /* Couleur de fond du header */
    padding: 20px; /* Espace intérieur du header */
    color: white;
    margin-top: 10px; /* Espace entre le footer et le contenu */
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}
.TitreFooter {
    font-size: 1.5em;
    text-align: center;
    margin: 0;
}
.text {
    text-align: center;
    margin: 10px 0; /* Espace entre les éléments*/
}
.textInformatif {
    text-align: center;
    margin: 10px 0; /* Espace entre les éléments*/
    font-size: 0.8em;
    

}

/*lien de l'api*/
.textInformatif a {
    text-decoration: none;
    color: white;
}
</style>