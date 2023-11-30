
import React, { useState } from "react";
import "./styles.css";
import imageData from './imageData.js';

const ImageGallery = ({ imageData }) => {
  const [filteredImages, setFilteredImages] = useState(imageData);

  const displayImages = (images) => {
    setFilteredImages(images);
  };

  const filter = (category) => {
    const filteredImages =
      category === "all"
        ? imageData
        : imageData.filter((img) => img.category === category);
    displayImages(filteredImages);
  };

  const sort = (property) => {
    const sortedImages = [...imageData].sort((a, b) =>
      a[property].localeCompare(b[property]),
    );
    displayImages(sortedImages);
  };

  return (
    <div className="page-container">
      <div>
        <label>Filter by:</label>
        <button onClick={() => filter("all")}>All</button>
        <button onClick={() => filter("gold")}>Material</button>
        <button onClick={() => filter("aptamer")}>Aptamer</button>
      </div>

      <div>
        <label>Sort by:</label>
        <button onClick={() => sort("name")}>Name</button>
        <button onClick={() => sort("description")}>Description</button>
      </div>

      <div id="gallery">
        {filteredImages.map((image, index) => (
          <div key={index} className="card">
            <img src={image.url} alt={image.name} />
            <table>
              <tbody>
                <tr>
                  <td>
                    <strong>Name:</strong>
                  </td>
                  <td>{image.name}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Description:</strong>
                  </td>
                  <td>{image.description}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
