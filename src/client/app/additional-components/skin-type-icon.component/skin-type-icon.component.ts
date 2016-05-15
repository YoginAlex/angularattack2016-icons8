import { Component, OnInit,OnChanges, Input } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';

import { UploadedImageService } from '../../shared/services/uploaded-image.service'
import {Score} from "../../shared/scores";
import {Person} from "../../shared/person";
import {IconFace} from "../icon-face.component/icon-face";


@Component({
  selector: 'skin-type-icon',
  templateUrl: '/app/additional-components/skin-type-icon.component/skin-type-icon.template.html',
  styleUrls: [
    'app/additional-components/skin-type-icon.component/skin-type-icon.component.css'
  ],
  directives:[IconFace],
  providers: [UploadedImageService]
})
export class SkinTypeIcon implements OnChanges {
  @Input() public scores;
  public person:Person;
  
  constructor(
    private uploadedImage:UploadedImageService
  ) { }
  
  ngOnChanges() {
    this.person = new Person(this.scores);
  }
}