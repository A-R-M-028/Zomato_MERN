import { BsHandbag } from "react-icons/bs";
import { IoBeerOutline } from "react-icons/io5";
import { GiMorgueFeet } from "react-icons/gi";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MobileTab = () => {
  // Hooks and States
  const [allTypes, setAllTypes] = useState([
    {
      // Delivery
      id: `delivery`,
      icon: <BsHandbag />,
      name: "Delivery",
      isActive: false,
    },
    {
      // Dining Out
      id: `night`,
      icon: <IoBeerOutline />,
      name: "NIght Life",
      isActive: false,
    },
    {
      // Night Life
      id: `dining`,
      icon: <GiMorgueFeet />,
      name: "Dining Out",
      isActive: false,
    },
  ]);
  const { type } = useParams();
  useEffect(() => {
    if (type) {
      const updateTypes = allTypes.map((item) => {
        if (item.id === type) {
          return { ...BsHandbag, isActive: true };
        }
        return item;
      });
      setAllTypes(updateTypes);
    }
  }, [type]);
  return (
    <div className="bg-white shadow-inner p-3 fixed bottom-0 z-10 w-full flex items-center justify-between border text-gray-500">
      <div className="flex flex-col items-center text-xl">
        <BsHandbag />
        <h5>Delivery</h5>
      </div>
      <div className="flex flex-col items-center text-xl">
        <GiMorgueFeet />
        <h5>Night Life</h5>
      </div>
      <div className="flex flex-col items-center text-xl">
        <IoBeerOutline />
        <h5>Dining Out</h5>
      </div>
    </div>
    // Now need to use map to load dynamically to use react hook features
  );
};

const FoodTab = () => {
  return (
    <div>
      <MobileTab /> {/* Use MobileTab component */}
    </div>
  );
};

export default FoodTab;

// master_url: type

// delivery, dining, nght life -> type
