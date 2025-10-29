import { useState } from "react";
import ExploreMenu from "../../components/exploermenu/ExploreMenu";
import Header from "../../components/header/Header";
import "./Home.css";
import FoodDisplay from "../../components/fooddisplay/FoodDisplay";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <>
      <div>
        <Header />
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay />
      </div>
    </>
  );
};
export default Home;
