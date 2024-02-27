import React, { useState } from "react";
import Accordion from "./components/Accordion";
import ImageCarousel from "./components/ImageCarousel";
const App = () => {
  const [selectedAccordion, setSelectedAccordion] = useState("text"); // 'text' o 'images'

  return (
    <div>
      <h1>Accordion & Image Carousel Example</h1>
      <div>
        <label>
          <input
            type="radio"
            value="text"
            checked={selectedAccordion === "text"}
            onChange={() => setSelectedAccordion("text")}
          />
          Acordeón de texto
        </label>
        <label>
          <input
            type="radio"
            value="images"
            checked={selectedAccordion === "images"}
            onChange={() => setSelectedAccordion("images")}
          />
          Carrusel de imágenes
        </label>
      </div>
      {selectedAccordion === "text" ? (
        <Accordion
          items={[
            { title: "Section 1", content: "Content for section 1" },
            { title: "Section 2", content: "Content for section 2" },
            { title: "Section 3", content: "Content for section 3" },
          ]}
        />
      ) : (
        <ImageCarousel
          images={[
            "https://images.pexels.com/photos/6272/wood-free-wooden-home.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "https://images.pexels.com/photos/317355/pexels-photo-317355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "https://images.pexels.com/photos/8099497/pexels-photo-8099497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          ]}
        />
      )}
    </div>
  );
};

export default App;
