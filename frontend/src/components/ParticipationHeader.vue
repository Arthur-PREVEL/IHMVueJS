// ParticipationHeader.vue
<script setup>
import { ref } from "vue";
import ListePersonne from "@/components/ListePersonne.vue";
import ListeProjet from "@/components/ListeProjet.vue";
import PosteForm from "@/components/PosteForm.vue";

// Variables pour stocker les valeurs sélectionnées
const personneSelectionnee = ref(null);
const projetSelectionne = ref(null);
const role = ref("");
const pourcentage = ref(0.5);

// Fonction pour envoyer les données au backend
async function enregistrerParticipation() {
  if (!personneSelectionnee.value || !projetSelectionne.value || !role.value || pourcentage.value === null) {
    alert("Veuillez remplir tous les champs");
    return;
  }

  const url = "http://localhost:5173/api/participations";
  const participationData = {
    matricule: personneSelectionnee.value.matricule,
    codeProjet: projetSelectionne.value.id,
    role: role.value,
    pourcentage: parseFloat(pourcentage.value),
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(participationData),
    });
    if (!response.ok) {
      throw new Error("Erreur lors de l'enregistrement");
    }
    alert("Participation enregistrée avec succès !");
  } catch (error) {
    alert(error.message);
  }
}
</script>

<template>
  <div class="container">
    <h2 id="titre">Ajouter une participation</h2>
    <ListePersonne @selectionnee="(p) => (personneSelectionnee = p)" />
    <ListeProjet @selectionnee="(p) => (projetSelectionne = p)" />
    <PosteForm @roleChange="(r) => (role = r)" @pourcentageChange="(p) => (pourcentage = p)" />
    <button @click="enregistrerParticipation" class="btn">Ajouter</button>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 15px;
}

#titre {
  color: #333;
  text-align: center;
  font-size: 24px;
  margin-bottom: 10px;
}

.btn {
  width: 100%;
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;
}

.btn:hover {
  background-color: #218838;
}
</style>
