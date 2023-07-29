import ReactPlayer from "react-player";
import { useParams } from "react-router";
import { useDataContext } from "../../context/DataProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faClockFour } from "@fortawesome/free-regular-svg-icons";
import { faBars, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Video.css";
export default function Video() {
  const { id } = useParams();
  const {
    state: { allVideos, watchLater },
    dispatch,
    setShowPlaylistModal,
  } = useDataContext();

  const video = allVideos?.find(({ _id }) => _id === Number(id));
  const inWatchLater = watchLater.find((ID) => ID === video._id);

  return (
    <div className="column-page-flex">
      <ReactPlayer
        url={video?.src}
        controls
        className="video-container"
        width="100%"
        height="500px"
      />
      <div className="video-main">
        <div className="video-info">
          <img src="/gabby.jpg" alt="creator" />
          <h3>{video?.title}</h3>
        </div>
        <div className="video-actions">
          <FontAwesomeIcon
            icon={inWatchLater ? faClockFour : faClock}
            className={inWatchLater ? "clock blue" : "clock "}
            onClick={() =>
              inWatchLater
                ? dispatch({
                    type: "REMOVE_FROM_WATCH_LATER",
                    payload: video._id,
                  })
                : dispatch({ type: "ADD_TO_WATCH_LATER", payload: video._id })
            }
          />
          <div
            className="playlist-icon"
            onClick={() => setShowPlaylistModal(true)}
          >
            <FontAwesomeIcon icon={faBars} className="fa-icon" />
            <FontAwesomeIcon icon={faPlus} className="fa-icon" />
          </div>
        </div>
      </div>
      <div className="video-notes">
        <h2>Video Notes</h2>
      </div>
    </div>
  );
}
