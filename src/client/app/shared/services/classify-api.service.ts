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
      
      resolve(JSON.parse('{"images":[{"image":"BUBVkUoJR-L4rJ-pnnQDTfyb.jpg","scores":[{"classifier_id":"Type1_732498768","name":"Type1","score":0.963176},{"classifier_id":"Head_and_Shoulders","name":"Head_and_Shoulders","score":0.926944},{"classifier_id":"Voting_Booth","name":"Voting_Booth","score":0.904958},{"classifier_id":"gender_women_1786996178","name":"gender_women","score":0.898363},{"classifier_id":"Female_Adult","name":"Female_Adult","score":0.894031},{"classifier_id":"Maternity_Ward","name":"Maternity_Ward","score":0.884677},{"classifier_id":"People","name":"People","score":0.785606},{"classifier_id":"Wedding","name":"Wedding","score":0.781223},{"classifier_id":"Irish_Coffee","name":"Irish_Coffee","score":0.74857},{"classifier_id":"Banners","name":"Banners","score":0.728072},{"classifier_id":"Dressing_Room","name":"Dressing_Room","score":0.727925},{"classifier_id":"Jewel","name":"Jewel","score":0.702076},{"classifier_id":"Ice_Cream_or_Frozen_Yogurt","name":"Ice_Cream_or_Frozen_Yogurt","score":0.691755},{"classifier_id":"Type2_447942973","name":"Type 2","score":0.690533},{"classifier_id":"Male_Adult","name":"Male_Adult","score":0.675884},{"classifier_id":"Concert_Hall","name":"Concert_Hall","score":0.639457},{"classifier_id":"Type1_1126594096","name":"Type 1","score":0.637706},{"classifier_id":"Type5_1422488977","name":"Type 5","score":0.559223},{"classifier_id":"Restaurant","name":"Restaurant","score":0.557375},{"classifier_id":"Concert","name":"Concert","score":0.52616},{"classifier_id":"Eatery_Space","name":"Eatery_Space","score":0.519203}]}]}'));

      // xhr.onreadystatechange = function () {
      //   if (xhr.readyState == 4) {
      //     if (xhr.status == 200) {
      //       resolve(JSON.parse(xhr.response));
      //     } else {
      //       reject(xhr.response);
      //     }
      //   }
      // };
      //
      // xhr.open("POST", url, true);
      // xhr.send(formData);
    });
  }
}