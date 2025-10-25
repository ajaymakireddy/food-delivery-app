import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = () => {
  return (
    <>
      <div className="explore-menu" id="explore-menu">
        <h1>Explore our Menu</h1>
        <p className="explore-menu-text">
          Explore our diverse menu featuring delicious options crafted to
          satisfy every craving. From hearty main courses and fresh salads to
        </p>
        <div className="explore-menu-list">
            {menu_list.map((item , index) => {
                return (
                    <div>
                        <img src={item.menu_image} alt="" key={index} className="explore-menu-list-item"/>
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
      </div>
    </>
  );
};

export default ExploreMenu;
