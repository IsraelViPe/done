"use client";

import Image from "next/image";
import { deleteHabit } from "../actions/actions";

export default function DeleteButton({name} : { name: string }) {
    return (
        <button onClick={() => deleteHabit(name)} type="button">
          <Image
            src={"/trash.svg"}
            width={20}
            height={20}
            alt="ícone lixeira"
          />
        </button>
    );
}