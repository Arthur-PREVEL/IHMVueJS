<script setup>
import { reactive, ref } from "vue";
import { Personne } from "@/Personne.js";

const listeP = reactive([]);
const personneSelectionnee = ref(null);

function getPersonnes() {
  const url = "http://localhost:5173/api/personnes?page=0&size=20";
  let fetchOptions = { method: "GET" };

  fetch(url, fetchOptions)
    .then((response) => response.json())
    .then((dataJSON) => {
      console.log(dataJSON);
      for (let personne of dataJSON._embedded.personnes) {
        listeP.push(
          new Personne(
            personne.matricule,
            personne.nom,
            personne.prenom,
            personne.poste,
            personne._links
          )
        );
      }
    });
}

getPersonnes();
</script>

<template>
  <h3>Liste des personnes</h3>

  <label for="person-select">Sélectionner une personne :</label>
  <select v-model="personneSelectionnee" id="person-select">
    <option v-for="personne in listeP" :key="personne.matricule" :value="personne">
      {{ personne.nom }} {{ personne.prenom }}
    </option>
  </select>

  <div v-if="personneSelectionnee">
    <h4>Personne sélectionnée :</h4>
    <p><strong>Nom :</strong> {{ personneSelectionnee.nom }}</p>
    <p><strong>Prénom :</strong> {{ personneSelectionnee.prenom }}</p>
    <p><strong>Poste :</strong> {{ personneSelectionnee.poste }}</p>
  </div>
</template>

<style scoped>
label {
  font-weight: bold;
  margin-right: 10px;
}
select {
  padding: 5px;
  margin-bottom: 15px;
}
div {
  margin-top: 10px;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  background-color: #f9f9f9;
}
</style>
