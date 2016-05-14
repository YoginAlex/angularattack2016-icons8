import { Injectable } from '@angular/core';

import { UploadedImageService } from './uploaded-image.service'
import { Score } from "../scores";

@Injectable()
export class ClassifyApi {
  constructor () {}

  private classifyUrl = 'https://fizpatrick.herokuapp.com/api/classify';

  public getClassify(image: File) {
    return this.makeFileRequest(this.classifyUrl, [], image).then((result: any) => {
      console.log('Classify result', result);
      return result.images[0].scores.map(item => new Score(item));
    }, (error) => {
      console.log('Error uploading Image', error);
      return [];
    });
  }

  private makeFileRequest(url: string, params: Array<string>, file: File) {
    return new Promise((resolve, reject) => {
      var
        formData: any = new FormData(),
        xhr = new XMLHttpRequest();

      formData.append("photo", file, file.name);
      
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      };

      xhr.open("POST", url, true);
      xhr.send(formData);
    });
  }
}