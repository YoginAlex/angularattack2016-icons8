import { Component } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';

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
  templateUrl: '/app/additional-components/image-uploader.component/image-uploader.template.html'
})
export class ImageUploader{
  imagePreviewUrl: string;

  uploadImage(image){
    let imageReader = new FileReader();

    imageReader.addEventListener('load', (event: FileReaderEvent) => {
      this.imagePreviewUrl = event.target.result;
    }, false);

    if (image.files[0]) {
      imageReader.readAsDataURL(image.files[0]);
    }
  }
}