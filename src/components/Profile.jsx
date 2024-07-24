import React from "react";
import { LuClipboardList } from "react-icons/lu";
import ProfileImg from "../assets/profile.png";

const Profile = () => {
  return (
    <div className="p-4">
      <div className="border-b-2 border-black text-2xl font-bold mb-4">
        Profile
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col items-center gap-2 w-[300px] shadow-[1px_3px_5px_#00000050] rounded-xl p-3">
          <img src={ProfileImg} className="h-[100px]" alt="" />
          <div className="font-bold text-lg">James Samuel</div>
          <div>UI/UX Designer </div>
          <div className="text-sm w-full flex flex-col gap-2">
            <div className="grid grid-cols-2">
              <div className=" text-slate-600 ">Current working</div>
              <div className="font-semibold">Cure Technologies</div>
            </div>
            <div className="grid grid-cols-2">
              <div className=" text-slate-600 ">Experience</div>
              <div className="font-semibold">7 Years</div>
            </div>
            <div className="grid grid-cols-2">
              <div className=" text-slate-600 ">Location</div>
              <div className="font-semibold">Chennai</div>
            </div>
          </div>
        </div>
        <div className="shadow-0_0_5px_00000070 rounded-lg p-4 w-[500px]">
          <div className="text-xl font-bold mb-6 flex items-center gap-2">
            <LuClipboardList /> Skill Set
          </div>
          <div className=" flex flex-col gap-3">
            <div className="flex justify-between items-center gap-4">
              <div className="w-max">Photoshop</div>
              <div className="w-[300px] bg-slate-200 p-1 rounded-full relative overflow-hidden">
                <div className="bg-orange-500 w-[80%] p-1 absolute top-0 left-0"></div>
              </div>
            </div>
            <div className="flex justify-between items-center gap-4">
              <div className="w-max">Illustrator</div>
              <div className="w-[300px] bg-slate-200 p-1 rounded-full relative overflow-hidden">
                <div className="bg-orange-500 w-[80%] p-1 absolute top-0 left-0"></div>
              </div>
            </div>
            <div className="flex justify-between items-center gap-4">
              <div className="w-max">Dreamweaver</div>
              <div className="w-[300px] bg-slate-200 p-1 rounded-full relative overflow-hidden">
                <div className="bg-orange-500 w-[80%] p-1 absolute top-0 left-0"></div>
              </div>
            </div>
            <div className="flex justify-between items-center gap-4">
              <div className="w-max">XD</div>
              <div className="w-[300px] bg-slate-200 p-1 rounded-full relative overflow-hidden">
                <div className="bg-orange-500 w-[80%] p-1 absolute top-0 left-0"></div>
              </div>
            </div>
            <div className="flex justify-between items-center gap-4">
              <div className="w-max">After Effects</div>
              <div className="w-[300px] bg-slate-200 p-1 rounded-full relative overflow-hidden">
                <div className="bg-orange-500 w-[80%] p-1 absolute top-0 left-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
