export class Personne {
  constructor(matricule, nom, prenom, poste, links) {
    this._matricule = matricule;
    this._nom = nom;
    this._prenom = prenom;
    this._poste = poste;
    this._links = links || {}; // Gestion des liens optionnels
  }

  // Getters
  get matricule() { return this._matricule; }
  get nom() { return this._nom; }
  get prenom() { return this._prenom; }
  get poste() { return this._poste; }
  get links() { return this._links; }

  // Setters
  set matricule(value) { this._matricule = value; }
  set nom(value) { this._nom = value; }
  set prenom(value) { this._prenom = value; }
  set poste(value) { this._poste = value; }
  set links(value) { this._links = value; }

  // Méthode toString
  toString() {
    return `Personne: ${this._prenom} ${this._nom}, Poste: ${this._poste}, Matricule: ${this._matricule}`;
  }
}
