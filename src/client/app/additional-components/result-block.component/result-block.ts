import { Component, OnInit, OnChanges, Input, AfterViewChecked } from '@angular/core';
import {Person} from "../../shared/person";
import {SmoothScroll} from "../../shared/services/smooth-scroll.service";

@Component({
  selector: 'result-block',
  templateUrl: '/app/additional-components/result-block.component/result-block.html',
  styleUrls: [
    'app/additional-components/result-block.component/result-block.css'
  ],
  host: {'class': 'ng-animate result-block'}
})
export class ResultBlock implements AfterViewChecked {
  @Input() public person:Person;

  constructor(private _smoothScroll:SmoothScroll) {
  }

  ngAfterViewChecked() {
    console.log('footer');
    this._smoothScroll.smoothScroll('footer');
  }
}