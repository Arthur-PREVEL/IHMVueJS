  <script setup>
  import { reactive, ref } from "vue";
  import { Projet } from "@/Projet.js" ;
  const listePr = reactive([])

  function getProjets() {
    const url = "http://localhost:5173/api/projets?page=0&size=20";
    let fetchOptions = { method: "GET" };

    fetch(url, fetchOptions)
      .then((response) => response.json())
      .then((dataJSON) => {
        console.log("HELLO")
        console.log(dataJSON);
        for (let projet of dataJSON._embedded.projets) {
          console.log(projet.nom);
          listePr.push(
            new Projet(
              projet.id,
              projet.nom,
              projet.debut,
              projet.fin,
              projet._links)
          );
        }
        });
  }

  getProjets();
  </script>

  <template>
    <label for="project-select">Sélectionner un projet :</label>
    <select v-model="projetSelectionnee" id="project-select">
      <option v-for="projet in listePr" :key="projet.id" :value="projet">
        {{ projet.nom }}
      </option>
    </select>

  </template>
  <style scoped>
  label {
    font-weight: bold;
    margin-right: 10px;
    background-color: #ffa74d;

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
