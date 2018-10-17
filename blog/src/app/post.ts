export class Post {
    constructor(
      public title: string,
      public content: string,
      public dateDuJour: Date,
      public likes: number,
      public image: string,
    ){
      this.title = title;
      this.content = content;
      this.dateDuJour = new Date();
      this.likes = likes;
      this.image = image;
    }
}


