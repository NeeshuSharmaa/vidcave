export const DataReducer = (state, { type, payload }) => {
  switch (type) {
    case "SEARCH": {
      return { ...state, search: payload };
    }
    case "ADD_TO_WATCH_LATER": {
      return { ...state, watchLater: [...state.watchLater, payload] };
    }
    case "REMOVE_FROM_WATCH_LATER": {
      return {
        ...state,
        watchLater: state.watchLater.filter((ID) => ID !== payload),
      };
    }
    case "CREATE_PLAYLIST": {
      return {
        ...state,
        playlists: [...state.playlists, { playlistName: payload, videos: [] }],
      };
    }
    case "ADD_TO_PLAYLIST": {
      return { ...state };
    }
  }
};
