'use client';
import { createContext , useContext, Dispatch, SetStateAction, useState, useEffect } from "react";
import { IHabit, getHabitsList } from '../services/kv_db_endpoints';

interface ContextProps {
    habitList: IHabit[],
    setHabitList: Dispatch<SetStateAction<IHabit[]>>,
}

const GlobalContext = createContext<ContextProps>({
    habitList: [],
    setHabitList: (): IHabit[] => []
});



export const GlobalContextProvider = ({children} : {
    children: React.ReactNode;
  }) => {
    const [habitList, setHabitList] = useState<[] | IHabit[]>([]);

    useEffect(() => {
        const fetchData = async () => {
          const response = await getHabitsList();
          if (response) {
            setHabitList(response);
          }
        };
        fetchData();
      }, []);

    return (
        <GlobalContext.Provider value={{habitList, setHabitList}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)