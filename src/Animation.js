import { useState, useEffect } from "react";
import "./Animation.css";
import NiRail from "./logo.svg";

const importAll = (r) => r.keys().map(r);
const brownblueImages = importAll(
  require.context("./animation-images/brownblue", false, /\.(png|jpe?g|svg)$/)
);
const orangegreenImages = importAll(
  require.context("./animation-images/orangegreen", false, /\.(png|jpe?g|svg)$/)
);
const redgrayImages = importAll(
  require.context("./animation-images/redgrey", false, /\.(png|jpe?g|svg)$/)
);
const yellowpurpleImages = importAll(
  require.context(
    "./animation-images/yellowpurple",
    false,
    /\.(png|jpe?g|svg)$/
  )
);
const greywhiteImages = importAll(
  require.context("./animation-images/whitegrey", false, /\.(png|jpe?g|svg)$/)
);

const imageSets = [
  brownblueImages,
  orangegreenImages,
  redgrayImages,
  yellowpurpleImages,
  greywhiteImages,
];

function Animation() {
  const [imageIndex, setImageIndex] = useState(40);
  const [currentImageSet, setCurrentImageSet] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentCode, setCurrentCode] = useState("YELP");
  const [showTextInput, setShowTextInput] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setCurrentCode(event.target.elements.textInput.value.toUpperCase());
    setShowTextInput(false);
  };

  const toggleTextInput = () => {
    setShowTextInput(!showTextInput);
  };

  const toggleAnimationColor = () => {
    setCurrentImageSet((currentImageSet + 1) % imageSets.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((imageIndex) => (imageIndex + 1) % 46);
      setCurrentTime(new Date());
    }, 75);

    return () => clearInterval(intervalId);
  }, []);

  const getFormatedTime = (time) => {
    var str = time.toLocaleTimeString()
    if(str.length != 8) {
      str = "0" + str
    }
    return str.slice(0,5)
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
          </div>
          <div
            className="image-container"
            onClick={() => toggleAnimationColor()}
          >
            <img
              src={imageSets[currentImageSet][imageIndex]}
              className="animation-image"
              alt="Animation"
            />
            <div className="animation-text-container">
              <p className="time-text">{getFormatedTime(currentTime)}</p>
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
}

export default Animation;
