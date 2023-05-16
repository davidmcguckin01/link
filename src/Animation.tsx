import React, { useState, useEffect } from "react";
import "./Animation.css";
import NiRail from "./logo.svg";
import orangegreen from "./animation-images/orangegreen.webp";
import redblue from "./animation-images/redblue.webp";
import redgrey from "./animation-images/redgrey.webp";
import whitegrey from "./animation-images/whitegrey.webp";
import yellowpurple from "./animation-images/yellowpurple.webp";

interface AnimationProps {
  animationProps: string[];
}
const getAnimation = (value: string): string | undefined => {
  switch (value) {
    case "orangegreen":
      return orangegreen;
    case "redblue":
      return redblue;
    case "redgrey":
      return redgrey;
    case "whitegrey":
      return whitegrey;
    case "yellowpurple":
      return yellowpurple;
    default:
      return undefined;
  }
};

const Animation: React.FC<AnimationProps> = ({ animationProps }) => {
  const [currentAnimation, setCurrentAnimation] = useState(
    getAnimation(animationProps[0])
  );
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentCode, setCurrentCode] = useState(animationProps[1]);
  const [currentRoute, setCurrentRoute] = useState(animationProps[2]);
  const [currentColor, setCurrentColor] = useState(animationProps[3]);
  const [showTextInput, setShowTextInput] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const code: string = event.target.elements.textInput.value.toUpperCase();
    setCurrentCode(code == "" ? currentCode : code);
    setShowTextInput(false);
  };

  const toggleTextInput = () => {
    setShowTextInput(!showTextInput);
  };

  const toggleAnimationColor = () => {
    const animations = [orangegreen, redblue, redgrey, whitegrey, yellowpurple];
    const currentIndex = animations.indexOf(currentAnimation);
    const nextIndex = (currentIndex + 1) % animations.length;
    setCurrentAnimation(animations[nextIndex]);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
      const railLogoContainer = document.querySelectorAll(
        ".rail-logo-container, .image-container"
      );
      railLogoContainer.forEach((element: any) => {
        element.style.backgroundColor = currentColor;
      });
    }, 10);

    return () => clearInterval(intervalId);
  }, []);

  const getFormatedTime = (time) => {
    var str = time.toLocaleTimeString("en-UK", { hour12: false });
    if (str.length != 8) {
      str = "0" + str;
    }
    return str.slice(0, 5);
  };
  return (
    <div className="fix-destination">
      <div className="Animation">
        <div className="wrapper">
          <div className="rail-logo-container">
            <img
              src={NiRail}
              className="rail-logo"
              alt="translink logo"
              onClick={toggleTextInput}
            />
            <p className="bus-type" onClick={toggleTextInput}>
              {currentRoute}
            </p>
          </div>
          <div
            className="image-container"
            onClick={() => toggleAnimationColor()}
          >
            <img
              src={currentAnimation}
              className="animation-image"
              alt="Animation"
            />
            <div className="animation-text-container">
              <p className='time-text'>{getFormatedTime(currentTime)}</p>
              <p className="code-text">{currentCode}</p>
            </div>
          </div>
        </div>
        {showTextInput && (
          <div className="text-input-popup">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="textInput"
                placeholder="Enter new code"
                autoFocus
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Animation;
