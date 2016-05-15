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

export class SvgIcons {
  private svgString: String;
  private men = [
    '<svg viewBox="0 0 36 42" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M8 24c0 2.208-1.79 4-4 4s-4-1.792-4-4c0-2.21 1.79-4 4-4s4 1.79 4 4m28 0c0-2.21-1.79-4-4-4s-4 1.79-4 4c0 2.208 1.79 4 4 4s4-1.792 4-4" fill="#FFB780"/><path d="M3 17c0-12.725 30-8.285 30 0v10c0 8.286-6.716 15-15 15-8.284 0-15-6.714-15-15V17z" fill="#FFD0A7"/><path d="M34.89 16.338C34.418 10.365 32.33 4.482 25 3l-2-3h-5C8.77 0 1 7.48 1 18v3.4L4 25v-6l21-7 7 6v7l3-3.6V18c0-.564-.043-1.117-.11-1.662" fill="#F6F0DC"/><path d="M27 25c0 1.106-.895 2-2 2s-2-.894-2-2c0-1.105.895-2 2-2s2 .895 2 2m-14 0c0-1.105-.896-2-2-2-1.106 0-2 .895-2 2 0 1.106.894 2 2 2 1.104 0 2-.894 2-2" fill="#728C9E"/><path d="M13 34h10s-2 3-5 3-5-3-5-3z" fill="#E1886C"/></g></svg>',
    '<svg viewBox="0 0 36 42" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M8 24c0 2.208-1.79 4-4 4s-4-1.792-4-4c0-2.21 1.79-4 4-4s4 1.79 4 4m28 0c0-2.21-1.79-4-4-4s-4 1.79-4 4c0 2.208 1.79 4 4 4s4-1.792 4-4" fill="#FFA726"/><path d="M2.953 17.083c-.07-12.724 29.954-8.45 30-.166l.055 10C33.054 35.202 26.375 41.954 18.09 42c-8.283.046-15.036-6.632-15.082-14.917l-.055-10z" fill="#FFB74D"/><path d="M34.89 16.338C34.418 10.365 32.33 4.482 25 3l-2-3h-5C8.77 0 1 7.48 1 18v3.4L4 25v-6l21-7 7 6v7l3-3.6V18c0-.564-.043-1.117-.11-1.662" fill="#FFE082"/><path d="M27 25c0 1.106-.895 2-2 2-1.106 0-2-.894-2-2 0-1.105.894-2 2-2 1.105 0 2 .895 2 2m-14 0c0-1.105-.896-2-2-2-1.106 0-2 .895-2 2 0 1.106.894 2 2 2 1.104 0 2-.894 2-2" fill="#784719"/><path d="M13 34h10s-2 3-5 3-5-3-5-3z" fill="#FB8C00"/></g></svg>',
    '<svg viewBox="0 0 36 42" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M8 24c0 2.208-1.79 4-4 4s-4-1.792-4-4c0-2.21 1.79-4 4-4s4 1.79 4 4m28 0c0-2.21-1.79-4-4-4s-4 1.79-4 4c0 2.208 1.79 4 4 4s4-1.792 4-4" fill="#FC8F00"/><path d="M3 17c0-12.725 30-8.285 30 0v10c0 8.286-6.716 15-15 15-8.284 0-15-6.714-15-15V17z" fill="#FFAA45"/><path d="M34.89 16.338C34.418 10.365 32.33 4.482 25 3l-2-3h-5C8.77 0 1 7.48 1 18v3.4L4 25v-6l21-7 7 6v7l3-3.6V18c0-.564-.043-1.117-.11-1.662" fill="#795548"/><path d="M27 25c0 1.106-.895 2-2 2-1.106 0-2-.894-2-2 0-1.105.894-2 2-2 1.105 0 2 .895 2 2m-14 0c0-1.105-.896-2-2-2-1.106 0-2 .895-2 2 0 1.106.894 2 2 2 1.104 0 2-.894 2-2" fill="#784719"/><path d="M13 34h10s-2 3-5 3-5-3-5-3z" fill="#F27F03"/></g></svg>',
    '<svg viewBox="0 0 36 42" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M8 24c0 2.208-1.79 4-4 4s-4-1.792-4-4c0-2.21 1.79-4 4-4s4 1.79 4 4m28 0c0-2.21-1.79-4-4-4s-4 1.79-4 4c0 2.208 1.79 4 4 4s4-1.792 4-4" fill="#C16E14"/><path d="M2.953 17.083c-.07-12.724 29.954-8.45 30-.166l.055 10C33.054 35.202 26.375 41.954 18.09 42c-8.283.046-15.036-6.632-15.082-14.917l-.055-10z" fill="#E5852E"/><path d="M34.89 16.338C34.418 10.365 32.33 4.482 25 3l-2-3h-5C8.77 0 1 7.48 1 18v3.4L4 25v-6l21-7 7 6v7l3-3.6V18c0-.564-.043-1.117-.11-1.662" fill="#6D4C41"/><path d="M27 25c0 1.106-.895 2-2 2-1.106 0-2-.894-2-2 0-1.105.894-2 2-2 1.105 0 2 .895 2 2m-14 0c0-1.105-.896-2-2-2-1.106 0-2 .895-2 2 0 1.106.894 2 2 2 1.104 0 2-.894 2-2" fill="#212121"/><path d="M13 34h10s-2 3-5 3-5-3-5-3z" fill="#FFAB91"/></g></svg>',
    '<svg viewBox="0 0 36 42" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M8 24c0 2.208-1.79 4-4 4s-4-1.792-4-4c0-2.21 1.79-4 4-4s4 1.79 4 4m28 0c0-2.21-1.79-4-4-4s-4 1.79-4 4c0 2.208 1.79 4 4 4s4-1.792 4-4" fill="#A0530E"/><path d="M3 17c0-12.725 30-8.285 30 0v10c0 8.286-6.716 15-15 15-8.284 0-15-6.714-15-15V17z" fill="#C16E14"/><path d="M34.89 16.338C34.418 10.365 32.33 4.482 25 3l-2-3h-5C8.77 0 1 7.48 1 18v3.4L4 25v-6l21-7 7 6v7l3-3.6V18c0-.564-.043-1.117-.11-1.662" fill="#4E342E"/><path d="M27 25c0 1.106-.895 2-2 2-1.106 0-2-.894-2-2 0-1.105.894-2 2-2 1.105 0 2 .895 2 2m-14 0c0-1.105-.896-2-2-2-1.106 0-2 .895-2 2 0 1.106.894 2 2 2 1.104 0 2-.894 2-2" fill="#212121"/><path d="M13 34h10s-2 3-5 3-5-3-5-3z" fill="#FF9E80"/></g></svg>',
    '<svg viewBox="0 0 36 42" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M8 24c0 2.208-1.79 4-4 4s-4-1.792-4-4c0-2.21 1.79-4 4-4s4 1.79 4 4m28 0c0-2.21-1.79-4-4-4s-4 1.79-4 4c0 2.208 1.79 4 4 4s4-1.792 4-4" fill="#A0530E"/><path d="M3 17c0-12.725 30-8.285 30 0v10c0 8.286-6.716 15-15 15-8.284 0-15-6.714-15-15V17z" fill="#865B2D"/><path d="M34.89 16.338C34.418 10.365 32.33 4.482 25 3l-2-3h-5C8.77 0 1 7.48 1 18v3.4L4 25v-6l21-7 7 6v7l3-3.6V18c0-.564-.043-1.117-.11-1.662" fill="#4E342E"/><path d="M27 25c0 1.106-.895 2-2 2-1.106 0-2-.894-2-2 0-1.105.894-2 2-2 1.105 0 2 .895 2 2m-14 0c0-1.105-.896-2-2-2-1.106 0-2 .895-2 2 0 1.106.894 2 2 2 1.104 0 2-.894 2-2" fill="#212121"/><path d="M23 34s-2 3-5 3-5-3-5-3h10z" fill="#BF8163"/></g></svg>'
  ];
  private women = [
    '<svg viewBox="0 0 42 40" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M21.126 38C16.126 38 10 40 10 40L9 28h24l-.874 12s-6-2-11-2z" fill="#FFB780"/><path d="M11.126 24c0 2.208-1.79 4-4 4s-4-1.792-4-4c0-2.21 1.79-4 4-4s4 1.79 4 4M39.126 24c0 2.208-1.79 4-4 4s-4-1.792-4-4c0-2.21 1.79-4 4-4s4 1.79 4 4" fill="#FFA726"/><path d="M35.126 14c0-12.725-28-8.285-28 0v9c0 8.286 6.27 15 14 15s14-6.714 14-15v-9z" fill="#FFD0A7"/><path d="M29 22c0 1.106-.896 2-2 2-1.105 0-2-.894-2-2 0-1.105.895-2 2-2 1.104 0 2 .895 2 2m-12 0c0-1.105-.896-2-2-2-1.105 0-2 .895-2 2 0 1.106.895 2 2 2 1.104 0 2-.894 2-2" fill="#728C9E"/><path d="M0 32l10 8V20l16.876-9L32 18l.126 22L42 32c0-12-.417-29-14.874-29l-2-3h-4C12.62 0 .126 5 0 32z" fill="#F6EFDB"/><path d="M16 31h10s-2 3-5 3-5-3-5-3z" fill="#E1886C"/></g></svg>',
    '<svg viewBox="0 0 42 40" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M32 40s-6-2-11-2-11 2-11 2L9 28h24l-1 12z" fill="#CC9721"/><path d="M11 24c0 2.208-1.79 4-4 4s-4-1.792-4-4c0-2.21 1.79-4 4-4s4 1.79 4 4M39 24c0 2.208-1.79 4-4 4s-4-1.792-4-4c0-2.21 1.79-4 4-4s4 1.79 4 4" fill="#FFA726"/><path d="M35 14C35 1.275 7 5.715 7 14v9c0 8.286 6.27 15 14 15s14-6.714 14-15v-9z" fill="#FFB74D"/><path d="M29 22c0 1.106-.896 2-2 2-1.106 0-2-.894-2-2 0-1.105.894-2 2-2 1.104 0 2 .895 2 2m-12 0c0-1.105-.896-2-2-2-1.106 0-2 .895-2 2 0 1.106.894 2 2 2 1.104 0 2-.894 2-2" fill="#784719"/><path d="M21 0C12.495 0 .126 5 0 32l10 8V20l16.75-9L32 18v22l10-8c0-12-.543-29-15-29l-2-3h-4z" fill="#FFE082"/><path d="M16 31h10s-2 3-5 3-5-3-5-3z" fill="#FB8C00"/></g></svg>',
    '<svg viewBox="0 0 42 40" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M32 40s-5.874-2-10.874-2C16.126 38 10 40 10 40L9 28h25l-2 12z" fill="#4E342E"/><path d="M11.126 24c0 2.208-1.79 4-4 4s-4-1.792-4-4c0-2.21 1.79-4 4-4s4 1.79 4 4M39.126 24c0 2.208-1.79 4-4 4s-4-1.792-4-4c0-2.21 1.79-4 4-4s4 1.79 4 4" fill="#FFA726"/><path d="M35.126 14c0-12.725-28-8.285-28 0v9c0 8.286 6.27 15 14 15s14-6.714 14-15v-9z" fill="#FFAA45"/><path d="M29 22c0 1.106-.896 2-2 2-1.106 0-2-.894-2-2 0-1.105.894-2 2-2 1.104 0 2 .895 2 2m-12 0c0-1.105-.896-2-2-2-1.106 0-2 .895-2 2 0 1.106.894 2 2 2 1.104 0 2-.894 2-2" fill="#784719"/><path d="M21.126 0C12.62 0 .126 5 0 32l10 8V20l17-9 5 7 .126 22L42 32c0-12-.417-29-14.874-29l-2-3h-4z" fill="#795548"/><path d="M16.126 31h10s-2 3-5 3-5-3-5-3z" fill="#F27F03"/></g></svg>',
    '<svg viewBox="0 0 42 40" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M32 40s-6-2-11-2-11 2-11 2V28h22v12z" fill="#3E2723"/><path d="M11 24c0 2.208-1.79 4-4 4s-4-1.792-4-4c0-2.21 1.79-4 4-4s4 1.79 4 4M39 24c0 2.208-1.79 4-4 4s-4-1.792-4-4c0-2.21 1.79-4 4-4s4 1.79 4 4" fill="#FFA726"/><path d="M35 14C35 1.275 7 5.715 7 14v9c0 8.286 6.27 15 14 15s14-6.714 14-15v-9z" fill="#E5852E"/><path d="M29 22c0 1.106-.896 2-2 2-1.105 0-2-.894-2-2 0-1.105.895-2 2-2 1.104 0 2 .895 2 2m-12 0c0-1.105-.896-2-2-2-1.105 0-2 .895-2 2 0 1.106.895 2 2 2 1.104 0 2-.894 2-2" fill="#212121"/><path d="M21 0C12.495 0 .126 5 0 32l10 8V20l17-9 5 7v22l10-8c0-12-.543-29-15-29l-2-3h-4z" fill="#6D4C41"/><path d="M16 31h10s-2 3-5 3-5-3-5-3z" fill="#FFAB91"/></g></svg>',
    '<svg viewBox="0 0 42 40" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M32.126 40s-6-2-11-2S10 40 10 40L9 28h24l-.874 12z" fill="#3E2723"/><path d="M11.126 24c0 2.208-1.79 4-4 4s-4-1.792-4-4c0-2.21 1.79-4 4-4s4 1.79 4 4M39.126 24c0 2.208-1.79 4-4 4s-4-1.792-4-4c0-2.21 1.79-4 4-4s4 1.79 4 4" fill="#FFA726"/><path d="M35.126 14c0-12.725-28-8.285-28 0v9c0 8.286 6.27 15 14 15s14-6.714 14-15v-9z" fill="#C16E14"/><path d="M29 22c0 1.106-.896 2-2 2-1.105 0-2-.894-2-2 0-1.105.895-2 2-2 1.104 0 2 .895 2 2m-12 0c0-1.105-.896-2-2-2-1.106 0-2 .895-2 2 0 1.106.894 2 2 2 1.104 0 2-.894 2-2" fill="#212121"/><path d="M21.126 0C12.62 0 .126 5 0 32l10 8V20l16.876-9L32 18l.126 22L42 32c0-12-.417-29-14.874-29l-2-3h-4z" fill="#4E342E"/><path d="M16.126 31h10s-2 3-5 3-5-3-5-3z" fill="#FF9E80"/></g></svg>',
    '<svg viewBox="0 0 42 40" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M32.126 40s-6-2-11-2S10 40 10 40L9 28h24l-.874 12z" fill="#3E2723"/><path d="M11.126 24c0 2.208-1.79 4-4 4s-4-1.792-4-4c0-2.21 1.79-4 4-4s4 1.79 4 4M39.126 24c0 2.208-1.79 4-4 4s-4-1.792-4-4c0-2.21 1.79-4 4-4s4 1.79 4 4" fill="#FFA726"/><path d="M35.126 14c0-12.725-28-8.285-28 0v9c0 8.286 6.27 15 14 15s14-6.714 14-15v-9z" fill="#865B2C"/><path d="M29 22c0 1.106-.896 2-2 2-1.105 0-2-.894-2-2 0-1.105.895-2 2-2 1.104 0 2 .895 2 2m-12 0c0-1.105-.896-2-2-2-1.106 0-2 .895-2 2 0 1.106.894 2 2 2 1.104 0 2-.894 2-2" fill="#212121"/><path d="M21.126 0C12.62 0 .126 5 0 32l10 8V20l16.876-9L32 18l.126 22L42 32c0-12-.417-29-14.874-29l-2-3h-4z" fill="#4E342E"/><path d="M16.126 31h10s-2 3-5 3-5-3-5-3z" fill="#BE8163"/></g></svg>'
  ];

  public getSvgString(sex: SEX, skinType: SKIN_TYPE):String {
    this.svgString = '';
    if (sex === SEX.women) {
      this.svgString = this.women[skinType];
    }
    if (sex === SEX.men) {
      this.svgString = this.men[skinType];
    }
    return this.svgString;
  }

  public getMenArray():Array {
    return this.men;
  }
  public getWomenArray():Array {
    return this.women;
  }
  
}

export class Person {
  public sex:SEX;
  public skinType:SKIN_TYPE;
  public isCorrect: Boolean;
  public svg: string;

  constructor(scores:Array<Score>) {
    this.isCorrect = false;
    
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
  }

  type() {
    let string = 'Fitzpatrick ';
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
      return string + '<strong>type ' + type.number + '</strong>' + '<br/> (' + type.info + ')';
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
  
  public getSvg() {
    let 
      svg = new SvgIcons().getSvgString(this.sex, this.skinType);
    return svg;
  }
  
}