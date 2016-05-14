import {Score} from "./scores";
enum SEX {
    WOMEN,
    MEN,
    OTHER
}

enum SKIN_TYPE{
    skin_type_1,
    skin_type_2,
    skin_type_3,
    skin_type_4,
    skin_type_5,
    skin_type_6
}

export class Person {
    public sex:SEX;
    public skinType:SKIN_TYPE;

    constructor(scores:Array<Score>) {
        var maxSkinTypeScore;
        var topSkinType;

        var skinTypes = scores.forEach(item=> {
            if (item.id.indexOf('skin_type') > -1) {
                if (!maxSkinTypeScore || item.score > maxSkinTypeScore) {
                    maxSkinTypeScore = item.score;
                    topSkinType = SKIN_TYPE[SKIN_TYPE[item.id]];
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

        if(!topSkinType){
            this.skinType = topSkinType;
        } else {
            this.skinType = SKIN_TYPE.skin_type_3
        }


        if(!this.sex){
            this.sex = SEX.OTHER;
        }

    }

}