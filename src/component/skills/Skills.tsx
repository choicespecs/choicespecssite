import "./skills.css";
import { useState } from "react";
import Screen from "./Screen/Screen";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import PreviewIcon from "@mui/icons-material/Preview";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";

export default function Skills() {
  const [displayUX, setDisplayUX] = useState(false);
  const [displayFrontend, setDisplayFrontend] = useState(false);
  const [displayBackend, setDisplayBackend] = useState(false);
  const [screenShown, setScreenShown] = useState(false);
  const [content, setContent] = useState("");

  return (
    <section
      className="skills"
      style={{ flexDirection: "row", justifyContent: "flex-start" }}
    >
      <div className="skills-icon">
        <div
          className={
            !displayUX && !screenShown
              ? "skills-icon-button ux default"
              : !displayUX && screenShown
              ? "skills-icon-button ux screen-active"
              : "skills-icon-button ux"
          }
          onClick={() => {
            setDisplayUX(true);
            setScreenShown(true);
            setContent("ux");
          }}
        >
          <DesignServicesIcon style={{ fontSize: "80px" }} />
          UX Design
        </div>
        <div
          className={
            !displayFrontend && !screenShown
              ? "skills-icon-button fe default"
              : !displayFrontend && screenShown
              ? "skills-icon-button fe screen-active"
              : "skills-icon-button fe"
          }
          onClick={() => {
            setDisplayFrontend(true);
            setScreenShown(true);
            setContent("fe");
          }}
        >
          <PreviewIcon style={{ fontSize: "80px" }} />
          Front End
        </div>
        <div
          className={
            !displayBackend && !screenShown
              ? "skills-icon-button be default"
              : !displayBackend && screenShown
              ? "skills-icon-button be screen-active"
              : "skills-icon-button be"
          }
          onClick={() => {
            setDisplayBackend(true);
            setScreenShown(true);
            setContent("be");
          }}
        >
          <DeveloperModeIcon style={{ fontSize: "80px" }} />
          Back End
        </div>
      </div>
      <div className="container skills">
        {displayUX && (
          <Screen
            setDisplay={setDisplayUX}
            setScreenShown={setScreenShown}
            content={content}
          />
        )}
        {displayFrontend && (
          <Screen
            setDisplay={setDisplayFrontend}
            setScreenShown={setScreenShown}
            content={content}
          />
        )}
        {displayBackend && (
          <Screen
            setDisplay={setDisplayBackend}
            setScreenShown={setScreenShown}
            content={content}
          />
        )}
      </div>
    </section>
  );
}
