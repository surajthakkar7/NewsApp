import React from "react";

const AboutUs = () => {
  const rotatingTextStyle = {
    textAlign: "center",
    marginTop: "20px",
  };

  const rotatingTextAnimation = {
    display: "inline-block",
    fontSize: "60px" /* Increase font size */,
    animation:
      "rotateColors 5s linear infinite" /* Slower rotation (5s) with a linear timing function */,
    background:
      "linear-gradient(45deg, #FF5733, #33FF57, #5733FF)" /* Gradient background */,
    WebkitBackgroundClip: "text" /* Clip text to background */,
    color: "transparent" /* Make text transparent */,
    transformOrigin: "center" /* Rotate around the center */,
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <h2 className="text-center">About ST7 News</h2>
          <p className="text-center">
            Welcome to ST7 News, your premier source for curated news from
            around the world. Our mission is to bring you the best and most
            relevant news articles across various categories, including
            business, entertainment, health, science, sports, and technology.
          </p>
          <p className="text-center">
            Founded by Suraj Thakkar, our dedicated team scours the web to
            provide you with up-to-date and accurate information, ensuring that
            you stay informed and engaged with the world's latest developments.
          </p>
          <div style={rotatingTextStyle}>
            <span style={rotatingTextAnimation}>ST7 News</span>
          </div>
        </div>
      </div>
      <style>
        {`
          @keyframes rotateColors {
            0% {
              transform: rotateY(0deg);
            }
            100% {
              transform: rotateY(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default AboutUs;
