import { useParams } from "react-router";
import { useDataContext } from "../../context/DataProvider";
import VideoCard from "../../components/videoCard/VideoCard";

import "./Category.css";

export default function Category() {
  const { id } = useParams();
  console.log(id);
  const {
    state: { allVideos },
  } = useDataContext();
  const videos = allVideos?.filter(({ category }) => category === id);

  return (
    <div className="column-page-flex">
      <h2>{id}</h2>
      <div className="row-flex-container">
        {videos?.map((video) => (
          <VideoCard key={video._id} {...video} />
        ))}
      </div>
    </div>
  );
}
