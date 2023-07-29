import VideoCard from "../../components/videoCard/VideoCard";
import { useDataContext } from "../../context/DataProvider";
import "./Explore.css";

export default function Explore() {
  const {
    state: { allVideos, search },
    dispatch,
  } = useDataContext();
  let videosToDisplay;
  if (search) {
    videosToDisplay = allVideos.filter(({ title }) =>
      title.toLowerCase().includes(search.toLowerCase())
    );
  } else {
    videosToDisplay = allVideos;
  }
  return (
    <div className="column-page-flex">
      <input
        className="search-box"
        type="search"
        placeholder="Search video title..."
        onChange={(e) => dispatch({ type: "SEARCH", payload: e.target.value })}
      />
      <div className="row-flex-container">
        {videosToDisplay?.length !== 0 &&
          videosToDisplay?.map((video) => (
            <VideoCard key={video._id} {...video} />
          ))}
        {videosToDisplay?.length === 0 && (
          <p>Sorry! There are no videos that match your search :(</p>
        )}
      </div>
    </div>
  );
}
