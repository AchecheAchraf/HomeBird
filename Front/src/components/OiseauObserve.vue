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