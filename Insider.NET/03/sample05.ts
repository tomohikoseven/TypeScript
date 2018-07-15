enum SEASONS { SPRING = 1, SUMMER = 2, AUTUMN = 4, WINTER = 8 };
var season: SEASONS;
season = SEASONS.SPRING + SEASONS.SUMMER;

switch (season) {
    case SEASONS.SPRING:
        alert("春物です");
        break;
    case SEASONS.SPRING + SEASONS.SUMMER:
        alert("春夏物です");
        break;
    default:
        alert("秋または冬にも使えます");
}
