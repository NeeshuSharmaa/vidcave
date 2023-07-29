import { Link } from "react-router-dom";
import "./CategoryCard.css";
export default function CategoryCard({ thumbnail, src, category, _id }) {
  return (
    <Link to={`/category/${category}`}>
      <div className="category">
        <div className="img-div">
          <img src={thumbnail} alt={category} />
        </div>
        <h4>{category}</h4>
      </div>
    </Link>
  );
}
