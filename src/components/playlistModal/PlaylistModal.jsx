import { useState } from "react";
import { useDataContext } from "../../context/DataProvider";
import "./PlaylistModal.css";
export default function PlaylistModal() {
  const {
    state: { playlists },
    dispatch,
    setShowPlaylistModal,
  } = useDataContext();
  const [playlistName, setPlaylistName] = useState("");

  return (
    <div className="modal">
      <div className="modal-main">
        <h2>Add to Playlist</h2>
        <div className="modal-body">
          <input
            type="text"
            placeholder="Playlist Name"
            value={playlistName}
            onChange={(e) => setPlaylistName(e.target.value)}
          />
          <button
            className="primary-btn"
            onClick={() => {
              dispatch({ type: "CREATE_PLAYLIST", payload: playlistName });
              setPlaylistName("");
            }}
          >
            Create +
          </button>
          {!!playlists?.length && (
            <div className="existing-playlists">
              {playlists.map(({ playlistName }) => (
                <div className="checkbox-div" key={playlistName}>
                  <input type="checkbox" />
                  <label>{playlistName}</label>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="modal-footer">
          <span
            onClick={() => {
              dispatch({ type: "SAVE_TO_PLAYLIST" });
              setShowPlaylistModal(false);
            }}
          >
            Save{" "}
          </span>
          <span>|</span>

          <span onClick={() => setShowPlaylistModal(false)}>Cancel</span>
        </div>
      </div>
    </div>
  );
}
