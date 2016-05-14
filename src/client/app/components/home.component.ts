import { FORM_DIRECTIVES } from '@angular/common';
import { Component } from '@angular/core';

import { UploadedImageService } from '../shared/index';
import { ImageUploader, SkinTypeIcon } from '../additional-components/index'

@Component({
  selector: 'sd-home',
  templateUrl: 'app/components/home.component.html',
  styleUrls: ['app/components/home.component.css'],
  directives: [FORM_DIRECTIVES, ImageUploader, SkinTypeIcon]
})
export class HomeComponent {
  public uploadedImage: any;
  
  constructor(){}
}
