import { useState } from "react";
import { IoMdLogOut } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { FaUsersRectangle } from "react-icons/fa6";
import Logo from "../assets/logo1.png";
import Welcome from "../components/Welcome";

const Home = () => {
  const [menu, setmenu] = useState("Home");
  return (
    <div className="h-screen w-full grid grid-cols-[20%_80%]">
      <div className="border-r flex flex-col justify-between py-6 ">
        <div className="p-4 text-green-700 text-xl font-bold">
          <img src={Logo} className="h-[50px] " alt="" />
          Financial Management
        </div>
        <ul className="flex flex-col text-xl">
          <li
            className={`flex gap-2 items-center p-4  ${
              menu === "Home" ? "text-white bg-green-800" : "text-black"
            } `}
          >
            {" "}
            <IoHome />
            Home{" "}
          </li>
          <li
            className={`flex gap-2 items-center p-4  ${
              menu === "Profile" ? "text-white bg-green-800" : "text-black"
            } `}
          >
            {" "}
            <FaUserAlt />
            Profile{" "}
          </li>
          <li
            className={`flex gap-2 items-center p-4  ${
              menu === "Colleague" ? "text-white bg-green-800" : "text-black"
            } `}
          >
            {" "}
            <FaUsersRectangle />
            Colleague Onboarding
          </li>
        </ul>
        <div className="flex justify-center">
          <button className="flex gap-2 items-center justify-center bg-green-800 w-[80%] p-2 text-white text-lg rounded-lg">
            Logout <IoMdLogOut />
          </button>
        </div>
      </div>
      <div className="flex-grow h-full">
        <Welcome />
      </div>
    </div>
  );
};

export default Home;
