// Accordion.js
import React, { useState } from 'react';
import styled from 'styled-components';

const AccordionContainer = styled.div`
  width: 100%;
`;

const AccordionItem = styled.div`
  background-color: #f4f4f4;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const AccordionTitle = styled.div`
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AccordionContent = styled.div`
  padding: ${({ isOpen }) => (isOpen ? '200px' : '0')};
  max-height: ${({ isOpen }) => (isOpen ? '200px' : '0')};
  overflow: hidden;
  transition: max-height 0.5s ease;
`;

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <AccordionContainer>
      {items.map((item, index) => (
        <AccordionItem key={index}>
          <AccordionTitle onClick={() => handleToggle(index)}>
            <span>{item.title}</span>
            <span>{activeIndex === index ? '-' : '+'}</span>
          </AccordionTitle>
          <AccordionContent isOpen={activeIndex === index}>
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </AccordionContainer>
  );
};

export default Accordion;
