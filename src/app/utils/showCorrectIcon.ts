import { day } from "../services/kv_db_endpoints";


export default function findCorrectIconUrl(days: day, dayWeek: string) {

    console.log(days, 'aqui')

    const iconsUrls = {ball : "/ball.svg", checked: "/checked.svg", x: "/x.svg" };
    const isNonExistentDate = !(dayWeek in days)

    if (isNonExistentDate || Object.keys(days).length === 0 ) {
        return iconsUrls['ball' as keyof typeof iconsUrls]
    } else {
        if(days[dayWeek]) {
            return iconsUrls['checked']
        } else {
            return iconsUrls['x']
        }
    }
}