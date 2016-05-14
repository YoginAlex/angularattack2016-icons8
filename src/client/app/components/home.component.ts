import { FORM_DIRECTIVES } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';

import { UploadedImageService } from '../shared/index';
import { ImageUploader, SkinTypeIcon } from '../additional-components/index'
import {ClassifyApi} from "../shared/services/classify-api.service";

@Component({
    selector: 'sd-home',
    templateUrl: 'app/components/home.component.html',
    styleUrls: ['app/components/home.component.css'],
    directives: [FORM_DIRECTIVES, ImageUploader, SkinTypeIcon],
    providers: [ClassifyApi, UploadedImageService]
})
export class HomeComponent {
  public mainImage:any;

  constructor(
    public uploadedImage:UploadedImageService
  ) { }

  ngOnInit() {
    //TODO: Remove preDefined. Need Only for Верстка :)
    this.mainImage = {
        scores: [1, 2, 3]
    };
  }
}
