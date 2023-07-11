import { day } from "../components/WeekGrid";

export default function findCorrectIconUrl(days: day[], dayWeek: string) {

    const iconsUrls = {ball : "/ball.svg", checked: "/checked.svg", x: "/x.svg" };
    const isNonExistentDate = days.some((day) => !day.hasOwnProperty(dayWeek))

    if (isNonExistentDate || days.length === 0 ) {
        return iconsUrls['ball' as keyof typeof iconsUrls]
    } else {
        const day: day = days.find((day) => day.hasOwnProperty(dayWeek)) as day;

        if(day[dayWeek]) {
            return iconsUrls['checked']
        } else {
            return iconsUrls['x']
        }
    }
}