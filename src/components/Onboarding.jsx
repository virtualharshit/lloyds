import React, { useState } from "react";
import "./onboarding.css";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useEffect } from "react";

const ChecklistItem = ({
  index,
  pindex,
  title,
  link,
  linkText,
  info,
  extraInfo,
  data,
  setdata,
}) => {
  const [isopen, setisopen] = useState(false);

  const [click, setclick] = useState(false);

  return (
    <li className="checklist-item">
      <input
        type="checkbox"
        className="checkbox #existingboolean"
        onChange={(e) => {
          let existingdata = data;
          existingdata[pindex][index] = e.target.checked ? 1 : 0;
          setdata(existingdata);

          // console.log(e.target.checked, pindex, index);
        }}
      />
      {/* <label htmlFor="" className="checkbox #existing"></label> */}
      <span
        className="checklist-item__title"
        onClick={() => setisopen(!isopen)}
      >
        {title}
      </span>
      <button
        className="checklist-item__expand"
        aria-label="Toggle Info"
        title="Toggle More Information"
        onClick={() => setisopen(!isopen)}
      >
        {isopen ? (
          <FaMinus className="text-xl" />
        ) : (
          <FaPlus className="text-xl" />
        )}
      </button>

      <div className={`info-container ${isopen ? "" : "info-container_close"}`}>
        <div className="info">
          <ul>
            <li>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {linkText}
              </a>
            </li>
            {info && <p>{info}</p>}
            {extraInfo &&
              extraInfo.map((infoItem, index) => (
                <React.Fragment key={index}>
                  <li>
                    <a
                      href={infoItem.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {infoItem.linkText}
                    </a>
                  </li>
                  <p>{infoItem.text}</p>
                </React.Fragment>
              ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

const Checklist = ({ index, title, items, dotClass, data, setdata }) => {
  const [percentage, setpercentage] = useState(0);

  // const handlepercentage = () => {
  //   const percentage = data[index]?.reduce(
  //     (total, obj) => (obj ? total + obj : total),
  //     0
  //   );
  //   console.log((percentage / data[index]?.length) * 100);
  //   return (percentage / data[index]?.length) * 100;
  // };

  useEffect(() => {
    console.log("wfe");
    console.log(data);
  }, [data]);

  return (
    <section className="checklist">
      <div className="flex gap-2">
        <span className={dotClass}></span>
        <h2 className="checklist__title">{title}</h2>
      </div>

      <span className="checklist__title-border"></span>
      <span
        className={`checklist__percentage-border  ${
          percentage ? `w-[${percentage}%]` : "w-0"
        } `}
      ></span>
      <ul className="checklist-container">
        {items.map((item, i) => (
          <ChecklistItem
            key={i}
            index={i}
            pindex={index}
            {...item}
            data={data}
            setdata={setdata}
          />
        ))}
      </ul>
    </section>
  );
};

const Onboarding = () => {
  const [isExistingEngineer, setIsExistingEngineer] = useState(false);
  const [progressCount, setProgressCount] = useState(0);
  const totalTasks = 5;

  const handleRadioChange = (isExisting) => {
    setIsExistingEngineer(isExisting);
    // existing_update(isExisting); // Assuming `existing_update` is a global function, otherwise import it or define it in this file
  };

  const handleReset = () => {
    // Reset logic here
    setProgressCount(0);
  };

  const [data, setdata] = useState([
    [0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]);

  const accountItems = [
    {
      title: "GitHub Enterprise",
      link: "https://lbg.service-now.com/it_lbg?id=lbg_sc_cat_item&sys_id=21b6e5bddb872b40722c9a2adb96191a",
      linkText: "IT@LBG Ticket",
    },
    {
      title: "UrbanCode Deploy",
      link: "https://lbg.service-now.com/it_lbg?id=lbg_sc_cat_item&sys_id=9349327adbdc2b00695ef2eb0c961919",
      linkText: "IT@LBG Ticket",
    },
    {
      title: "Stack Overflow Access",
      link: "https://lbg.service-now.com/it_lbg?id=sc_cat_item&table=sc_cat_item&sys_id=78f7f31b1bd8b99ce78498a8b04bcbf8",
      linkText: "IT@LBG Ticket",
      info: `When filling out this ticket, as justification, input: 'As a Software Engineer, I will need access to Stack Overflow to view engineering articles and ask questions'`,
      extraInfo: [
        {
          link: "https://lloydsbanking.sharepoint.com/sites/EngineeringExcellence/SitePages/Stack-Overflow-@-LBG.aspx",
          linkText: "Stack Overflow guide",
          text: "For more information about Stack Overflow at LBG",
        },
      ],
    },
  ];

  const laptopItems = [
    {
      title: "Local Admin",
      link: "https://lbg.service-now.com/it_lbg?id=lbg_sc_cat_item&sys_id=a11ba1d8dbb114949f935b67f496197b",
      linkText: "IT@LBG Ticket",
    },
    {
      title: "Remote access & Full VPN",
      link: "https://lbg.service-now.com/it_lbg?id=lbg_sc_cat_item&sys_id=c4594c261bbeb010375b3f56464bcb22",
      linkText: "IT@LBG Ticket Remote Access & Full VPN",
      info: `First raise the ticket above for a new "Remote Access Account". Second raise the same ticket but for "Remote Access Entitlements" to get full VPN`,
      extraInfo: [
        {
          link: "https://lbg.service-now.com/it_lbg?id=lbg_sc_cat_item&sys_id=48505fa2dba0d85075804dab0b961993",
          linkText: "IT@LBG RSA Soft Token",
          text: "Raise the soft token request 24 hours after your remote access account has been created",
        },
      ],
    },
    {
      title: "Digital Dev Tools",
      link: "https://confluence.devops.lloydsbanking.com/display/HMTFD/Digital+Dev+Tools+Access",
      linkText: "Digital Dev Tools process guide",
      extraInfo: [
        {
          link: "https://lbg.service-now.com/it_lbg?id=lbg_sc_cat_item&sys_id=6cc51dbadbea5c100c0882724a961940",
          linkText: "IT@LBG Ticket",
        },
      ],
    },
    {
      title: "Access to Printers",
      link: "https://lloydsbanking.sharepoint.com/sites/CCOHub/SitePages/Office-Printing.aspx",
      linkText: "Printing access process",
    },
    {
      title: "Git",
      link: "https://confluence.devops.lloydsbanking.com/display/HMTFD/CAT+Required+Software+Packages+Installation+Guide",
      linkText: "Git Installation",
      extraInfo: [
        {
          link: "https://confluence.devops.lloydsbanking.com/display/HMTFD/3.+Laptop+Software",
          linkText: "Git Guide",
          text: "Follow the documents above to set up and test Git on your local machine",
        },
      ],
    },
  ];

  const groupsItems = [
    {
      title: "Git Repos Access",
      link: "https://ghe.service.group/poc56-hmtfd",
      linkText: "CAT application repositories",
      info: "Ask Devs in your team to give you access to the relevant repositories and access to push changes to the repositories",
    },
    {
      title: "ServiceNow",
      link: "https://lbg.service-now.com/it_lbg?id=sc_cat_item&table=sc_cat_item&sys_id=2560db331b5df4947e2a971f2e4bcb49",
      linkText: "IT@LBG Ticket for ServiceNow",
      info: "Please confirm with your Manager/team if you need this for your role (creating Change request). Raise ticket on IT@LBG to be added to the relevant ServiceNow group access for your team to be able to view and raise change requests. Select IT.FINANCIALWELLBEING.CAT-SUPPORT-GROUP from the dropdown list when raising the ticket",
    },
    {
      title: "Additional Software and Tools for CAT",
      link: "https://confluence.devops.lloydsbanking.com/display/HMTFD/CAT+Required+Software+Packages+Installation+Guide",
      linkText: "CAT Software and tools",
      info: "Use the link below to view and install additional software and tools needed for your role",
    },
  ];

  const channelsItems = [
    {
      title: "Urban Code Deploy Processes Dashboard",
      link: "https://ucd.intranet.group/#dashboard/currentActivity",
      linkText: "UrbanCode Deploy dashboard",
      info: "Click the above link to access dashboard listing of current activities",
    },
    {
      title: "Absence Calender",
      link: "https://absenceplanner.intranet.group/",
      linkText: "Absence calender registration",
      info: "Once registered, ask your manager to add you to your team's specific absent calender",
    },
    {
      title: "Jira and Confluence access",
      info: "Ask to team to give you access to Jira and Confluence for tickets/stories, CAT processes etc.",
    },
    {
      title: "Jenkins Access",
      link: "http://10.177.40.30:8080/job/fw-cat-cwa-ghe/",
      linkText: "CAT Jenkins link",
      info: "Login in with your global username (can be found on workday) and password",
    },
    {
      title: "Teams",
      info: "Ask Manager/team to add you the relevant Teams chat/channels including: LUAT and Deployment FOVs, squad specific chat, Colleagues Tools - All colleagues chat",
    },
    {
      title: "Mailing List Request",
      link: "mailto:grpg041123@nalloydsbanking.com?subject=Request to be added to Mailing List&body=Hi,%20I%20hope%20you%20are%20well.%0D%0A%0D%0AMay%20I%20be%20added%20to%20the%20email%20distribution%20lists%20for%20Financial%20Wellbeing?%0D%0A%0D%0AMy%20details%20are%20as%20follows:%0D%0AName:%20[insert%20name%20here]%0D%0ABusiness%20Title:%20[insert%20business%20title%20here]%0D%0AEmail%20Address:%20[insert%20email%20address%20here]%0D%0A",
      linkText: "Send Email to FWB",
      info: "Click the above link to request to be added to the required FWB Distribution lists",
    },
  ];

  const trainingItems = [
    {
      title: "Pluralsight",
      link: "https://lloydsbanking.sharepoint.com/sites/lbg_engineering/SitePages/Pluralsight-at-LBG.aspx",
      linkText: "Pluralsight access",
      info: "Link to Pluralsight page on sharepoint to login or register for new users for extra training courses",
    },
    {
      title: "Percipio (code academy)",
      link: "https://lbg.service-now.com/it_lbg?id=sc_cat_item&table=sc_cat_item&sys_id=3488d61e1bcd3150304f3f56464bcb7e",
      linkText: "IT@LBG Ticket for Percipio",
      info: "Link to Percipio website",
    },
    {
      title: "Time to grow",
      link: "",
      linkText: "Time to grow",
      info: "Access to log training hours",
    },
    {
      title: "CAT Confluence",
      link: "https://confluence.devops.lloydsbanking.com/display/HMTFD/CAT",
      linkText: "CAT Confluence pages",
      info: "Links to ways of working approaches and information about the CAT team and processes on Confluence",
    },
    {
      title: "Acrolist",
      link: "https://app.powerbi.com/groups/me/reports/46d1c58b-913a-4576-b551-d7220d24d645/ReportSection04ca352d6f92ff5e5ed6?experience=power-bi",
      linkText: "Acrolist",
      info: "View and add LBG acronyms. To add new Acronymns, you must join the Acrolist channel on Viva Engage",
    },
  ];

  return (
    <div>
      {/* <header>
        <div className="maintenance-section-h1">
          <label style={{ alignItems: "center", margin: "auto" }}>
            <div className="control-group">
              <label className="control control-radio">
                New Engineer
                <input
                  type="radio"
                  name="radio"
                  onChange={() => handleRadioChange(false)}
                  checked={!isExistingEngineer}
                />
                <div className="control_indicator"></div>
              </label>
              <label className="control control-radio">
                Existing Engineer
                <input
                  type="radio"
                  name="radio"
                  id="existing_radio"
                  onChange={() => handleRadioChange(true)}
                  checked={isExistingEngineer}
                />
                <div className="control_indicator"></div>
              </label>
            </div>
          </label>
        </div>
      </header> */}
      <h2 className="title bg-slate-200 p-2">
        CAT Software Engineers Onboarding
      </h2>
      <div className="wrapper grid grid-cols-2 gap-4">
        <Checklist
          index={0}
          title="Accounts"
          items={accountItems}
          dotClass="dot_accounts"
          data={data}
          setdata={setdata}
        />
        <Checklist
          index={1}
          title="Laptop"
          items={laptopItems}
          dotClass="dot_laptops"
          data={data}
          setdata={setdata}
        />
        <Checklist
          index={2}
          title="Groups/Roles"
          items={groupsItems}
          dotClass="dot_groups"
          data={data}
          setdata={setdata}
        />
        <Checklist
          index={3}
          title="Channels/Dashboards"
          items={channelsItems}
          dotClass="dot_channels"
          data={data}
          setdata={setdata}
        />
        <Checklist
          index={4}
          title="Enviroment Access/Training"
          items={trainingItems}
          dotClass="dot_trainings"
          data={data}
          setdata={setdata}
        />

        <div></div>

        {/* <div class="container">
        <section class="checklist">
          <span class="dot_accounts">
            <h2 class="checklist__title">Accounts</h2>
          </span>
          <span class="checklist__title-border"></span>
          <span class="checklist__percentage-border"></span>
          <ul class="checklist-container">
            <li class="checklist-item">
              <input id="" type="checkbox" class="checkbox #existingboolean" />
              <label for="" class="checkbox #existing"></label>
              <span class="checklist-item__title">GitHub Enterprise</span>
              <button
                class="checklist-item__expand"
                aria-label="Toggle Info"
                title="Toggle More Information"
              >
                <span class="line"></span>
              </button>
              <div class="info-container">
                <div class="info">
                  <ul>
                    <li>
                      <a
                        href="https://lbg.service-now.com/it_lbg?id=lbg_sc_cat_item&sys_id=21b6e5bddb872b40722c9a2adb96191a"
                        target="_blank"
                      >
                        IT@LBG Ticket
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li class="checklist-item">
              <input id="" type="checkbox" class="checkbox #existingboolean" />
              <label for="" class="checkbox #existing"></label>
              <span class="checklist-item__title">UrbanCode Deploy</span>
              <button
                class="checklist-item__expand"
                aria-label="Toggle Info"
                title="Toggle More Information"
              >
                <span class="line"></span>
              </button>
              <div class="info-container">
                <div class="info">
                  <ul>
                    <li>
                      <a
                        href="https://lbg.service-now.com/it_lbg?id=lbg_sc_cat_item&sys_id=9349327adbdc2b00695ef2eb0c961919"
                        target="_blank"
                      >
                        IT@LBG Ticket
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li class="checklist-item">
              <input id="" type="checkbox" class="checkbox #existingboolean" />
              <label for="" class="checkbox #existing"></label>
              <span class="checklist-item__title">Stack Overflow Access</span>
              <button
                class="checklist-item__expand"
                aria-label="Toggle Info"
                title="Toggle More Information"
              >
                <span class="line"></span>
              </button>
              <div class="info-container">
                <div class="info">
                  <ul>
                    <li>
                      <a
                        href="https://lbg.service-now.com/it_lbg?id=sc_cat_item&table=sc_cat_item&sys_id=78f7f31b1bd8b99ce78498a8b04bcbf8"
                        target="_blank"
                      >
                        IT@LBG Ticket
                      </a>
                    </li>
                    <p>
                      When filling out this ticket, as justification, input: 'As
                      a Software Engineer, I will need access to Stack Overflow
                      to view engineering articles and ask questions'
                    </p>

                    <li>
                      <a
                        href="https://lloydsbanking.sharepoint.com/sites/EngineeringExcellence/SitePages/Stack-Overflow-@-LBG.aspx"
                        target="_blank"
                      >
                        Stack Overflow guide
                      </a>
                    </li>
                    <p>For more information about Stack Overflow at LBG</p>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </section>

        <section class="checklist">
          <span class="dot_laptops">
            <h2 class="checklist__title">Laptop</h2>
          </span>
          <span class="checklist__title-border"></span>
          <span class="checklist__percentage-border"></span>
          <ul class="checklist-container">
            <li class="checklist-item">
              <input id="" type="checkbox" class="checkbox #existingboolean" />
              <label for="" class="checkbox #existing"></label>
              <span class="checklist-item__title">Local Admin</span>
              <button
                class="checklist-item__expand"
                aria-label="Toggle Info"
                title="Toggle More Information"
              >
                <span class="line"></span>
              </button>
              <div class="info-container">
                <div class="info">
                  <ul>
                    <li>
                      <a
                        href="https://lbg.service-now.com/it_lbg?id=lbg_sc_cat_item&sys_id=a11ba1d8dbb114949f935b67f496197b"
                        target="_blank"
                      >
                        IT@LBG Ticket
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li class="checklist-item">
              <input id="" type="checkbox" class="checkbox #existingboolean" />
              <label for="" class="checkbox #existing"></label>
              <span class="checklist-item__title">
                Remote access & Full VPN
              </span>
              <button
                class="checklist-item__expand"
                aria-label="Toggle Info"
                title="Toggle More Information"
              >
                <span class="line"></span>
              </button>
              <div class="info-container">
                <div class="info">
                  <ul>
                    <li>
                      <a
                        href="https://lbg.service-now.com/it_lbg?id=lbg_sc_cat_item&sys_id=c4594c261bbeb010375b3f56464bcb22"
                        target="_blank"
                      >
                        IT@LBG Ticket Remote Access & Full VPN
                      </a>
                    </li>
                    <p>
                      First raise the ticket abovr for a new
                      <em>"Remote Access Account".</em>
                    </p>
                    <p>
                      Second raise the same ticket but for
                      <em>"Remote Access Entitlements"</em> to get full VPN
                    </p>
                    <li>
                      <a
                        href="https://lbg.service-now.com/it_lbg?id=lbg_sc_cat_item&sys_id=48505fa2dba0d85075804dab0b961993"
                        target="_blank"
                      >
                        IT@LBG RSA Soft Token
                      </a>
                    </li>
                    <p>
                      Raise the soft token request 24 hours after your remote
                      access account has been created
                    </p>
                  </ul>
                </div>
              </div>
            </li>

            <li class="checklist-item">
              <input id="" type="checkbox" class="checkbox #existingboolean" />
              <label for="" class="checkbox #existing"></label>
              <span class="checklist-item__title">Digital Dev Tools</span>
              <button
                class="checklist-item__expand"
                aria-label="Toggle Info"
                title="Toggle More Information"
              >
                <span class="line"></span>
              </button>
              <div class="info-container">
                <div class="info">
                  <ul>
                    <li>
                      <a
                        href="https://confluence.devops.lloydsbanking.com/display/HMTFD/Digital+Dev+Tools+Access"
                        target="_blank"
                      >
                        Digital Dev Tools process guide
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://lbg.service-now.com/it_lbg?id=lbg_sc_cat_item&sys_id=6cc51dbadbea5c100c0882724a961940"
                        target="_blank"
                      >
                        IT@LBG Ticket
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li class="checklist-item">
              <input id="" type="checkbox" class="checkbox #existingboolean" />
              <label for="" class="checkbox #existing"></label>
              <span class="checklist-item__title">Access to Printers</span>
              <button
                class="checklist-item__expand"
                aria-label="Toggle Info"
                title="Toggle More Information"
              >
                <span class="line"></span>
              </button>
              <div class="info-container">
                <div class="info">
                  <ul>
                    <li>
                      <a
                        href="https://lloydsbanking.sharepoint.com/sites/CCOHub/SitePages/Office-Printing.aspx"
                        target="_blank"
                      >
                        Printing access process
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li class="checklist-item">
              <input id="" type="checkbox" class="checkbox #existingboolean" />
              <label for="" class="checkbox #existing"></label>
              <span class="checklist-item__title">Git</span>
              <button
                class="checklist-item__expand"
                aria-label="Toggle Info"
                title="Toggle More Information"
              >
                <span class="line"></span>
              </button>
              <div class="info-container">
                <div class="info">
                  <ul>
                    <li>
                      <a
                        href="https://confluence.devops.lloydsbanking.com/display/HMTFD/CAT+Required+Software+Packages+Installation+Guide"
                        target="_blank"
                      >
                        Git Installation
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://confluence.devops.lloydsbanking.com/display/HMTFD/3.+Laptop+Software"
                        target="_blank"
                      >
                        Git Guide
                      </a>
                    </li>
                    <p>
                      Follow the documents above to set up and test Git on your
                      local machine
                    </p>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </section>

        <section class="checklist">
          <span class="dot_groups">
            <h2 class="checklist__title">Groups/Roles</h2>
          </span>
          <span class="checklist__title-border"></span>
          <span class="checklist__percentage-border"></span>
          <ul class="checklist-container">
            <li class="checklist-item">
              <input id="" type="checkbox" />
              <label for="" class="checkbox"></label>
              <span class="checklist-item__title">Git Repos Access</span>
              <button
                class="checklist-item__expand"
                aria-label="Toggle Info"
                title="Toggle More Information"
              >
                <span class="line"></span>
              </button>
              <div class="info-container">
                <div class="info">
                  <ul>
                    <li>
                      <a
                        href="https://ghe.service.group/poc56-hmtfd"
                        target="_blank"
                      >
                        CAT application repositories
                      </a>
                    </li>
                    <p>
                      ask Devs in your team to give you access to the relevant
                      repositories and access to push changes to the
                      repositories
                    </p>
                  </ul>
                </div>
              </div>
            </li>

            <li class="checklist-item">
              <input id="" type="checkbox" />
              <label for="" class="checkbox"></label>
              <span class="checklist-item__title">ServiceNow</span>
              <button
                class="checklist-item__expand"
                aria-label="Toggle Info"
                title="Toggle More Information"
              >
                <span class="line"></span>
              </button>
              <div class="info-container">
                <div class="info">
                  <ul>
                    <p>
                      Please confirm with your Manager/team if you need this for
                      your role (creating Change request)
                    </p>
                    <li>
                      <a
                        href="https://lbg.service-now.com/it_lbg?id=sc_cat_item&table=sc_cat_item&sys_id=2560db331b5df4947e2a971f2e4bcb49"
                        target="_blank"
                      >
                        IT@LBG Ticket for ServiceNow
                      </a>
                    </li>
                    <p>
                      Raise ticket on IT@LBG to be added to the relevant
                      servicenow group access for your team to be able to view
                      and raise change requests. <br />
                      select
                      <strong> IT.FINANCIALWELLBEING.CAT-SUPPORT-GROUP</strong>
                      from the dropdown list when raising the ticket
                    </p>
                  </ul>
                </div>
              </div>
            </li>

            <li class="checklist-item">
              <input id="" type="checkbox" />
              <label for="" class="checkbox"></label>
              <span class="checklist-item__title">
                Additional Software and Tools for CAT
              </span>
              <button
                class="checklist-item__expand"
                aria-label="Toggle Info"
                title="Toggle More Information"
              >
                <span class="line"></span>
              </button>
              <div class="info-container">
                <div class="info">
                  <ul>
                    <p>
                      Use the link below to view and install additional
                      softwares and tools needed for your role
                    </p>
                    <li>
                      <a
                        href="https://confluence.devops.lloydsbanking.com/display/HMTFD/CAT+Required+Software+Packages+Installation+Guide"
                        target="_blank"
                      >
                        CAT Software and tools
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </section>

        <section class="checklist">
          <span class="dot_channels">
            <h2 class="checklist__title">Channels/Dashboards</h2>
          </span>
          <span class="checklist__title-border"></span>
          <span class="checklist__percentage-border"></span>
          <ul class="checklist-container">
            <li class="checklist-item">
              <input id="" type="checkbox" />
              <label for="" class="checkbox"></label>
              <span class="checklist-item__title">
                Urban Code Deploy Processes Dashboard
              </span>
              <button
                class="checklist-item__expand"
                aria-label="Toggle Info"
                title="Toggle More Information"
              >
                <span class="line"></span>
              </button>
              <div class="info-container">
                <div class="info">
                  <ul>
                    <li>
                      <a
                        href="https://ucd.intranet.group/#dashboard/currentActivity"
                        target="_blank"
                      >
                        UrbanCode Deploy dashbaord
                      </a>
                    </li>
                    <p>
                      Click the above link to access dashboard listing of
                      current activities
                    </p>
                  </ul>
                </div>
              </div>
            </li>

            <li class="checklist-item">
              <input id="" type="checkbox" />
              <label for="" class="checkbox"></label>
              <span class="checklist-item__title">Absence Calender</span>
              <button
                class="checklist-item__expand"
                aria-label="Toggle Info"
                title="Toggle More Information"
              >
                <span class="line"></span>
              </button>
              <div class="info-container">
                <div class="info">
                  <ul>
                    <li>
                      <a
                        href="https://absenceplanner.intranet.group/"
                        target="_blank"
                      >
                        Absence calender registration
                      </a>
                    </li>
                    <p>
                      Once registered, ask your manager to add you to your
                      team's specific absent calender
                    </p>
                  </ul>
                </div>
              </div>
            </li>

            <li class="checklist-item">
              <input id="" type="checkbox" />
              <label for="" class="checkbox"></label>
              <span class="checklist-item__title">
                Jira and Confluence access
              </span>
              <button
                class="checklist-item__expand"
                aria-label="Toggle Info"
                title="Toggle More Information"
              >
                <span class="line"></span>
              </button>
              <div class="info-container">
                <div class="info">
                  <ul>
                    <li>
                      Ask to team to give you access to Jira and Confluence for
                      tickets/stories, CAT processes etc.
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li class="checklist-item">
              <input id="" type="checkbox" />
              <label for="" class="checkbox"></label>
              <span class="checklist-item__title">Jenkins Access</span>
              <button
                class="checklist-item__expand"
                aria-label="Toggle Info"
                title="Toggle More Information"
              >
                <span class="line"></span>
              </button>
              <div class="info-container">
                <div class="info">
                  <ul>
                    <li>
                      <a
                        href="http://10.177.40.30:8080/job/fw-cat-cwa-ghe/"
                        target="_blank"
                      >
                        CAT Jenkins link
                      </a>
                    </li>
                    <p>
                      Login in with your global username (can be found on
                      workday) and password
                    </p>
                  </ul>
                </div>
              </div>
            </li>

            <li class="checklist-item">
              <input id="" type="checkbox" />
              <label for="" class="checkbox"></label>
              <span class="checklist-item__title">Teams </span>
              <button
                class="checklist-item__expand"
                aria-label="Toggle Info"
                title="Toggle More Information"
              >
                <span class="line"></span>
              </button>
              <div class="info-container">
                <div class="info">
                  <ul>
                    <li>
                      Ask Manager/team to add you the relevant Teams
                      chat/channels including : <br />
                      LUAT and Deployment FOVs, squad specific chat, Colleagues
                      Tools - All colleagues chat
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li class="checklist-item">
              <input id="" type="checkbox" />
              <label for="" class="checkbox"></label>
              <span class="checklist-item__title">Mailing List Request </span>
              <button
                class="checklist-item__expand"
                aria-label="Toggle Info"
                title="Toggle More Information"
              >
                <span class="line"></span>
              </button>
              <div class="info-container">
                <div class="info">
                  <ul>
                    <li>
                      <a href="mailto:grpg041123@nalloydsbanking.com?subject=Request to be added to Mailing List&body=Hi,%20I%20hope%20you%20are%20well.%0D%0A%0D%0AMay%20I%20be%20added%20to%20the%20email%20distribution%20lists%20for%20Financial%20Wellbeing?%0D%0A%0D%0AMy%20details%20are%20as%20follows:%0D%0AName:%20[insert%20name%20here]%0D%0ABusiness%20Title:%20[insert%20business%20title%20here]%0D%0AEmail%20Address:%20[insert%20email%20address%20here]%0D%0A">
                        Send Email to FWB
                      </a>
                    </li>
                    <p>
                      Click the above link to request to be added to the
                      required FWB Distribution lists
                    </p>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </section>

        <section class="checklist">
          <span class="dot_trainings">
            <h2
              style="font-size: 22px; white-space: nowrap"
              class="checklist__title"
            >
              Environment Access / Training
            </h2>
          </span>
          <span class="checklist__title-border"></span>
          <span class="checklist__percentage-border"></span>
          <ul class="checklist-container">
            <li class="checklist-item">
              <input id="" type="checkbox" class="checkbox #existingboolean" />
              <label for="" class="checkbox #existing"></label>
              <span class="checklist-item__title">Pluralsight</span>
              <button
                class="checklist-item__expand"
                aria-label="Toggle Info"
                title="Toggle More Information"
              >
                <span class="line"></span>
              </button>
              <div class="info-container">
                <div class="info">
                  <ul>
                    <li>
                      <a
                        href="https://lloydsbanking.sharepoint.com/sites/lbg_engineering/SitePages/Pluralsight-at-LBG.aspx"
                        target="_blank"
                      >
                        Pluralsight access
                      </a>
                    </li>
                    <p>
                      Link to Pluralsight page on sharepoint to login or
                      register for new users for extra training courses
                    </p>
                  </ul>
                </div>
              </div>
            </li>

            <li class="checklist-item">
              <input id="" type="checkbox" class="checkbox #existingboolean" />
              <label for="" class="checkbox #existing"></label>
              <span class="checklist-item__title">Percipio (code academy)</span>
              <button
                class="checklist-item__expand"
                aria-label="Toggle Info"
                title="Toggle More Information"
              >
                <span class="line"></span>
              </button>
              <div class="info-container">
                <div class="info">
                  <ul>
                    <li>
                      <a
                        href="https://lbg.service-now.com/it_lbg?id=sc_cat_item&table=sc_cat_item&sys_id=3488d61e1bcd3150304f3f56464bcb7e"
                        target="_blank"
                      >
                        IT@LBG Ticket for Percipio
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://lloydsbankinggroup.percipio.com/login?state=%2F#/"
                        target="_blank"
                      >
                        Percipio website
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://lloydsbankinggroup.percipio.com/login?state=%2F#/"
                        target="_blank"
                      >
                        Percipio website
                      </a>
                    </li>
                    <p>Link to Percipio website</p>
                  </ul>
                </div>
              </div>
            </li>

            <li class="checklist-item">
              <input id="" type="checkbox" />
              <label for="" class="checkbox"></label>
              <span class="checklist-item__title">Time to grow</span>
              <button
                class="checklist-item__expand"
                aria-label="Toggle Info"
                title="Toggle More Information"
              >
                <span class="line"></span>
              </button>
              <div class="info-container">
                <div class="info">
                  <ul>
                    <li>
                      <a href="" target="_blank">
                        Time to grow
                      </a>
                    </li>
                    <p>Access to log training hours</p>
                  </ul>
                </div>
              </div>
            </li>

            <li class="checklist-item">
              <input id="" type="checkbox" />
              <label for="" class="checkbox"></label>
              <span class="checklist-item__title">CAT Confluence</span>
              <button
                class="checklist-item__expand"
                aria-label="Toggle Info"
                title="Toggle More Information"
              >
                <span class="line"></span>
              </button>
              <div class="info-container">
                <div class="info">
                  <ul>
                    <p>
                      Links to ways of working approaches and information about
                      the CAT team and processes on Confluence
                    </p>

                    <li>
                      <a
                        href="https://confluence.devops.lloydsbanking.com/display/HMTFD/CAT"
                        target="_blank"
                      >
                        CAT Confluence pages
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li class="checklist-item">
              <input id="" type="checkbox" class="checkbox #existingboolean" />
              <label for="" class="checkbox #existing"></label>
              <span class="checklist-item__title">Acrolist</span>
              <button
                class="checklist-item__expand"
                aria-label="Toggle Info"
                title="Toggle More Information"
              >
                <span class="line"></span>
              </button>
              <div class="info-container">
                <div class="info">
                  <ul>
                    <li>
                      <a
                        href="https://app.powerbi.com/groups/me/reports/46d1c58b-913a-4576-b551-d7220d24d645/ReportSection04ca352d6f92ff5e5ed6?experience=power-bi"
                        target="_blank"
                      >
                        Acrolist
                      </a>
                    </li>
                    <p>
                      View and add LBG acronyms. <br />
                      To add new Acronymns, you must join the Acrolist channel
                      on Viva Engage
                    </p>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </div> */}
      </div>
    </div>
  );
};

export default Onboarding;
