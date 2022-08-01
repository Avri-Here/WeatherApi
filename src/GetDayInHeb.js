// I jsut retrun the day of a week in hebrwe words ..
const Days = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"];


export const MyDayHebre = (props) => {
    return Days[new Date(props.dt * 1000).getDay()];
}