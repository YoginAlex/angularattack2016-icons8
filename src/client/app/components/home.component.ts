import { FORM_DIRECTIVES } from '@angular/common';
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

import { Image } from "../shared/image";
import { UploadedImageService } from '../shared/index';
import { ImageUploader, SkinTypeIcon } from '../additional-components/index'
import { ClassifyApi } from "../shared/services/classify-api.service";
import { SmoothScroll } from "../shared/services/smooth-scroll.service";

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
export class HomeComponent implements AfterViewInit{
  public mainImage:Image;
  
  constructor(
    public uploadedImage:UploadedImageService,
    private _smoothScroll:SmoothScroll
  ) { }

  ngOnInit() {
    this.mainImage = new Image();
  }

  ngAfterViewInit(){
    this._smoothScroll.smoothScroll('mainapp');
  }

}
