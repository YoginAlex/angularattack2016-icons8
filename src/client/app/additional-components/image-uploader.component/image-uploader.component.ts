import { Component } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';

import { ClassifyApi } from '../../shared/services/classify-api.service'

//Just need for TS Compiler
interface FileReaderEventTarget extends EventTarget {
  result:string
}
interface FileReaderEvent extends Event {
  target: FileReaderEventTarget;
  getMessage():string;
}


@Component({
  selector: 'upload-form',
  templateUrl: '/app/additional-components/image-uploader.component/image-uploader.template.html',
  providers: [ClassifyApi]
})
export class ImageUploader{
  imagePreviewUrl: string;

  constructor(
    private classifyService: ClassifyApi
  ) {}
  
  uploadImage(image: any){
    let imageReader = new FileReader();

    imageReader.addEventListener('load', (event: FileReaderEvent) => {
      this.imagePreviewUrl = event.target.result;
    }, false);

    if (image.files[0]) {
      imageReader.readAsDataURL(image.files[0]);
      this.classifyService.getClassify(image.files[0]);
    }
  }
}