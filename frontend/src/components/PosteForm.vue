<script setup>
import { defineEmits, ref } from "vue";

const emit = defineEmits(["roleChange", "pourcentageChange"]);
const role = ref("");
const pourcentage = ref(0.5);
</script>

<template>
  <form>
    <input type="text" v-model="role" @input="emit('roleChange', role)" placeholder="Rôle" />
    <label for="pourcentage-slider">Participation :</label>
    <input type="range" id="pourcentage-slider" v-model="pourcentage" @input="emit('pourcentageChange', pourcentage)" min="0" max="1" step="0.01" />
    <span>{{ (pourcentage * 100).toFixed(0) }}%</span>
    <button type="button" @click="$emit('ajouter')">Ajouter</button>
  </form>
</template>
