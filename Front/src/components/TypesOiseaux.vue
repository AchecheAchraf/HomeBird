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
    <textarea id ="couleur" v-model="oiseau.couleur"></textarea>
    <label for ="longevite">Longevité :></label> 
    <textarea id ="longevite" v-model="oiseau.longevite"></textarea>
    <label for ="famille">Famille:></label> 
    <textarea id ="famille" v-model="oiseau.famille" v-bind:id="oiseau.id" v-bind:value="oiseau.nom" v-bind:tabindex="oiseau.id"></textarea>
    <label for ="espece">Espece:></label> 
    <textarea id ="espece" v-model="oiseau.espece" v-bind:id="oiseau.id" v-bind:value="oiseau.nom" v-bind:tabindex="oiseau.id"></textarea>
    <label for ="genre">Genre:></label> 
    <textarea id ="genre" v-model="oiseau.genre" v-bind:id="oiseau.id" v-bind:value="oiseau.nom" v-bind:tabindex="oiseau.id"></textarea>
    <label for ="taille">Taille:></label> 
    <textarea id ="taille" v-model="oiseau.taille" v-bind:id="oiseau.id" v-bind:value="oiseau.nom" v-bind:tabindex="oiseau.id"></textarea>
    <label for ="poids">Poids:></label> 
    <textarea id ="poids" v-model="oiseau.poids" v-bind:id="oiseau.id" v-bind:value="oiseau.nom" v-bind:tabindex="oiseau.id"></textarea>
</div>
 
 <!--v-model:famille=oiseau.famille v-model:espece=oiseau.espece 
        v-model:genre= oiseau.genre v-model:taille =oiseau.taille v-model:poids =oiseau.poids>
 -->
 


<div>
<h2>Notes :</h2>
    <label for="zoneTexte"></label>
    <textarea id="zoneTexte" name="zoneTexte"  rows="4" cols="50"></textarea>
</div>


</form>
</template>