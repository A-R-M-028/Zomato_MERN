import { SiIfood } from "react-icons/si";

const MobileView = () => {
  return (
    <>
      <div className="items-center justify-between flex w-full">
        <div className="w-28 ">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt="Logo"
            className="w-full h-full"
          />
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">
            Use App
          </button>
          <span className="border p-2 border-blue-300 text-zomato-400 rounded-full">
            <SiIfood />
          </span>
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <nav className="px-4 py-4 flex bg-white shadow-md items-center">
      {/* MobileView(); */}
      <MobileView />
    </nav>
  );
};

export default Navbar;
