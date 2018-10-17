export class Jeux {
    constructor(
      public title: string,
      public stock: boolean,
      public dateSortie: Date,
      public console: string,
      public like: number,
    ){
      this.title = title;
      this.stock = stock;
      this.dateSortie = new Date();
      this.console = console;
      this.like = like;

    }
}
