import { FORM_DIRECTIVES } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';

import { UploadedImageService } from '../shared/index';
import { ImageUploader, SkinTypeIcon } from '../additional-components/index'
import {ClassifyApi} from "../shared/services/classify-api.service";
import {Image} from "../shared/image";
import {SmoothScroll} from "../shared/services/smooth-scroll.service";

@Component({
  selector: 'sd-home',
  templateUrl: 'app/components/home.component.html',
  styleUrls: [
    'css/main.css',
    'app/components/home.component.css'
  ],
  providers: [ClassifyApi, UploadedImageService, SmoothScroll],
  directives: [FORM_DIRECTIVES, ImageUploader, SkinTypeIcon]
})
export class HomeComponent {
  public mainImage:Image;


  constructor(public uploadedImage:UploadedImageService,
              private _smoothScroll:SmoothScroll) {

  }

  ngOnInit() {
    this.mainImage = new Image();
  }


}
