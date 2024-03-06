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
</script>

<template>

<div v-for ="oiseau in oiseaux"
:key=[oiseau.id]>
    <label v-bind:for oiseau.id>{{oiseau.nom}}</label>
        <v-model:couleur= oiseau.couleur
        v-model:longevite=oiseau.longevite v-model:famille=oiseau.famille v-model:espece=oiseau.espece 
        v-model:genre= oiseau.genre v-model:taille =oiseau.taille v-model:poids =oiseau.poids>
</template>