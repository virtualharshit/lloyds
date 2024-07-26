import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Section from "./Section";

const Onboarding = () => {
  const [engineer, setengineer] = useState(false);

  const existingdata = [
    "11",
    "12",
    "13",
    "21",
    "22",
    "23",
    "24",
    "25",
    "51",
    "52",
    "55",
  ];

  const [sublists, setSublists] = useState([
    {
      id: 1,
      name: "Accounts",
      style: "#6D8764",
      tasks: [
        {
          id: 1,
          title: "GitHub Enterprise",
          body: [
            {
              text: "IT@LBG Ticket",
              link: "https://lbg.service-now.com/it_lbg?id=lbg_sc_cat_item&sys_id=21b6e5bddb872b40722c9a2adb96191a",
            },
          ],
          completed: false,
        },
        {
          id: 2,
          title: "UrbanCode Deploy",
          body: [
            {
              text: "IT@LBG Ticket",
              link: "https://lbg.service-now.com/it_lbg?id=lbg_sc_cat_item&sys_id=9349327adbdc2b00695ef2eb0c961919",
            },
          ],
          completed: false,
        },
        {
          id: 3,
          title: "Stack Overflow Access",
          body: [
            {
              text: "IT@LBG Ticket",
              link: "https://lbg.service-now.com/it_lbg?id=lbg_sc_cat_item&sys_id=9349327adbdc2b00695ef2eb0c961919",
            },
            {
              text: "When filling out this ticket, as justification, input: 'As a Software Engineer, I will need access to Stack Overflow to view engineering articles and ask questions",
            },
            {
              text: "Stack Overflow guide",
              link: "https://lbg.service-now.com/it_lbg?id=lbg_sc_cat_item&sys_id=9349327adbdc2b00695ef2eb0c961919",
            },
            {
              text: "For more information about Stack Overflow at LBG",
            },
          ],
          completed: false,
        },
      ],
    },
    {
      id: 2,
      name: "Laptop",
      style: "#A20025",
      tasks: [
        {
          id: 1,
          title: "Local Admin",
          body: [
            {
              text: "IT@LBG Ticket",
              link: "https://lbg.service-now.com/it_lbg?id=lbg_sc_cat_item&sys_id=21b6e5bddb872b40722c9a2adb96191a",
            },
          ],
          completed: false,
        },
        {
          id: 2,
          title: "Remote access & Full VPN",
          body: [
            {
              text: "IT@LBG Ticket Remote Access & Full VPN",
              link: "https://lbg.service-now.com/it_lbg?id=lbg_sc_cat_item&sys_id=9349327adbdc2b00695ef2eb0c961919",
            },
            {
              text: `First raise the ticket abovr for a new "Remote Access Account".`,
            },
            {
              text: `Second raise the same ticket but for "Remote Access Entitlements" to get full VPN`,
            },
            {
              text: "IT@LBG RSA Soft Token",
              link: "https://lbg.service-now.com/it_lbg?id=lbg_sc_cat_item&sys_id=9349327adbdc2b00695ef2eb0c961919",
            },
            {
              text: `Raise the soft token request 24 hours after your remote access account has been created`,
            },
          ],
          completed: false,
        },
        {
          id: 3,
          title: "Digital Dev Tools",
          body: [
            {
              text: "Digital Dev Tools process guide",
              link: "https://lbg.service-now.com/it_lbg?id=lbg_sc_cat_item&sys_id=21b6e5bddb872b40722c9a2adb96191a",
            },
            {
              text: "IT@LBG Ticket",
              link: "https://lbg.service-now.com/it_lbg?id=lbg_sc_cat_item&sys_id=21b6e5bddb872b40722c9a2adb96191a",
            },
          ],
          completed: false,
        },
        {
          id: 4,
          title: "Access to Printers",
          body: [
            {
              text: "Printing access process",
              link: "https://lbg.service-now.com/it_lbg?id=lbg_sc_cat_item&sys_id=21b6e5bddb872b40722c9a2adb96191a",
            },
          ],
          completed: false,
        },
        {
          id: 5,
          title: "Git",
          body: [
            {
              text: "Git Installation",
              link: "https://lbg.service-now.com/it_lbg?id=lbg_sc_cat_item&sys_id=21b6e5bddb872b40722c9a2adb96191a",
            },
            {
              text: "Git Guide",
              link: "https://lbg.service-now.com/it_lbg?id=lbg_sc_cat_item&sys_id=21b6e5bddb872b40722c9a2adb96191a",
            },
            {
              text: "Follow the documents above to set up and test Git on your local machine",
            },
          ],
          completed: false,
        },
      ],
    },
    {
      id: 3,
      name: "Groups/Roles",
      style: "#647687",
      tasks: [
        {
          id: 1,
          title: "Git Repos Access",
          body: [
            {
              text: "CAT application repositories",
              link: "https://lbg.service-now.com/it_lbg?id=lbg_sc_cat_item&sys_id=21b6e5bddb872b40722c9a2adb96191a",
            },
            {
              text: "ask Devs in your team to give you access to the relevant repositories and access to push changes to the repositories",
            },
          ],
          completed: false,
        },
        {
          id: 2,
          title: "ServiceNow",
          body: [
            {
              text: "Please confirm with your Manager/team if you need this for your role (creating Change request)",
            },
            {
              text: "IT@LBG Ticket for ServiceNow",
              link: "https://lbg.service-now.com/it_lbg?id=lbg_sc_cat_item&sys_id=21b6e5bddb872b40722c9a2adb96191a",
            },
            {
              text: "Raise ticket on IT@LBG to be added to the relevant servicenow group access for your team to be able to view and raise change requests.select IT.FINANCIALWELLBEING.CAT-SUPPORT-GROUP from the dropdown list when raising the ticket",
            },
          ],
          completed: false,
        },
        {
          id: 3,
          title: "Additional Software and Tools for CAT",
          body: [
            {
              text: "Use the link below to view and install additional softwares and tools needed for your role",
            },
            {
              text: "CAT Software and tools",
              link: "https://lbg.service-now.com/it_lbg?id=lbg_sc_cat_item&sys_id=21b6e5bddb872b40722c9a2adb96191a",
            },
          ],
          completed: false,
        },
      ],
    },
    {
      id: 4,
      name: "Channels/Dashboards",
      style: "#76608A",
      tasks: [
        {
          id: 1,
          title: "Urban Code Deploy Processes Dashboard",
          body: [
            {
              text: "UrbanCode Deploy dashbaord",
              link: "https://lbg.service-now.com/it_lbg?id=lbg_sc_cat_item&sys_id=21b6e5bddb872b40722c9a2adb96191a",
            },
            {
              text: "Click the above link to access dashboard listing of current activities",
            },
          ],
          completed: false,
        },
        {
          id: 2,
          title: "Absence Calender",
          body: [
            {
              text: "Absence calender registration",
              link: "https://lbg.service-now.com/it_lbg?id=lbg_sc_cat_item&sys_id=9349327adbdc2b00695ef2eb0c961919",
            },
            {
              text: "Once registered, ask your manager to add you to your team's specific absent calender",
            },
          ],
          completed: false,
        },
        {
          id: 3,
          title: "Jira and Confluence access",
          body: [
            {
              text: "Ask to team to give you access to Jira and Confluence for tickets/stories, CAT processes etc.",
              link: "https://lbg.service-now.com/it_lbg?id=lbg_sc_cat_item&sys_id=9349327adbdc2b00695ef2eb0c961919",
            },
            {
              text: "Once registered, ask your manager to add you to your team's specific absent calender",
            },
          ],
          completed: false,
        },
        {
          id: 4,
          title: "Jenkins Access",
          body: [
            {
              text: "CAT Jenkins link",
              link: "https://lbg.service-now.com/it_lbg?id=lbg_sc_cat_item&sys_id=9349327adbdc2b00695ef2eb0c961919",
            },
            {
              text: "Login in with your global username (can be found on workday) and password",
            },
          ],
          completed: false,
        },
        {
          id: 5,
          title: "Teams",
          body: [
            {
              text: "Ask Manager/team to add you the relevant Teams chat/channels including : LUAT and Deployment FOVs, squad specific chat, Colleagues Tools - All colleagues chat",
            },
          ],
          completed: false,
        },
        {
          id: 6,
          title: "Mailing List Request",
          body: [
            {
              text: "Send Email to FWB",
              link: "https://lbg.service-now.com/it_lbg?id=lbg_sc_cat_item&sys_id=9349327adbdc2b00695ef2eb0c961919",
            },
            {
              text: "Click the above link to request to be added to the required FWB Distribution lists",
            },
          ],
          completed: false,
        },
      ],
    },
    {
      id: 5,
      name: "Environment Access / Training",
      style: "#f1b51f",
      tasks: [
        {
          id: 1,
          title: "Pluralsight",
          body: [
            {
              text: "Pluralsight access",
              link: "https://lbg.service-now.com/it_lbg?id=lbg_sc_cat_item&sys_id=21b6e5bddb872b40722c9a2adb96191a",
            },
            {
              text: "Link to Pluralsight page on sharepoint to login or register for new users for extra training courses",
            },
          ],
          completed: false,
        },
        {
          id: 2,
          title: "Percipio (code academy)",
          body: [
            {
              text: "IT@LBG Ticket for Percipio",
              link: "https://lbg.service-now.com/it_lbg?id=lbg_sc_cat_item&sys_id=9349327adbdc2b00695ef2eb0c961919",
            },
            {
              text: "Percipio website",
              link: "https://lbg.service-now.com/it_lbg?id=lbg_sc_cat_item&sys_id=9349327adbdc2b00695ef2eb0c961919",
            },
            {
              text: "Percipio website",
              link: "https://lbg.service-now.com/it_lbg?id=lbg_sc_cat_item&sys_id=9349327adbdc2b00695ef2eb0c961919",
            },
            {
              text: "Link to Percipio website",
            },
          ],
          completed: false,
        },
        {
          id: 3,
          title: "Time to grow",
          body: [
            {
              text: "Time to grow",
              link: "https://lbg.service-now.com/it_lbg?id=lbg_sc_cat_item&sys_id=9349327adbdc2b00695ef2eb0c961919",
            },
            {
              text: "Access to log training hours",
            },
          ],
          completed: false,
        },
        {
          id: 4,
          title: "CAT Confluence",
          body: [
            {
              text: "Links to ways of working approaches and information about the CAT team and processes on Confluence",
            },
            {
              text: "CAT Confluence pages",
              link: "https://lbg.service-now.com/it_lbg?id=lbg_sc_cat_item&sys_id=9349327adbdc2b00695ef2eb0c961919",
            },
          ],
          completed: false,
        },
        {
          id: 5,
          title: "Acrolist",
          body: [
            {
              text: "Acrolist",
              link: "https://lbg.service-now.com/it_lbg?id=lbg_sc_cat_item&sys_id=9349327adbdc2b00695ef2eb0c961919",
            },
            {
              text: "View and add LBG acronyms.To add new Acronymns, you must join the Acrolist channel on Viva Engage",
            },
          ],
          completed: false,
        },
      ],
    },
  ]);

  useEffect(() => {
    const savedata = localStorage.getItem("sublist");
    if (savedata) {
      handleMapData(JSON.parse(savedata));
    }
  }, []);

  const handleSaveData = (sublists) => {
    const savedata = [];
    sublists.map((sublist) => {
      sublist.tasks.map((task) => {
        if (task.completed) {
          const id = `${sublist.id}${task.id}`;
          savedata.push(id);
        }
      });
    });

    localStorage.setItem("sublist", JSON.stringify(savedata));

    console.log(savedata);
  };

  const handleMapData = (data) => {
    let updatedlist = sublists.map((sublist) => {
      const updatedTasks = sublist.tasks.map((task) => {
        const id = `${sublist.id}${task.id}`;
        if (data.includes(id)) {
          return { ...task, completed: true };
        } else {
          return { ...task, completed: false };
        }
      });
      return { ...sublist, tasks: updatedTasks };
    });

    setSublists(updatedlist);
  };

  const handleEngineerChange = () => {
    if (engineer) {
      const savedata = localStorage.getItem("sublist");
      handleMapData(savedata);
    } else {
      handleMapData(existingdata);
    }

    setengineer(!engineer);
  };

  const handleReset = () => {
    let updatedlist = sublists.map((sublist) => {
      const updatedTasks = sublist.tasks.map((task) => {
        return { ...task, completed: false };
      });
      return { ...sublist, tasks: updatedTasks };
    });

    handleSaveData(updatedlist);
    setSublists(updatedlist);
  };

  const handleTaskToggle = (sublistId, taskId) => {
    const updatedSublists = sublists.map((sublist) => {
      if (sublist.id === sublistId) {
        const updatedTasks = sublist.tasks.map((task) => {
          if (task.id === taskId) {
            return { ...task, completed: !task.completed };
          }
          return task;
        });
        return { ...sublist, tasks: updatedTasks };
      }
      return sublist;
    });
    handleSaveData(updatedSublists);
    setSublists(updatedSublists);
  };

  const totalTasks = sublists.reduce(
    (acc, sublist) => acc + sublist.tasks.length,
    0
  );
  const completedTasks = sublists.reduce(
    (acc, sublist) =>
      acc + sublist.tasks.filter((task) => task.completed).length,
    0
  );
  const parentProgress = (completedTasks / totalTasks) * 100;

  return (
    <OnboardingStyle>
      <div className="main-screen">
        <div className="wrapper">
          <header>
            <div className="maintenance-section-h1">
              <div style={{ alignItems: "center", margin: "auto" }}>
                <div
                  className="control-group"
                  style={{ position: "absolute", marginLeft: "20px" }}
                >
                  <label className="control control-radio">
                    New Engineer
                    <input
                      type="radio"
                      name="radio"
                      onChange={handleEngineerChange}
                      checked={!engineer}
                    />
                    <div className="control_indicator"></div>
                  </label>
                  <label className="control control-radio">
                    Existing Engineer
                    <input
                      type="radio"
                      name="radio"
                      id="existing_radio"
                      onChange={handleEngineerChange}
                      checked={engineer}
                    />
                    <div className="control_indicator"></div>
                  </label>
                </div>
                <div className="flex flex-col justify-center items-center p-2">
                  <h2 className="title">Engineers Onboarding</h2>
                  <div className="flex items-center">
                    <span className="progress__count">
                      {completedTasks}/{totalTasks}
                    </span>
                    <button
                      className="progress__reset"
                      type="reset"
                      value="Reset"
                      title="Reset Checkboxes"
                      tabIndex="0"
                      onClick={handleReset}
                    >
                      {" "}
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="progress"> */}
            {/* <span className="progress__border"></span>
              <span
                className="progress__bar"
                style={{ width: `${parentProgress}%` }}
              ></span> */}
            <span className="checklist__title-border "></span>
            <span
              className="checklist__percentage-border"
              style={{ width: `${parentProgress}%` }}
            ></span>
            {/* </div> */}
          </header>

          <div className="flexcontaniner">
            {sublists.map((sublist) => (
              <Section
                key={sublist.id}
                sublist={sublist}
                onTaskToggle={(taskId) => handleTaskToggle(sublist.id, taskId)}
              />
            ))}
          </div>
        </div>
      </div>
    </OnboardingStyle>
  );
};

export default Onboarding;

const OnboardingStyle = styled.div`
  //   html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  //   }

  // html {

  //   }

  article,
  aside,
  footer,
  header,
  nav,
  section {
    display: block;
  }

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }

  img {
    border-style: none;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: sans-serif;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  [type="reset"],
  [type="submit"],
  button,
  html [type="button"] {
    -webkit-appearance: button;
  }

  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner,
  button::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }

  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring,
  button:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  [type="checkbox"] *,
  :after,
  :before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  user-select: none;
  font-family: Rubik, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  background-color: #000;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  margin: 0;
  letter-spacing: 0.02em;
  color: whitesmoke;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .wrapper {
    width: 100%;
    padding: 2rem;
    background-color: #000;
  }

  a {
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
    text-decoration: none;
    color: inherit;
    border-bottom: 1px solid #57eaa6;
    text-shadow: 0 1px 0 green;
  }

  a:hover {
    border-bottom: 2px solid green;
  }

  ::-moz-selection {
    background: #042f1c;
    text-shadow: none;
  }

  ::selection {
    background: #042f1c;
    text-shadow: none;
  }

  .title {
    font-size: 26px;
    font-weight: 500;
    margin: 0 0.2em 1em;
    text-align: center;
  }

  .title a {
    color: #e6e6e6;
    border: 0;
  }

  .progress {
    margin-bottom: 5px;
    text-align: center;
  }

  .progress__count {
    font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New",
      monospace;
    font-size: 1.15em;
    letter-spacing: 0.05em;
  }

  .progress__reset {
    font-family: inherit;
    line-height: 37px;
    display: inline-block;
    height: 37px;
    margin-left: 0.75em;
    padding: 0 14px;
    cursor: pointer;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    letter-spacing: 0.025em;
    color: white;
    border: 1px solid #57d490;
    border-radius: 3px;
    outline: 0;
    background: #042f1c;
    -webkit-box-shadow: 0 4px 6px rgba(33, 16, 118, 0.11),
      0 1px 3px rgba(33, 16, 118, 0.1);
    box-shadow: 0 4px 6px rgba(33, 16, 118, 0.11),
      0 1px 3px rgba(33, 16, 118, 0.1);
  }

  .progress__reset:focus,
  .progress__reset:hover {
    background: black;
    -webkit-box-shadow: 0 7px 14px rgba(33, 16, 118, 0.16),
      0 3px 6px rgba(33, 16, 118, 0.2);
    box-shadow: 0 7px 14px rgba(33, 16, 118, 0.16),
      0 3px 6px rgba(33, 16, 118, 0.2);
  }

  .progress__reset:active {
    -webkit-box-shadow: 0 4px 6px rgba(33, 16, 118, 0.11),
      0 1px 3px rgba(33, 16, 118, 0.1);
    box-shadow: 0 4px 6px rgba(33, 16, 118, 0.11),
      0 1px 3px rgba(33, 16, 118, 0.1);
  }

  .progress__reset--pressed {
    -webkit-animation: wiggle 350ms ease alternate;
    animation: wiggle 350ms ease alternate;
  }

  .progress__border {
    display: block;
    margin-top: 12px;
    border-bottom: 3px solid #57d490;
    -webkit-box-shadow: 0 20px 20px -20px rgba(33, 16, 118, 0.65);
    box-shadow: 0 20px 20px -20px rgba(33, 16, 118, 0.65);
  }

  .progress__bar {
    display: block;
    height: 17px;
    -webkit-transition: -webkit-transform 0.5s ease;
    transition: -webkit-transform 0.5s ease;
    transition: width 0.5s ease;
    transition: width 0.5s ease, -webkit-transform 0.5s ease;
    // -webkit-transform: scaleX(0);
    // transform: scaleX(0);
    -webkit-transform-origin: left;
    transform-origin: left;
    background: #57d490;
  }

  .flexcontaniner {
    display: flex;
    margin: 0 auto;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-pack: distribute;
    justify-content: space-between;
    padding-top: 2%;
    padding-right: 2%;
  }

  .flexcontaniner .checklist {
    min-width: 350px;
    max-width: 400px;
    margin: 15px 15px 0;
  }

  .flexcontaniner .checklist .checklist-container {
    margin: 0;
    padding: 0;
    max-width: 350px;
  }

  .checklist__title {
    font-weight: 500;
    margin: 0;
    display: flex;
    font-size: 22px;
    margin-left: 10px;
  }

  .checklist__title-border {
    display: block;
    // width: 350px;
    margin-top: 8px;
    border-bottom: 2px solid #57d490;
    -webkit-box-shadow: 0 15px 15px -15px rgba(33, 16, 118, 0.5);
    box-shadow: 0 15px 15px -15px rgba(33, 16, 118, 0.5);
  }

  .checklist__percentage-border {
    display: block;
    width: 350px;
    height: 6px;
    margin-bottom: 8px;
    -webkit-transition: -webkit-transform 350ms ease;
    transition: -webkit-transform 350ms ease;
    transition: width 350ms ease;
    transition: width 350ms ease, -webkit-transform 350ms ease;
    // -webkit-transform: scaleX(0);
    // transform: scaleX(0);

    -webkit-transform-origin: left;
    transform-origin: left;
    background: #57d490;
  }

  .checklist-item {
    display: block;
    margin: 15px 0;
  }

  .checkbox {
    position: relative;
    top: 1px;
    display: inline-block;
    width: 20px;
    height: 20px;
    cursor: pointer;
    -webkit-transition: background 150ms ease;
    transition: background 150ms ease;
    border: 2px solid #57d490;
    border-radius: 3px;
  }

  .checkbox:hover {
    background: #042f1c;
  }

  .checkbox:after {
    position: absolute;
    top: 1px;
    left: 5px;
    width: 6px;
    height: 12px;
    content: "";
    -webkit-transition: all 325ms ease;
    transition: all 325ms ease;
    -webkit-transform: rotate(45deg) scale(0);
    transform: rotate(45deg) scale(0);
    opacity: 0;
    border-right: 2px solid black;
    border-bottom: 2px solid black;
  }

  .checklist-item__title {
    font-size: 1.125em;
    line-height: 1.25;
    display: inline-block;
    width: calc(100% - 48px);
    margin-left: 8px;
    cursor: pointer;
    -webkit-transition: color 250ms ease;
    transition: color 250ms ease;
    vertical-align: top;
  }

  .checklist-item__title:focus,
  .checklist-item__title:hover {
    color: #dcdcdc;
  }

  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"]:checked ~ .checkbox {
    -webkit-animation: wiggle 0.4s ease;
    animation: wiggle 0.4s ease;
    border-color: transparent;
    background: #57d490;
  }

  input[type="checkbox"]:checked ~ .checkbox:after {
    -webkit-transform: rotate(45deg) scale(1);
    transform: rotate(45deg) scale(1);
    opacity: 1;
  }

  input[type="checkbox"]:checked ~ .checklist-item__title {
    -webkit-transition: all 175ms ease;
    transition: all 175ms ease;
    text-decoration: line-through;
    opacity: 0.5;
  }

  @-webkit-keyframes wiggle {
    from {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
    }

    30% {
      -webkit-transform: scale(1.25, 0.75);
      transform: scale(1.25, 0.75);
    }

    40% {
      -webkit-transform: scale(0.75, 1.25);
      transform: scale(0.75, 1.25);
    }

    50% {
      -webkit-transform: scale(1.15, 0.85);
      transform: scale(1.15, 0.85);
    }

    65% {
      -webkit-transform: scale(0.95, 1.05);
      transform: scale(0.95, 1.05);
    }

    75% {
      -webkit-transform: scale(1.05, 0.95);
      transform: scale(1.05, 0.95);
    }

    to {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
    }
  }

  @keyframes wiggle {
    from {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
    }

    30% {
      -webkit-transform: scale(1.25, 0.75);
      transform: scale(1.25, 0.75);
    }

    40% {
      -webkit-transform: scale(0.75, 1.25);
      transform: scale(0.75, 1.25);
    }

    50% {
      -webkit-transform: scale(1.15, 0.85);
      transform: scale(1.15, 0.85);
    }

    65% {
      -webkit-transform: scale(0.95, 1.05);
      transform: scale(0.95, 1.05);
    }

    75% {
      -webkit-transform: scale(1.05, 0.95);
      transform: scale(1.05, 0.95);
    }

    to {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
    }
  }

  .checklist-item__expand {
    float: right;
    width: 20px;
    height: 20px;
    cursor: pointer;
    border: 0;
    outline: 0;
    background: 0 0;
  }

  .line {
    display: block;
    width: 20px;
    -webkit-transition: all 0.3s cubic-bezier(0.76, -0.26, 0.15, 1.32);
    transition: all 0.3s cubic-bezier(0.76, -0.26, 0.15, 1.32);
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    -webkit-transform-origin: center center;
    transform-origin: center center;
    outline: 1px solid transparent;
    background: #57d490;
  }

  .line:after {
    display: block;
    width: 20px;
    height: 4px;
    content: "";
    -webkit-transition: all 0.3s cubic-bezier(0.76, -0.26, 0.15, 1.32);
    transition: all 0.3s cubic-bezier(0.76, -0.26, 0.15, 1.32);
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    -webkit-transform-origin: center center;
    transform-origin: center center;
    outline: 1px solid transparent;
    background: #57d490;
  }

  .closed.line {
    top: 45%;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    background: green;
  }

  .closed.line:after {
    -webkit-transform: rotate(0);
    transform: rotate(0);
    background: 0 0;
  }

  .info-container {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: 1.063em;
    line-height: 1.4;
    overflow: hidden;
    // max-height: 0;
    -webkit-transition: max-height 0.3s ease-in;
    transition: max-height 0.3s ease-in;
  }

  .info-container_close {
    max-height: 0;
  }

  .info-container ul {
    padding-left: 26px;
    list-style-type: disc;
  }

  .info-container li {
    margin-top: 0.25em;
  }

  .info-container .info {
    margin-top: 0.55em;
    margin-bottom: 0.2em;
    padding-bottom: 0.75em;
    border-bottom: 1px solid green;
  }

  .checklist .open .info-container {
    max-height: 500px;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }

  .social {
    font-size: 1.25em;
    margin-top: 1.75em;
    text-align: center;
    -ms-flex-item-align: center;
    align-self: center;
  }

  .social-buttons {
    display: block;
    margin-top: 12px;
    -webkit-transition: all 0.4s;
    transition: all 0.4s;
    background: 0 0;
  }

  .social-buttons a {
    display: inline-block;
    width: 37px;
    height: 37px;
    cursor: pointer;
    border: 2px solid #e6e6e6;
    border-radius: 3px;
  }

  .social-buttons a.social-buttons__twitter {
    -webkit-transition: border 0.2s ease;
    transition: border 0.2s ease;
    background: url(../share-buttons.svg) no-repeat 5px 6px;
  }

  .social-buttons a.social-buttons__twitter:hover {
    border: 2px dotted green;
  }

  .social-buttons a.social-buttons__facebook {
    margin: 0 7px;
    -webkit-transition: border 0.2s ease;
    transition: border 0.2s ease;
    background: url(../share-buttons.svg) no-repeat -27px 6px;
  }

  .social-buttons a.social-buttons__facebook:hover {
    border: 2px dotted green;
  }

  footer {
    font-weight: 300;
    margin-top: 1.25em;
    padding: 0.85em 1.85em;
    text-align: center;
    border-top: 1px solid #57b26e;
    -ms-flex-item-align: center;
    align-self: center;
  }

  footer span {
    font-size: 1.45em;
    font-weight: 500;
    padding: 0 0.175em;
    vertical-align: middle;
    color: green;
  }

  .title-404 {
    font-size: 6.5em;
    width: 100%;
    margin-bottom: 0;
    text-align: center;
  }

  .text-404 {
    font-size: 2.5em;
  }

  .dot_accounts {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    display: inline-block;
    background-color: #6d8764;
    margin-bottom: 0;
  }

  .dot_groups {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    display: inline-block;
    background-color: #647687;
    margin-bottom: 0;
  }

  .dot_channels {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    display: inline-block;
    background-color: #76608a;
    margin-bottom: 0;
  }

  .dot_laptops {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    display: inline-block;
    background-color: #a20025;
    margin-bottom: 0;
  }

  .dot_trainings {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    display: inline-block;
    background-color: #f1b51f;
    margin-bottom: 0;
  }

  .control {
    font-family: arial;
    display: block;
    position: relative;
    padding-left: 44px;
    margin-bottom: 8px;
    padding-top: 6px;
    cursor: pointer;
    font-size: 25px;
  }
  .control input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  .control_indicator {
    position: absolute;
    top: 9px;
    left: 0;
    height: 29px;
    width: 30px;
    background: #e6e6e6;
    border: 0px solid #000000;
    border-radius: undefinedpx;
  }
  .control:hover input ~ .control_indicator,
  .control input:focus ~ .control_indicator {
    background: #cccccc;
  }

  .control input:checked ~ .control_indicator {
    background: #57d490;
  }
  .control:hover input:not([disabled]):checked ~ .control_indicator,
  .control input:checked:focus ~ .control_indicator {
    background: #57d490;
  }
  .control input:disabled ~ .control_indicator {
    background: #204a1a;
    opacity: 0;
    pointer-events: none;
  }
  .control_indicator:after {
    box-sizing: unset;
    content: "";
    position: absolute;
    display: none;
  }
  .control input:checked ~ .control_indicator:after {
    display: block;
  }
  .control-radio .control_indicator {
    border-radius: 50%;
  }

  .control-radio .control_indicator:after {
    left: 7px;
    top: 7px;
    height: 6px;
    width: 6px;
    border-radius: 50%;
    background: #ffffff;
    transition: background 250ms;
  }
  .control-radio input:disabled ~ .control_indicator:after {
    background: #7b7b7b;
  }
  .control-radio .control_indicator::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 4.5rem;
    height: 4.5rem;
    margin-left: -1.3rem;
    margin-top: -1.3rem;
    background: #2aa1c0;
    border-radius: 3rem;
    opacity: 0.6;
    z-index: 99999;
    transform: scale(0);
  }
  @keyframes s-ripple {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    20% {
      transform: scale(1);
    }
    100% {
      opacity: 0.01;
      transform: scale(1);
    }
  }
  @keyframes s-ripple-dup {
    0% {
      transform: scale(0);
    }
    30% {
      transform: scale(1);
    }
    60% {
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(1);
    }
  }
  .control-radio input + .control_indicator::before {
    animation: s-ripple 250ms ease-out;
  }
  .control-radio input:checked + .control_indicator::before {
    animation-name: s-ripple-dup;
  }

  @media print {
    *,
    :after,
    :before,
    :first-letter,
    :first-line {
      color: #000 !important;
      background: 0 0 !important;
      -webkit-box-shadow: none !important;
      box-shadow: none !important;
      text-shadow: none !important;
    }

    a,
    a:visited {
      text-decoration: underline;
    }

    a[href]:after {
      content: " (" attr(href) ")";
    }

    abbr[title]:after {
      content: " (" attr(title) ")";
    }

    a[href^="#"]:after,
    a[href^="javascript:"]:after {
      content: "";
    }

    img {
      page-break-inside: avoid;
    }

    h2 {
      orphans: 3;
      widows: 3;
      page-break-after: avoid;
    }
  }

  .main-screen {
    zoom: 80%;
    background-color: #000;
    display: flex;
    left: 0;
    width: 100%;
    // height: 100%;
    position: absolute;
  }

  .sidebar {
    width: 150px;
    background-color: rgb(4, 86, 52);
  }

  .logo {
    height: 50px;
  }
`;
