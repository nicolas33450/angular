export class Recette {
  constructor(
    public nom: string,
    public origine: string,
    public etat: number

  ){
    this.nom = nom;
    this.origine = origine;
    this.etat= etat;

  }
}
