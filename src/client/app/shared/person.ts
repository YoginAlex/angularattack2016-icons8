import {Score} from "./scores";
export enum SEX {
  women,
  men,
  other
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

    var maxSexScore;
    var topSex;

    var skinTypes = scores.forEach(item=> {
      if (item.id.indexOf('Type') > -1) {
        if (!maxSkinTypeScore || item.score > maxSkinTypeScore) {
          maxSkinTypeScore = item.score;
          topSkinType = SKIN_TYPE[item.id.split("_")[0].toLowerCase()];
        }
      }

      if (item.id.indexOf('gender_') > -1) {
        if (!maxSexScore || item.score > maxSexScore) {
          maxSexScore = item.score;
          topSex = SEX[item.id.split("_")[1].toLowerCase()];
        }
      }
    });

    if (topSkinType != undefined) {
      this.skinType = topSkinType;
    } else {
      this.skinType = SKIN_TYPE.other
    }

    if (topSex != undefined) {
      this.sex = topSex;
    } else {
      this.sex = SEX.other
    }

    debugger;


  }

  type() {
    let string = 'Fitzpatrick type ';
    let skinTypeInfo = {
      type1: {
        number: 'I',
        info: 'pale white; blond or red hair; blue eyes; freckles'
      },
      type2: {
        number: 'II',
        info: 'white; fair; blond or red hair; blue, green, or hazel eyes'
      },
      type3: {
        number: 'III',
        info: 'cream white; fair with any hair or eye color'
      },
      type4: {
        number: 'IV',
        info: 'moderate brown'
      },
      type5: {
        number: 'V',
        info: 'dark brown'
      },
      type6: {
        number: 'VI',
        info: 'deeply pigmented dark brown to darkest brown'
      }
    };

    let type = skinTypeInfo[SKIN_TYPE[this.skinType]];
    if (!type) {
      return false;
    } else {
      return string + type.number + ' (' + type.info + ')';
    }

  }

  sexToSting() {
    if (this.sex == SEX.women) {
      return 'Female';
    } else if (this.sex == SEX.men) {
      return 'Male';
    } else {
      return false;
    }
  }

}