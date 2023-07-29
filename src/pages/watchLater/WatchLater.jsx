import { Link } from "react-router-dom";
import VideoCard from "../../components/videoCard/VideoCard";
import { useDataContext } from "../../context/DataProvider";
import "./WatchLater.css";

export default function WatchLater() {
  const {
    state: { allVideos, watchLater },
  } = useDataContext();

  const watchLaterVideos = allVideos?.reduce(
    (acc, curr) =>
      watchLater.some((ID) => ID === curr._id) ? [...acc, curr] : acc,
    []
  );

  return (
    <div className="column-page-flex">
      <h2>Watch Later Videos</h2>
      <div className="row-flex-container">
        {!!watchLater.length === true &&
          watchLaterVideos.map((video) => (
            <VideoCard key={video._id} {...video} />
          ))}
        {!!watchLater.length === false && (
          <div className="no-videos">
            <p>You haven't added anything to watch later</p>
            <Link to="/explore">
              <button className="primary-btn">Explore</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
