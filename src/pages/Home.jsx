import { useState } from "react";
import { IoMdLogOut } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { FaUsersRectangle } from "react-icons/fa6";
import Logo from "../assets/logo1.png";
import Welcome from "../components/Welcome";
import Onboarding from "../components/Onboarding";
import Profile from "../components/Profile";
// import Onboarding from "../components/Onboarding";

const Home = () => {
  const [menu, setmenu] = useState(0);
  return (
    <div className="h-screen w-screen flex">
      <div className="w-20 border-r flex flex-col justify-between items-start p-2">
        <div className="w-full flex flex-col gap-4">
          <div className="p-4 text-green-700 text-xl font-bold">
            <img src={Logo} className="h-50px " alt="" />
          </div>

          <div className="flex flex-col font-bold">
            <div
              className={`flex gap-2 items-center p-4  ${
                menu === 0 ? "text-white bg-green-800" : "text-black"
              } `}
              onClick={() => setmenu(0)}
            >
              {" "}
              <IoHome />
              Home{" "}
            </div>
            <div
              className={`flex gap-2 items-center p-4  ${
                menu === 1 ? "text-white bg-green-800" : "text-black"
              } `}
              onClick={() => setmenu(1)}
            >
              {" "}
              <FaUserAlt />
              Profile{" "}
            </div>
            <div
              className={`flex gap-2 items-center p-4  ${
                menu === 2 ? "text-white bg-green-800" : "text-black"
              } `}
              onClick={() => setmenu(2)}
            >
              {" "}
              <FaUsersRectangle />
              Colleague Onboarding
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <button className="flex gap-2 items-center justify-center bg-green-800 w-80 p-2 text-white text-lg rounded-lg">
            Logout <IoMdLogOut />
          </button>
        </div>
      </div>
      <div className=" h-full w-80 overflow-y-scroll p-4">
        {menu === 0 && <Welcome />}
        {menu === 1 && <Profile />}

        {menu === 2 && <Onboarding />}
      </div>
    </div>
  );
};

export default Home;
