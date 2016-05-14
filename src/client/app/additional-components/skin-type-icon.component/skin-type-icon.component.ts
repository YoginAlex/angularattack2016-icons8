import { Component, OnInit } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';

import { UploadedImageService } from '../../shared/services/uploaded-image.service'
import {Score} from "../../shared/scores";


@Component({
  selector: 'skin-type-icon',
  templateUrl: '/app/additional-components/skin-type-icon.component/skin-type-icon.template.html',
  providers: [UploadedImageService]
})

export class SkinTypeIcon implements OnInit {
  private scores: Array<Score>;

  constructor(
    private uploadedImage: UploadedImageService
  ) {}

  ngOnInit() {
    this.scores = this.uploadedImage.scores;
  }
}