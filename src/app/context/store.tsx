// "use client";
// import {
//   createContext,
//   useContext,
//   Dispatch,
//   SetStateAction,
//   useState,
//   useEffect,
// } from "react";
// import {
//   IHabit,
//   createOrUpdateHabit,
//   getHabitsList,
// } from "../services/kv_db_endpoints";

// interface ContextProps {
//   habitList: IHabit[];
//   setHabitList: Dispatch<SetStateAction<IHabit[]>>;
// }

// const GlobalContext = createContext<ContextProps>({
//   habitList: [],
//   setHabitList: (): IHabit[] => [],
// });

// export const GlobalContextProvider = ({
//   children,
// }: {
//   children: React.ReactNode;
// }) => {
//   const [habitList, setHabitList] = useState<[] | IHabit[]>([]);

//   useEffect(() => {
//     console.log("use effect global");
//     const fetchData = async () => {
//       const response = await getHabitsList();
//       if (response) {
//         setHabitList(response);
//       }
//     };
//     fetchData();
//   }, []);

//   useEffect(() => {
//     console.log('aqui');
//     const updateData = async () => {
//       await createOrUpdateHabit(habitList);
//     };
//     updateData();
//   }, [habitList]);

//   return (
//     <GlobalContext.Provider value={{ habitList, setHabitList }}>
//       {children}
//     </GlobalContext.Provider>
//   );
// };

// export const useGlobalContext = () => useContext(GlobalContext);
