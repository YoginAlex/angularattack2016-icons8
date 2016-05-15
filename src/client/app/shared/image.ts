import {Score} from "./scores";

export class Image {
  public url:string;
  public scores:any;

  constructor() {
    this.clear();
  }

  clear() {
    this.url = '';
    this.scores = false;
  }

}