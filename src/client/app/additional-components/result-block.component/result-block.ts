import { Component, OnInit, OnChanges, Input, AfterViewInit } from '@angular/core';

import { SmoothScroll } from "../../shared/services/smooth-scroll.service";

import { Person } from "../../shared/person";

@Component({
  selector: 'result-block',
  templateUrl: '/app/additional-components/result-block.component/result-block.html',
  styleUrls: [
    'app/additional-components/result-block.component/result-block.css'
  ],
  host: {'class': 'ng-animate result-block'}
})
export class ResultBlock implements AfterViewInit {
  @Input() public person:Person;

  constructor(private _smoothScroll:SmoothScroll) {
  }

  clickAnotherPhoto() {
    this._smoothScroll.smoothScroll('uploadButton');
    setTimeout(function () {
      document.getElementById('uploadButton').click();
    }, 1000)
  }

  ngAfterViewInit() {
    console.log('footer');
    var self = this;
    setTimeout(function () {
      self._smoothScroll.smoothScroll('footer');
    }, 1000);

  }
}