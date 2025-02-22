export class Projet {
  constructor(id, nom, debut, fin, links) {
    this.id = id;
    this.nom = nom;
    this.debut = debut;
    this.fin = fin;
    this.links = links; // Stocke les liens de l'API
  }

  // Vérifie si le projet est en cours
  estEnCours() {
    return this.fin === null;
  }

  // Retourne l'URL du projet
  getUrl() {
    return this.links?.self?.href || null;
  }

  // Retourne l'URL des contributeurs
  getContributeursUrl() {
    return this.links?.contributeurs?.href || null;
  }

  // Affiche un résumé du projet
  getResume() {
    return `${this.nom} (Début: ${this.debut}, ${this.fin ? "Fin: " + this.fin : "En cours"})`;
  }

  // Retourne une chaîne de caractères détaillée du projet
  toString() {
    return `Projet: ${this.nom}
ID: ${this.id}
Début: ${this.debut}
Fin: ${this.fin ? this.fin : "En cours"}
URL: ${this.getUrl()}
Contributeurs: ${this.getContributeursUrl()}`;
  }
}

// Exemple d'utilisation
const projetJSON = {
  id: 1,
  nom: "Projet 1 (en cours)",
  debut: "2025-01-01",
  fin: null,
  _links: {
    self: { href: "http://localhost:8989/api/projets/1" },
    projet: { href: "http://localhost:8989/api/projets/1" },
    contributeurs: { href: "http://localhost:8989/api/projets/1/contributeurs" },
  },
};

// Instanciation d'un projet
const projet1 = new Projet(
  projetJSON.id,
  projetJSON.nom,
  projetJSON.debut,
  projetJSON.fin,
  projetJSON._links
);

console.log(projet1.toString());
