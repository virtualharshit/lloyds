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
import styled from "styled-components";

const Welcome = () => {
  const welcomeCardsData = [
    {
      href: "https://lbg.stackenterprise.co/",
      imgSrc: Github,
      imgAlt: "SO Image",
      description:
        "Stack Overflow@LBG is a new tool that allows engineers to ask questions and share information that would otherwise not be allowed on the normal StackOverflow",
    },
    {
      href: "https://lbg.stackenterprise.co/communities/92",
      imgSrc: Aws,
      imgAlt: "FWB SO Image",
      description:
        "Stack Overflow Financial Wellbeing Community- Ask and answer engineering related questions within the FWB Community",
    },
    {
      href: "https://lbg.stackenterprise.co/communities/93",
      imgSrc: Azure,
      imgAlt: "FWB DevOps SO Image",
      description:
        "Stack Overflow FWB DevOps Community- Ask and answer engineering related questions within the FWB DevOps Community",
    },
    {
      href: "http://appduv5bef.ibmsl.cloud.test.group:8080/",
      imgSrc: Jenkins,
      imgAlt: "Jenkins3 Image",
      description:
        "Jenkins is an open-source CI/CD server that helps automate various stages in software development and DevOps processes.",
    },
    {
      href: "https://ucd.intranet.group/",
      imgSrc: Cloudflare,
      imgAlt: "UCD Image",
      description:
        "UrbanCode Deploy is a tool for automating application deployments and run processes on various test environments.",
    },
    {
      href: "http://appduv4553.ibmsl.cloud.test.group:8081/",
      imgSrc: Docker,
      imgAlt: "Nexus Image",
      description:
        "Nexus is our repository manager that organizes, stores and distributes information needed for building programs.",
    },
    {
      href: "https://ghe.service.group/",
      imgSrc: Zegocloud,
      imgAlt: "Nexus Image",
      description:
        "GHE is our Source Code management tool where we have various repositories to perform different functions.",
    },
    {
      href: "http://appduv5bef.ibmsl.cloud.test.group:9080/release_readiness.html",
      imgSrc: Urbancode,
      imgAlt: "Releases Image",
      description:
        "This is the release dashboard where squads can monitor the progress of subtasks needed for a Config Release.",
    },
    {
      href: "https://cyberark.intranet.group/PasswordVault/v10/logon/radius",
      imgSrc: Cyberark,
      imgAlt: "CyberArk Image",
      description:
        "CyberArk is the utility we use to store passwords for different environments and get access to servers",
    },
  ];

  return (
    <div id="default_elements" className="p-4 bg-[#414141] text-white h-full">
      <div className="intro_title border-b border-whitep p-2">
        <h1 className="text-white text-center text-[25px] ">Welcome</h1>
      </div>
      <div className="intro_text ">
        <p className="text-white text-center py-3 text-md">
          The Dashboard is developed with intuitivity and efficiency at its core
          - enabling users quick access to useful links and information.
        </p>
      </div>
      <div className="grid-container grid grid-cols-3 gap-1 ">
        {welcomeCardsData.map((card, index) => (
          <div
            className="welcomecard bg-[#868f97] rounded-lg p-2 h-[180px] "
            key={index}
          >
            <a
              href={card.href}
              target="_blank"
              className="gridImages relative "
              rel="noopener noreferrer"
            >
              <img
                src={card.imgSrc}
                className=" h-full m-auto w-[80%] p-4 object-contain "
              />
              <div className="description absolute top-0 left-0 w-full h-full text-center text-white p-4 ">
                <p className="text-white bg-[#868f97] flex justify-center items-center w-full h-full font-bold ">
                  {card.description}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Welcome;
