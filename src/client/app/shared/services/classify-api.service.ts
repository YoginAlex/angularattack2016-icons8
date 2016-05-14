import { Injectable } from '@angular/core';

import { UploadedImageService } from './uploaded-image.service'

@Injectable()
export class ClassifyApi {
  constructor () {}

  private classifyUrl = 'https://fizpatrick.herokuapp.com/api/classify';

  getClassify(image: File) {
    this.makeFileRequest(this.classifyUrl, [], image).then((result) => {
      console.log(result);
    }, (error) => {
      console.log('ERRRORRR', error);
    });
  }

  private makeFileRequest(url: string, params: Array<string>, file: File) {
    return new Promise((resolve, reject) => {
      var
        formData: any = new FormData(),
        xhr = new XMLHttpRequest();

      formData.append("photo[]", file, file.name);

      console.log('file', file);
      console.log('formData', formData);

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