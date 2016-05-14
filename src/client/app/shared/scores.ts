export class Score {
  constructor(obj: any) {
    this.id = obj.classifier_id;
    this.name = obj.name;
    this.score = obj.score;
  }
  id: string;
  name: string;
  score: number;
}