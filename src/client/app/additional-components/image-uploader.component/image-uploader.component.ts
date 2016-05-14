import { Component } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';

import { UploadedImageService } from '../../shared/services/uploaded-image.service'
import { ClassifyApi } from "../../shared/services/classify-api.service";

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
  providers: [UploadedImageService, ClassifyApi]
})
export class ImageUploader{
  imagePreviewUrl: string;

  constructor(
    private uploadedImage: UploadedImageService
  ) {}
  
  uploadImage(image: any){
    let imageReader = new FileReader();

    imageReader.addEventListener('load', (event: FileReaderEvent) => {
      this.imagePreviewUrl = event.target.result;
    }, false);

    if (image.files[0]) {
      imageReader.readAsDataURL(image.files[0]);
      //TODO: Preloader показывать
      this.uploadedImage.upload(image.files[0]);
    }
  }
}