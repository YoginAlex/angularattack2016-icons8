import { Component, OnInit,OnChanges, Input } from '@angular/core';

import { Person, SvgIcons, SEX, SKIN_TYPE } from "../../shared/person";


@Component({
  selector: 'select-icon',
  templateUrl: '/app/additional-components/select-icon.component/select-icon.html',
  styleUrls: [
    'app/additional-components/select-icon.component/select-icon.css'
  ],
  host: { 'class' : 'ng-animate select-icon' },
})
export class SelectIcon {
  @Input() public person:Person;
  @Input() public isWrong;
  @Input() public isSpecial;

  public men: Array;
  public women: Array;
  public sex = SEX;
  public skinType = SKIN_TYPE;

  selectIcon(sex: SEX, skinType: SKIN_TYPE) {
    this.person.sex = sex;
    this.person.skinType = skinType;
    this.person.isCorrect = true;
  }

  constructor () {
    this.men = new SvgIcons().getMenArray();
    this.women = new SvgIcons().getWomenArray();
  }
}