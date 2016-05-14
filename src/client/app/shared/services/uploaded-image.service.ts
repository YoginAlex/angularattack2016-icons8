import { Injectable } from '@angular/core';

import { ClassifyApi } from './classify-api.service'
import {Score} from "../scores";

@Injectable()
export class UploadedImageService {
  private scores: Array<Score>;

  constructor(
    private classifyApi: ClassifyApi
  ){}
  
  public upload(image: File): void {
    this.classifyApi.getClassify(image)
      .then((scores) => this.scores = scores);
  }
}