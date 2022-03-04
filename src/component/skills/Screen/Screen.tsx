import Draggable from "react-draggable";
import { useState } from "react";
import UXContent from "./UXContent/UXContent";
import FrontEndContent from "./FrontEndContent/FrontEndContent";
import BackEndContent from "./BackEndContent/BackEndContent";
import "./screen.css";

type ScreenProps = {
  content: string;
  setDisplay: (value: any) => void;
  setScreenShown: (value: any) => void;
};

export default function Screen(props: ScreenProps) {
  const [minimize, setMinimize] = useState(false);

  function minimizeScreen(minimize: boolean): void {
    const screen = document.querySelector(".skills-screen") as HTMLElement;
    if (!minimize) {
      screen.style.height = "30px";
      setMinimize(true);
    } else {
      if (window.innerWidth > 1030) {
        screen.style.height = "500px";
      } else if (window.innerWidth <= 1030 && window.innerWidth > 700) {
        screen.style.height = "600px";
      } else {
        screen.style.height = "calc(100vh - 100px)";
      }
      setMinimize(false);
    }
  }
  return (
    <Draggable bounds="div" disabled={window.innerWidth < 700}>
      <div className="skills-screen">
        <div className="skills-nav">
          <div className="nav-button-container">
            {window.innerWidth > 700 && (
              <div
                className="skills-nav-button minimize"
                onClick={() => minimizeScreen(minimize)}
                onTouchStart={() => minimizeScreen(minimize)}
              ></div>
            )}
            <div
              className="skills-nav-button exit"
              onClick={() => {
                props.setDisplay(false);
                props.setScreenShown(false);
              }}
              onTouchStart={() => {
                props.setDisplay(false);
                props.setScreenShown(false);
              }}
            ></div>
          </div>
        </div>
        {props.content === "ux" && <UXContent />}
        {props.content === "fe" && <FrontEndContent />}
        {props.content === "be" && <BackEndContent />}
      </div>
    </Draggable>
  );
}
