<!-- 
<script setup>
import { ref } from "vue";
defineProps([oiseaux]) ; 
const nom = ref("") ; 
const couleur = ref("");
const taille = ref("");
const dateArrivee = ref("");
</script>

<template>
<form>

<div>
    <input type="button" id="actif">
</div>

<label>Information sur l'oiseau observé : </label>
<div v-for ="oiseau in oiseaux"
    :key=[oiseau.id]>
    <label v-bind:for oiseau.id>{{oiseau.nom}}</label>
    <label for ="couleur">Couleur:></label> 
    <input id ="couleur" v-model="oiseau.couleur"></input>
    <input for ="taille">Taille:></input> 
    <input id ="taille" v-model="oiseau.taille" v-bind:id="oiseau.id" v-bind:value="oiseau.nom" v-bind:tabindex="oiseau.id"></input>
    <label for ="date"> Date d'arrivée:></label> 
    <input id ="date" v-model="oiseau.dateArrivee"></input>
</div>

<div>
    <label for ="localisation">Localisation:></label> 
    <input id ="localisation" v-model="oiseau.localisation"></input>
</div>

<div>
<h2>Notes :</h2>
    <label for="zoneTexte"></label>
    <textarea id="zoneTexte" name="zoneTexte"  rows="4" cols="50"></textarea>
</div>

</form>

</template>

-->

<script setup>
</script>

<template>
<form>
    <div class="container"> 
        <div class="carre" >
            <div class="background">
                <div class= "informations">
                <p style="font-size: 20px;"> Couleur : Jaune </p>
                <p style="font-size: 20px;"> Longévité : 13 ans </p>
                <p style="font-size: 20px;"> Famille : Fringillidés</p>
                <p style="font-size: 20px;"> Espèce : Chloris </p>
                <p style="font-size: 20px;"> Genre :  Chloris </p>
                <p style="font-size: 20px;"> Taille : 16 cm </p>
                <p style="font-size: 20px;"> Poids : 25 à 30 gramme</p>
    </div>
        </div>
            </div>
                </div>

                <div class="carre2">
                    <img src= './canari.jpg' alt="Image d'oiseau">
                <div class="background2">
                </div>
                </div>
</form> 
</template>

<style scoped>
   .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh; /* Pour centrer verticalement */
    }

    .carre {
        position: relative;
        width: 350px; /* Ajustez la largeur selon vos besoins */
        height: 220px; /* Ajustez la hauteur selon vos besoins */
        background-color: #ACCB9B; /* Couleur du rectangle */
    }

    .carre2 {
        position: relative;
        width: 350px; /* Ajustez la largeur selon vos besoins */
        height: 220px; /* Ajustez la hauteur selon vos besoins */
        overflow: hidden; /* Pour cacher le dépassement de l'image */
        border-radius: 10px; /* Optionnel : Ajouter des coins arrondis */
    }

    img {
        width: 100%;
        height: auto;
        display: block;
    }

    .background
    .background2 {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: transparent ; 
    }


    .informations {
        position: relative;
        z-index: 1; /* Assure que les informations apparaissent au-dessus du fond */
        text-align: left ; 
        color: black; 
    }
</style>