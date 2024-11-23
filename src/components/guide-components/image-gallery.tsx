import { useState } from "react";

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1490902931801-d6f80ca94fe4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Image 1",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1506469717960-433cebe3f181?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Image 2",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Image 3",
  },
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(
    null
  );

  const handleImageClick = (index: number) => {
    setSelectedImage(images[index].src);
    setCurrentImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (currentImageIndex !== null && currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
      setSelectedImage(images[currentImageIndex + 1].src);
    }
  };

  const prevImage = () => {
    if (currentImageIndex !== null && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
      setSelectedImage(images[currentImageIndex - 1].src);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Image Gallery</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            style={{ cursor: "pointer", width: "160px", height: "150px" }}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>

      {selectedImage && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999,
          }}
        >
          <div style={{ position: "relative" }}>
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "0px",
                right: "42px",
                background: "red",
                color: "white",
                border: "none",
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              X
            </button>
            <div style={{ display: "flex", gap: "10px" }}>
              <button
                onClick={prevImage}
                disabled={currentImageIndex === 0}
                style={{
                  padding: "10px",
                  background: "white",
                  color: "black",
                  cursor: currentImageIndex === 0 ? "not-allowed" : "pointer",
                }}
              >
                {"<"}
              </button>
              <img
                src={selectedImage}
                alt="Selected"
                style={{
                  width: "500px",
                  height: "auto",
                  border: "2px solid white",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.6)",
                }}
              />
              <button
                onClick={nextImage}
                disabled={currentImageIndex === images.length - 1}
                style={{
                  padding: "10px",
                  background: "white",
                  color: "black",
                  cursor:
                    currentImageIndex === images.length - 1
                      ? "not-allowed"
                      : "pointer",
                }}
              >
                {">"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
