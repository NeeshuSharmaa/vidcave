import { Link } from "react-router-dom";
import "./VideoCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faClockFour,
  faPlay,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useDataContext } from "../../context/DataProvider";

export default function VideoCard({
  _id,
  title,
  views,
  chips,
  thumbnail,
  src,
  category,
  creator,
}) {
  const {
    state: { watchLater },
    dispatch,
    setShowPlaylistModal,
  } = useDataContext();
  const inWatchLater = watchLater.find((ID) => ID === _id);
  return (
    <div className="video-card">
      <div className="img-div">
        <Link to={`/videos/${_id}`}>
          <img src={thumbnail} alt={title} />
        </Link>
        <div className="video-action-icons">
          <FontAwesomeIcon
            icon={inWatchLater ? faClockFour : faClock}
            className="clock"
            onClick={() =>
              inWatchLater
                ? dispatch({ type: "REMOVE_FROM_WATCH_LATER", payload: _id })
                : dispatch({ type: "ADD_TO_WATCH_LATER", payload: _id })
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
      <Link to={`/videos/${_id}`}>
        <div className="video-info">
          <img src="/gabby.jpg" alt="creator" />
          <div className="video-info-main">
            <h4>{title}</h4>
            <small>
              {views} views | {creator}
            </small>
          </div>
        </div>
      </Link>
    </div>
  );
}
