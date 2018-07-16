var message: string;
var age, sex: number;
enum SEX { MALE, FEMALE };
sex = SEX.FEMALE;
age = 17;
if (sex == SEX.MALE) {
    if (age >= 18) {
        message = "結婚できます";
    
    } else {
        message = "まだ結婚できません";
    }
} else {
    if (age >= 16) {
        message = "結婚できます";
    } else {
        message = "まだ結婚できません";
    }
}
alert(message);