import React from "react";
import Github from "../assets/github.png";
import Jenkins from "../assets/jenkins.png";
import Azure from "../assets/azure.png";
import Cloudflare from "../assets/cloudflare.png";
import Cyberark from "../assets/cyberark.png";
import Docker from "../assets/docker.png";
import Urbancode from "../assets/urbancode.png";
import Aws from "../assets/aws.png";
import Zegocloud from "../assets/zegocloud.png";

const Welcome = () => {
  return (
    <div className="p-6 w-full">
      <div className="border-b-2 border-black text-center text-2xl font-bold">
        Welcome
      </div>
      <div className="grid grid-cols-3 grid-rows-3 gap-6 p-4">
        <div className="p-4 flex items-center justify-center bg-white shadow-[0_0_5px_#00000070] rounded-lg bg-slate-100">
          <img src={Github} alt="" />
        </div>

        <div className="p-4 flex items-center justify-center shadow-[0_0_5px_#00000070] rounded-lg bg-slate-100">
          <img src={Jenkins} alt="" />
        </div>

        <div className="p-4 flex items-center justify-center shadow-[0_0_5px_#00000070] rounded-lg bg-slate-100">
          <img src={Azure} alt="" />
        </div>

        <div className="p-4 flex items-center justify-center shadow-[0_0_5px_#00000070] rounded-lg bg-slate-100">
          <img src={Cloudflare} alt="" />
        </div>

        <div className="p-4 flex items-center justify-center shadow-[0_0_5px_#00000070] rounded-lg bg-slate-100">
          <img src={Cyberark} alt="" />
        </div>

        <div className="p-4 flex items-center justify-center shadow-[0_0_5px_#00000070] rounded-lg bg-slate-100">
          <img src={Docker} alt="" />
        </div>

        <div className="p-4 flex items-center justify-center shadow-[0_0_5px_#00000070] rounded-lg bg-slate-100">
          <img src={Urbancode} alt="" />
        </div>

        <div className="p-4 flex items-center justify-center shadow-[0_0_5px_#00000070] rounded-lg bg-slate-100">
          <img src={Aws} alt="" />
        </div>

        <div className="p-4 flex items-center justify-center shadow-[0_0_5px_#00000070] rounded-lg bg-slate-100">
          <img src={Zegocloud} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
