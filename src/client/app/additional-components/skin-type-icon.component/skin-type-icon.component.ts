import { Component, OnInit,OnChanges, Input } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';

import { UploadedImageService } from '../../shared/services/uploaded-image.service'
import {Score} from "../../shared/scores";
import {Person, SEX, SKIN_TYPE} from "../../shared/person";
import {IconFace} from "../icon-face.component/icon-face";
import {SelectIcon} from "../select-icon.component/select-icon";
import {SmoothScroll} from "../../shared/services/smooth-scroll.service";


@Component({
  selector: 'skin-type-icon',
  templateUrl: '/app/additional-components/skin-type-icon.component/skin-type-icon.template.html',
  styleUrls: [
    'app/additional-components/skin-type-icon.component/skin-type-icon.component.css'
  ],
  directives:[IconFace, SelectIcon],
  providers: [UploadedImageService]
})
export class SkinTypeIcon implements OnChanges {
  @Input() public scores;
  public person:Person;
  public isWrong: Boolean;
  public isCorrect: Boolean;

  public sex = SEX;
  public skinType = SKIN_TYPE;

  constructor(
    private uploadedImage:UploadedImageService,
    private _smoothScroll:SmoothScroll
  ) { 
    this.isWrong = false;
    this.isCorrect = false;
  }
  
  ngOnChanges() {
    this.person = new Person(this.scores);
    this._smoothScroll.smoothScroll('iconFace');
  }

  clickCorrect() {
    this.isCorrect = true;
    this.isWrong = false;
    this.person.isCorrect = true;
  }

  clickWrong() {
    this.isCorrect = false;
    this.isWrong = true;
    this.person.isCorrect = false;

  }
}