import { Component, OnInit, Input } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';

import { UploadedImageService } from '../../shared/services/uploaded-image.service'
import {Score} from "../../shared/scores";
import {Person} from "../../shared/person";


@Component({
  selector: 'skin-type-icon',
  templateUrl: '/app/additional-components/skin-type-icon.component/skin-type-icon.template.html',
  providers: [UploadedImageService]
})

export class SkinTypeIcon implements OnInit {
  @Input() public scores;
  public person:Person;

  constructor(
    private uploadedImage: UploadedImageService
  ) {
    this.person = new Person(this.scores);
  }
  
  ngOnInit() {

  }
}