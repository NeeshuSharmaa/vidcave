import { useContext, useReducer, useState } from "react";
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
    playlists: [],
    search: "",
  };

  const [state, dispatch] = useReducer(DataReducer, initialState);

  const [showPlaylistModal, setShowPlaylistModal] = useState(false);
  const values = { state, dispatch, showPlaylistModal, setShowPlaylistModal };
  console.log(showPlaylistModal);
  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
}
