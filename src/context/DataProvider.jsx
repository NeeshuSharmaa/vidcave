import { useContext, useReducer } from "react";
import { createContext } from "react";
import { DataReducer } from "../reducer/DataReducer";
import { categories, videos } from "../db";

const DataContext = createContext();

export const useDataContext = () => useContext(DataContext);

export default function DataProvider({ children }) {
  const initialState = {
    allVideos: [...videos],
    categories: [...categories],
    watchLater: [],
    playlist: [],
  };

  const [state, dispatch] = useReducer(DataReducer, initialState);
  const values = { state, dispatch };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
}
