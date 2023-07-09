import { IHabit } from '../services/kv_db_endpoints';
import { NextFunctionComponent } from 'next';

interface Props {
    habit: IHabit;
}

export default function WeekGrid({ props }): NextFunctionComponent <Props> {
    const { habit } = props;
    return (
        <div>
            <div><span>{ habit.name }</span></div>
        </div>
    )
}