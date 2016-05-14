import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';

import { HomeComponent } from '../+home/index';
import { NameListService } from '../shared/index';

@Component({
  selector: 'sd-app',
  viewProviders: [NameListService],
  templateUrl: 'app/components/app.component.html',
  directives: [ROUTER_DIRECTIVES, HomeComponent],
  styleUrls: ['app/components/app.component.css']
})
export class AppComponent {}
