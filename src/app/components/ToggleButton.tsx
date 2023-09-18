"use client"

import Image from "next/image";
import { updateHabit } from "../actions/actions";
import { day } from "../services/kv_db_endpoints";

export default function ToggleButton({name, date, dayslist, urlIcon } : {name: string, date: string, dayslist: day, urlIcon:string }) {
    return (
        <button
              onClick={() => updateHabit(name, date, dayslist)}
              type="button"
            >
              <Image
                src={urlIcon}
                width={15}
                height={15}
                alt="status ícone"
              />
            </button>
    )
}