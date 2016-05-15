import { Component, OnInit, OnChanges, Input } from '@angular/core';
import {Person} from "../../shared/person";

@Component({
  selector: 'result-block',
  templateUrl: '/app/additional-components/result-block.component/result-block.html',
  styleUrls: [
    'app/additional-components/result-block.component/result-block.css'
  ],
  host: {'class' : 'ng-animate result-block'}
})
export class ResultBlock {
  @Input() public person: Person;
  
  constructor(){}
}