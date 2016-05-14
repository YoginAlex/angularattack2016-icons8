import { Injectable } from '@angular/core';

import { ClassifyApi } from './classify-api.service'
import { Score } from "../scores";

@Injectable()
export class UploadedImageService {
  public scores: any;
  public name: string;

  constructor(private classifyApi:ClassifyApi) {
  }

  public upload(image:File):void {
    return this.classifyApi.getClassify(image)
      .then((scores) => {
        this.scores = scores;
        return scores;
      });
  }

  set scores(scores) {
    this.scores = scores;
  }
}