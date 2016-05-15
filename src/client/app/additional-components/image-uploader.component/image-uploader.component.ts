import { Component, Output, Input, Renderer } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';

import { UploadedImageService } from '../../shared/services/uploaded-image.service'
import { ClassifyApi } from "../../shared/services/classify-api.service";
import {SmoothScroll} from "../../shared/services/smooth-scroll.service";

//Just need for TS Compiler
interface FileReaderEventTarget extends EventTarget {
  result:string
}
interface FileReaderEvent extends Event {
  target: FileReaderEventTarget;
  getMessage():string;
}


@Component({
  selector: 'image-uploader',
  templateUrl: '/app/additional-components/image-uploader.component/image-uploader.template.html',
  styleUrls: [
    'app/additional-components/image-uploader.component/image-uploader.component.css'
  ],
  providers: [UploadedImageService, ClassifyApi],
  host: {'class' : 'ng-animate image-uploader'}
})
export class ImageUploader {
  @Input() public mainImage;
  @Input() public isStart: Boolean;
  private imagePreviewUrl: String;
  public isLoad;

  constructor(
    private uploadedImage:UploadedImageService,
    private _smoothScroll:SmoothScroll) 
  {
    this.isStart = true;
  }

  uploadImage(image:any) {
    let
      imageReader = new FileReader();
    this.imagePreviewUrl = '';

    imageReader.addEventListener('load', (event:FileReaderEvent) => {
      this.imagePreviewUrl = event.target.result;
      this._smoothScroll.smoothScroll('image');
      this.isStart = false;
    }, false);

    if (image.files[0]) {
      imageReader.readAsDataURL(image.files[0]);
      this.isLoad = true;
     // this._smoothScroll.smoothScroll('loaderImage');
      this.mainImage.scores = false;
      this.uploadedImage.upload(image.files[0]).then((scores) => {
        this.mainImage.scores = scores;
        this.isLoad = false;
      });
    }
  }

  clickForUpload(event) {
    event.preventDefault();
    //SuppaDuppa Monkey HacK! It's Since Biach!
    setTimeout(function () {
      document.getElementById('uploadButton').click();
    }, 50);
  }
  
}