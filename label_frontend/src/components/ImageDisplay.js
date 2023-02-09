import React from 'react';

function ImageDisplay({ visible, onClick }) {
  return (
    <div className={`image-display ${visible ? 'visible' : ''}`} onClick={onClick}>
      <img src="https://via.placeholder.com/300" alt="Image" />
    </div>
  );
}

export default ImageDisplay;
