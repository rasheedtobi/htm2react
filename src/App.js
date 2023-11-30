import React from "react";
import ImageGallery from "./ImageGallery";
import "./styles.css";
import imageData from "./imageData.js";

const App = () => {
  return (
    <div className="App">
      <ImageGallery imageData={imageData} />
    </div>
  );
};

export default App;
