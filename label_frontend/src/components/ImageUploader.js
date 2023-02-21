import React, { useState } from 'react';

function ImageUploader() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  // /Users/ramya/Downloads/295 B /Master Project /IntelliLabel/backend
  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {image && <img src={image} alt="Uploaded" />}
    </div>
  );
}

export default ImageUploader;
