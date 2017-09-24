export class Movie {
  public title: string;
  public duration: string;
  public actors: string;
  public directors: string;
  public description: string;
  public imagePath: string;

  constructor(title: string, duration: string, actors: string, directors: string, desc: string, imagePath: string) {
    this.title = title;
    this.duration = duration;
    this.actors = actors;
    this.directors = directors;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
