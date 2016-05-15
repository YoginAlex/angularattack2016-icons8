import { Component, OnInit,OnChanges, Input } from '@angular/core';

import { Person, SvgIcons, SKIN_TYPE, SEX } from "../../shared/person";


@Component({
  selector:'icon-face',
  templateUrl:'/app/additional-components/icon-face.component/icon-face.template.html',
  styleUrls: [
    'app/additional-components/icon-face.component/icon-face.css'
  ]
})
export class IconFace {
  @Input() person:Person;
  sex = SEX;
  skinType = SKIN_TYPE;
}