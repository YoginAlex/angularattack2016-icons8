import {Score} from "./scores";
export enum SEX {
  WOMEN,
  MEN,
  OTHER
}

export enum SKIN_TYPE{
  type1,
  type2,
  type3,
  type4,
  type5,
  type6,
  other
}


export class Person {
  public sex:SEX;
  public skinType:SKIN_TYPE;

  constructor(scores:Array<Score>) {
    var maxSkinTypeScore;
    var topSkinType;

    var skinTypes = scores.forEach(item=> {
      if (item.id.indexOf('Type') > -1) {
        if (!maxSkinTypeScore || item.score > maxSkinTypeScore) {
          maxSkinTypeScore = item.score;
          topSkinType = SKIN_TYPE[item.id.split("_")[0].toLowerCase()];

        }
      }

      if (item.id.indexOf('gender_sex_men') > -1) {
        if (item.score > 0.5) {
          this.sex = SEX.MEN;
        } else {
          this.sex = SEX.WOMEN;
        }
      }
    });

    if (!topSkinType) {
      this.skinType = topSkinType;
    } else {
      this.skinType = SKIN_TYPE.other
    }

    if (!this.sex) {
      this.sex = SEX.OTHER;
    }

  }

}