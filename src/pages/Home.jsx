import { useState } from "react";
import { IoMdLogOut } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { FaUsersRectangle } from "react-icons/fa6";
import Logo from "../assets/logo1.png";
import Welcome from "../components/Welcome";
import Profile from "../components/Profile";
import { useNavigate } from "react-router-dom";
import Onboarding from "../components/Onboarding/Onboarding";

const Home = () => {
  const [menu, setmenu] = useState(0);

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="h-screen w-screen flex">
      <div className="w-[10%] border-r flex flex-col justify-between items-start bg-[#045634] ">
        <div className="w-full flex flex-col gap-4">
          <div className="p-1 text-green-700 text-xl w-full bg-[#044027] font-bold">
            <img src={Logo} className="h-50px " alt="" />
          </div>

          <div className="flex flex-col font-bold text-sm  text-white">
            <div
              className={`flex gap-2 items-center text-white p-3  ${
                menu === 0 ? " bg-[#044027]" : "hover:bg-[#054b2e]"
              } `}
              onClick={() => setmenu(0)}
            >
              {" "}
              {/* <IoHome className="text-white text-lg" /> */}
              Home{" "}
            </div>
            <div
              className={`flex gap-2 items-center text-white p-3  ${
                menu === 1 ? " bg-[#044027]" : " hover:bg-[#054b2e]"
              } `}
              onClick={() => setmenu(1)}
            >
              {" "}
              {/* <FaUserAlt className="text-white text-lg" /> */}
              Profile{" "}
            </div>
            <div
              className={`flex gap-2 items-center text-white p-3  ${
                menu === 2 ? " bg-[#044027]" : "hover:bg-[#054b2e]"
              } `}
              onClick={() => setmenu(2)}
            >
              {/* <FaUsersRectangle className="text-white text-lg" /> */}
              Colleague Onboarding
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <button
            className="flex gap-2 items-center justify-center bg-green-700 w-80 p-2 my-2 text-white text-lg rounded-lg"
            onClick={() => handleLogout()}
          >
            Logout <IoMdLogOut />
          </button>
        </div>
      </div>
      <div className=" h-full w-[90%] overflow-y-auto relative">
        {menu === 0 && <Welcome />}
        {menu === 1 && <Profile />}
        {menu === 2 && <Onboarding />}
      </div>
    </div>
  );
};

export default Home;
