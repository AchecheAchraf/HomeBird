<!--

<script setup>
import { ref } from "vue";
defineProps([oiseaux]) ; 
const nom = ref("") ; 
const couleur = ref("");
const longevite = ref("");
const famille = ref("");
const espece = ref("");
const genre = ref("");
const taille = ref("");
const poids = ref("");
const id = ref("") ;
</script>

<template>
<form> 
<h2>Les types d'oiseaux :</h2>
<div v-for ="oiseau in oiseaux"
    :key=[oiseau.id]>
    <label v-bind:for oiseau.id>{{oiseau.nom}}</label>
    <label for ="couleur">Couleur:></label> 
    <input id ="couleur" v-model="oiseau.couleur"></input>
    <label for ="longevite">Longevité :></label> 
    <input id ="longevite" v-model="oiseau.longevite"></input>
    <label for ="famille">Famille:></label> 
    <input id ="famille" v-model="oiseau.famille" v-bind:id="oiseau.id" v-bind:value="oiseau.nom" v-bind:tabindex="oiseau.id"></input>
    <label for ="espece">Espece:></label> 
    <input id ="espece" v-model="oiseau.espece" v-bind:id="oiseau.id" v-bind:value="oiseau.nom" v-bind:tabindex="oiseau.id"></input>
    <label for ="genre">Genre:></label> 
    <input id ="genre" v-model="oiseau.genre" v-bind:id="oiseau.id" v-bind:value="oiseau.nom" v-bind:tabindex="oiseau.id"></input>
    <label for ="taille">Taille:></label> 
    <input id ="taille" v-model="oiseau.taille" v-bind:id="oiseau.id" v-bind:value="oiseau.nom" v-bind:tabindex="oiseau.id"></input>
    <label for ="poids">Poids:></label> 
    <input id ="poids" v-model="oiseau.poids" v-bind:id="oiseau.id" v-bind:value="oiseau.nom" v-bind:tabindex="oiseau.id"></input>
</div>
 
 v-model:famille=oiseau.famille v-model:espece=oiseau.espece 
        v-model:genre= oiseau.genre v-model:taille =oiseau.taille v-model:poids =oiseau.poids>

 

</form>
</template>

    
-->
<script setup>
</script>

<template>
    <form id="formulaire">
        <p> Couleur : Jaune </p>
        <p>Longévité : 13 ans</p>
        <p>Famille</p>
        <p>Espèce</p>
        <p>Genre</p>
        <p>Taille</p>
        <p>Poids</p>
    </form>
    </template>

    <style scoped>
     #formulaire{
            width: 300px;
            margin: 0 auto; 
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: #f9f9f9;
        }

        label {
            display: block;
            margin-bottom: 10px;
            font-weight: bold;
        }
    </style>