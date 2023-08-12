import Navbar from "../Components/Navbar";
import FoodTab from "../Components/FoodTab";

const HomeLayout = (props) => {
  return (
    <>
      <div className="container mx-auto px-4 lg:px-20">
        <Navbar />
        {props.children}
        
      </div>
      <div className="">
        <FoodTab />
      </div>
    </>
  );
};

export default HomeLayout;
