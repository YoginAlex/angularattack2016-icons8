import {Score} from "./scores";

export class Image {
  public url:string;
  public scores:any;

  constructor(obj:any) {
    this.clear();
  }

  clear() {
    this.url = '';
    this.scores = false;
  }

}