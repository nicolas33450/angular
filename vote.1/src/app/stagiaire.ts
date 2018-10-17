export class Stagiaire {
  constructor(
    public nom: string,
    public prenom: string,
    public age: number,
    public vote: number,
  ){
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.vote = vote;
  }
}
