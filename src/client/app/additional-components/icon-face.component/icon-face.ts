/**
 * Created by nkhri on 15.05.2016.
 */
import { Component, OnInit,OnChanges, Input } from '@angular/core';
import {Person} from "../../shared/person";
import {SEX} from "../../shared/person";
import {SKIN_TYPE} from "../../shared/person";

@Component({
  selector:'icon-face',
  templateUrl:'/app/additional-components/icon-face.component/icon-face.template.html',
})

export class IconFace {
  @Input() person:Person;
  sex = SEX;
  skinType = SKIN_TYPE;
}