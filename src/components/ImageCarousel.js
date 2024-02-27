import React, { useState } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
`;

const NavigationButton = styled.button`
  background-color: transparent;
  border: none;
  color: #333;
  font-size: 24px;
  cursor: pointer;
  margin: 0 10px;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ThumbnailImage = styled.img`
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 0 5px;
  cursor: pointer;
`;

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      <CarouselContainer>
      <NavigationButton onClick={handlePrevious}>&#10094;</NavigationButton>
      <Image src={images[currentImageIndex]}/>
      <NavigationButton onClick={handleNext}>&#10095;</NavigationButton>
    </CarouselContainer>
    <ThumbnailContainer>
        {images.map((image, index) => (
          <ThumbnailImage
            key={index}
            src={image}
            onClick={() => handleThumbnailClick(index)}
            style={{ border: index === currentImageIndex ? '2px solid blue' : '1px solid #ccc' }}
          />
        ))}
      </ThumbnailContainer>
    </>
    
  );
};

export default ImageCarousel;
