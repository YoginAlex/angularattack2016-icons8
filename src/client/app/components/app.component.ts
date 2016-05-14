import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { UploadedImageService } from '../shared/index';

@Component({
  selector: 'sd-app',
  templateUrl: 'app/components/app.component.html',
  directives: [ROUTER_DIRECTIVES, HomeComponent],
  styleUrls: ['css/main-classes.css', 'app/components/app.component.css']
})

export class AppComponent {

}
