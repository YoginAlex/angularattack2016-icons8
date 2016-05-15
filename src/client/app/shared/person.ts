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
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M14 27c0 2.208-1.79 4-4 4s-4-1.792-4-4c0-2.21 1.79-4 4-4s4 1.79 4 4m28 0c0-2.21-1.79-4-4-4s-4 1.79-4 4c0 2.208 1.79 4 4 4s4-1.792 4-4" fill="#FFCC80"/><path d="M9 20c0-12.725 30-8.285 30 0v10c0 8.286-6.716 15-15 15S9 38.286 9 30V20z" fill="#FFE0B2"/><path d="M40.89 19.338C40.418 13.365 38.33 7.482 31 6l-2-3h-5C14.77 3 7 10.48 7 21v3.4l3 3.6v-6l21-7 7 6v7l3-3.6V21c0-.564-.043-1.117-.11-1.662" fill="#FF5722"/><path d="M33 28c0 1.106-.895 2-2 2s-2-.894-2-2c0-1.105.895-2 2-2s2 .895 2 2m-14 0c0-1.105-.896-2-2-2-1.106 0-2 .895-2 2 0 1.106.894 2 2 2 1.104 0 2-.894 2-2" fill="#784719"/><path d="M19 37h10s-2 3-5 3-5-3-5-3z" fill="#FFAB91"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M14 27c0 2.208-1.79 4-4 4s-4-1.792-4-4c0-2.21 1.79-4 4-4s4 1.79 4 4m28 0c0-2.21-1.79-4-4-4s-4 1.79-4 4c0 2.208 1.79 4 4 4s4-1.792 4-4" fill="#FFA726"/><path d="M8.953 20.083c-.07-12.724 29.954-8.45 30-.166l.055 10C39.054 38.202 32.375 44.954 24.09 45S9.055 38.368 9.01 30.083l-.055-10z" fill="#FFB74D"/><path d="M40.89 19.338C40.418 13.365 38.33 7.482 31 6l-2-3h-5C14.77 3 7 10.48 7 21v3.4l3 3.6v-6l21-7 7 6v7l3-3.6V21c0-.564-.043-1.117-.11-1.662" fill="#FFE082"/><path d="M33 28c0 1.106-.895 2-2 2-1.106 0-2-.894-2-2 0-1.105.894-2 2-2 1.105 0 2 .895 2 2m-14 0c0-1.105-.896-2-2-2-1.106 0-2 .895-2 2 0 1.106.894 2 2 2 1.104 0 2-.894 2-2" fill="#784719"/><path d="M19 37h10s-2 3-5 3-5-3-5-3z" fill="#FB8C00"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="#FFA726"><path d="M14 27c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4M42 27c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4"/></g><path fill="#FFB74D" d="M9 20c0-12.725 30-8.284 30 0v10c0 8.284-6.716 15-15 15S9 38.284 9 30V20z"/><path fill="#424242" d="M40.89 19.338C40.418 13.365 38.33 7.482 31 6l-2-3h-5C14.772 3 7 10.48 7 21v3.4l3 3.6v-6l21-7 7 6v7l3-3.6V21c0-.564-.043-1.117-.11-1.662"/><g fill="#784719"><path d="M33 28c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2M19 28c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2"/></g><path fill="#FB8C00" d="M19 37h10s-2 3-5 3-5-3-5-3z"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M14 27c0 2.208-1.79 4-4 4s-4-1.792-4-4c0-2.21 1.79-4 4-4s4 1.79 4 4m28 0c0-2.21-1.79-4-4-4s-4 1.79-4 4c0 2.208 1.79 4 4 4s4-1.792 4-4" fill="#FC8F00"/><path d="M9 20c0-12.725 30-8.285 30 0v10c0 8.286-6.716 15-15 15-8.284 0-15-6.714-15-15V20z" fill="#FFAA45"/><path d="M40.89 19.338C40.418 13.365 38.33 7.482 31 6l-2-3h-5C14.77 3 7 10.48 7 21v3.4l3 3.6v-6l21-7 7 6v7l3-3.6V21c0-.564-.043-1.117-.11-1.662" fill="#795548"/><path d="M33 28c0 1.106-.895 2-2 2-1.106 0-2-.894-2-2 0-1.105.894-2 2-2 1.105 0 2 .895 2 2m-14 0c0-1.105-.896-2-2-2-1.106 0-2 .895-2 2 0 1.106.894 2 2 2 1.104 0 2-.894 2-2" fill="#784719"/><path d="M19 37h10s-2 3-5 3-5-3-5-3z" fill="#F27F03"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M14 27c0 2.208-1.79 4-4 4s-4-1.792-4-4c0-2.21 1.79-4 4-4s4 1.79 4 4m28 0c0-2.21-1.79-4-4-4s-4 1.79-4 4c0 2.208 1.79 4 4 4s4-1.792 4-4" fill="#C16E14"/><path d="M8.953 20.083c-.07-12.724 29.954-8.45 30-.166l.055 10C39.054 38.202 32.375 44.954 24.09 45S9.055 38.368 9.01 30.083l-.055-10z" fill="#E5852E"/><path d="M40.89 19.338C40.418 13.365 38.33 7.482 31 6l-2-3h-5C14.77 3 7 10.48 7 21v3.4l3 3.6v-6l21-7 7 6v7l3-3.6V21c0-.564-.043-1.117-.11-1.662" fill="#6D4C41"/><path d="M33 28c0 1.106-.895 2-2 2-1.106 0-2-.894-2-2 0-1.105.894-2 2-2 1.105 0 2 .895 2 2m-14 0c0-1.105-.896-2-2-2-1.106 0-2 .895-2 2 0 1.106.894 2 2 2 1.104 0 2-.894 2-2" fill="#212121"/><path d="M19 37h10s-2 3-5 3-5-3-5-3z" fill="#FFAB91"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M14 27c0 2.208-1.79 4-4 4s-4-1.792-4-4c0-2.21 1.79-4 4-4s4 1.79 4 4m28 0c0-2.21-1.79-4-4-4s-4 1.79-4 4c0 2.208 1.79 4 4 4s4-1.792 4-4" fill="#A0530E"/><path d="M9 20c0-12.725 30-8.285 30 0v10c0 8.286-6.716 15-15 15-8.284 0-15-6.714-15-15V20z" fill="#C16E14"/><path d="M40.89 19.338C40.418 13.365 38.33 7.482 31 6l-2-3h-5C14.77 3 7 10.48 7 21v3.4l3 3.6v-6l21-7 7 6v7l3-3.6V21c0-.564-.043-1.117-.11-1.662" fill="#4E342E"/><path d="M33 28c0 1.106-.895 2-2 2-1.106 0-2-.894-2-2 0-1.105.894-2 2-2 1.105 0 2 .895 2 2m-14 0c0-1.105-.896-2-2-2-1.106 0-2 .895-2 2 0 1.106.894 2 2 2 1.104 0 2-.894 2-2" fill="#212121"/><path d="M19 37h10s-2 3-5 3-5-3-5-3z" fill="#FF9E80"/></svg>'
  ];
  private women = [
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M35.126 44s-6-2-11-2S13 44 13 44l-1-12h24l-.874 12z" fill="#BF360C"/><path d="M14.126 28c0 2.208-1.79 4-4 4s-4-1.792-4-4c0-2.21 1.79-4 4-4s4 1.79 4 4M42.126 28c0 2.208-1.79 4-4 4s-4-1.792-4-4c0-2.21 1.79-4 4-4s4 1.79 4 4" fill="#FFA726"/><path d="M38.126 18c0-12.725-28-8.285-28 0v9c0 8.286 6.27 15 14 15s14-6.714 14-15v-9z" fill="#FFE0B2"/><path d="M32 26c0 1.106-.896 2-2 2-1.105 0-2-.894-2-2 0-1.105.895-2 2-2 1.104 0 2 .895 2 2m-12 0c0-1.105-.896-2-2-2-1.105 0-2 .895-2 2 0 1.106.895 2 2 2 1.104 0 2-.894 2-2" fill="#784719"/><path d="M24.126 4C15.62 4 3.126 9 3 36l10 8V24l16.876-9L35 22l.126 22L45 36c0-12-.417-29-14.874-29l-2-3h-4z" fill="#FF5722"/><path d="M19 35h10s-2 3-5 3-5-3-5-3z" fill="#FFAB91"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M35 44s-6-2-11-2-11 2-11 2l-1-12h24l-1 12z" fill="#CC9721"/><path d="M14 28c0 2.208-1.79 4-4 4s-4-1.792-4-4c0-2.21 1.79-4 4-4s4 1.79 4 4M42 28c0 2.208-1.79 4-4 4s-4-1.792-4-4c0-2.21 1.79-4 4-4s4 1.79 4 4" fill="#FFA726"/><path d="M38 18c0-12.725-28-8.285-28 0v9c0 8.286 6.27 15 14 15s14-6.714 14-15v-9z" fill="#FFB74D"/><path d="M32 26c0 1.106-.896 2-2 2-1.106 0-2-.894-2-2 0-1.105.894-2 2-2 1.104 0 2 .895 2 2m-12 0c0-1.105-.896-2-2-2-1.106 0-2 .895-2 2 0 1.106.894 2 2 2 1.104 0 2-.894 2-2" fill="#784719"/><path d="M24 4C15.495 4 3.126 9 3 36l10 8V24l16.75-9L35 22v22l10-8c0-12-.543-29-15-29l-2-3h-4z" fill="#FFE082"/><path d="M19 35h10s-2 3-5 3-5-3-5-3z" fill="#FB8C00"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#BF360C" d="M35 44s-6-2-11-2-11 2-11 2V32h22v12z"/><g fill="#FFA726"><path d="M14 28c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4M42 28c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4"/></g><path fill="#FFB74D" d="M38 18c0-12.725-28-8.284-28 0v9c0 8.284 6.27 15 14 15s14-6.716 14-15v-9z"/><g fill="#784719"><path d="M32 26c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2M20 26c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2"/></g><path fill="#FF5722" d="M24 4C15.495 4 3 9 2.875 36L13 44V24l16.75-9 5.125 7L35 44l10-8c0-12-.543-29-15-29l-2-3h-4z"/><path fill="#FB8C00" d="M19 35h10s-2 3-5 3-5-3-5-3z"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M35 44s-5.874-2-10.874-2S13 44 13 44l-1-12h25l-2 12z" fill="#4E342E"/><path d="M14.126 28c0 2.208-1.79 4-4 4s-4-1.792-4-4c0-2.21 1.79-4 4-4s4 1.79 4 4M42.126 28c0 2.208-1.79 4-4 4s-4-1.792-4-4c0-2.21 1.79-4 4-4s4 1.79 4 4" fill="#FFA726"/><path d="M38.126 18c0-12.725-28-8.285-28 0v9c0 8.286 6.27 15 14 15s14-6.714 14-15v-9z" fill="#FFAA45"/><path d="M32 26c0 1.106-.896 2-2 2-1.106 0-2-.894-2-2 0-1.105.894-2 2-2 1.104 0 2 .895 2 2m-12 0c0-1.105-.896-2-2-2-1.106 0-2 .895-2 2 0 1.106.894 2 2 2 1.104 0 2-.894 2-2" fill="#784719"/><path d="M24.126 4C15.62 4 3.126 9 3 36l10 8V24l17-9 5 7 .126 22L45 36c0-12-.417-29-14.874-29l-2-3h-4z" fill="#795548"/><path d="M19.126 35h10s-2 3-5 3-5-3-5-3z" fill="#F27F03"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M35 44s-6-2-11-2-11 2-11 2V32h22v12z" fill="#3E2723"/><path d="M14 28c0 2.208-1.79 4-4 4s-4-1.792-4-4c0-2.21 1.79-4 4-4s4 1.79 4 4M42 28c0 2.208-1.79 4-4 4s-4-1.792-4-4c0-2.21 1.79-4 4-4s4 1.79 4 4" fill="#FFA726"/><path d="M38 18c0-12.725-28-8.285-28 0v9c0 8.286 6.27 15 14 15s14-6.714 14-15v-9z" fill="#E5852E"/><path d="M32 26c0 1.106-.896 2-2 2-1.105 0-2-.894-2-2 0-1.105.895-2 2-2 1.104 0 2 .895 2 2m-12 0c0-1.105-.896-2-2-2-1.105 0-2 .895-2 2 0 1.106.895 2 2 2 1.104 0 2-.894 2-2" fill="#212121"/><path d="M24 4C15.495 4 3.126 9 3 36l10 8V24l17-9 5 7v22l10-8c0-12-.543-29-15-29l-2-3h-4z" fill="#6D4C41"/><path d="M19 35h10s-2 3-5 3-5-3-5-3z" fill="#FFAB91"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M35.126 44s-6-2-11-2S13 44 13 44l-1-12h24l-.874 12z" fill="#3E2723"/><path d="M14.126 28c0 2.208-1.79 4-4 4s-4-1.792-4-4c0-2.21 1.79-4 4-4s4 1.79 4 4M42.126 28c0 2.208-1.79 4-4 4s-4-1.792-4-4c0-2.21 1.79-4 4-4s4 1.79 4 4" fill="#FFA726"/><path d="M38.126 18c0-12.725-28-8.285-28 0v9c0 8.286 6.27 15 14 15s14-6.714 14-15v-9z" fill="#C16E14"/><path d="M32 26c0 1.106-.896 2-2 2-1.105 0-2-.894-2-2 0-1.105.895-2 2-2 1.104 0 2 .895 2 2m-12 0c0-1.105-.896-2-2-2-1.106 0-2 .895-2 2 0 1.106.894 2 2 2 1.104 0 2-.894 2-2" fill="#212121"/><path d="M24.126 4C15.62 4 3.126 9 3 36l10 8V24l16.876-9L35 22l.126 22L45 36c0-12-.417-29-14.874-29l-2-3h-4z" fill="#4E342E"/><path d="M19.126 35h10s-2 3-5 3-5-3-5-3z" fill="#FF9E80"/></svg>'
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