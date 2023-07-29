import ReactPlayer from "react-player";
import { useParams } from "react-router";
import { useDataContext } from "../../context/DataProvider";

export default function Video() {
  const { id } = useParams();
  const {
    state: { allVideos },
  } = useDataContext();

  const video = allVideos?.find(({ _id }) => _id === Number(id));

  return (
    <div className="column-page-flex">
      <h2>{video?.title}</h2>
      <ReactPlayer
        url={video?.src}
        controls
        className="video-container"
        width="100%"
        height="500px"
      />
    </div>
  );
}
