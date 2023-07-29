import CategoryCard from "../../components/categoryCard/CategoryCard";
import { useDataContext } from "../../context/DataProvider";
import "./Home.css";
export default function Home() {
  const {
    state: { categories },
  } = useDataContext();

  return (
    <div className="column-page-flex">
      <div className="row-flex-container">
        {categories?.map((category) => (
          <CategoryCard key={category._id} {...category} />
        ))}
      </div>
    </div>
  );
}
