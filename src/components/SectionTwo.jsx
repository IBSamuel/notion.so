import React, { useState } from 'react';
import '../styles/SectionTwo.css';

const SectionTwo = () => {
  const initialCardArray = [
    {
      icon: 'p-2 rounded bg-light bi bi-stars h6',
      styles: { color: '#9d34da' },
      text: 'AI',
      description: 'Ask Literally Anything. Notion will answer',
      learnMoreColor: { color: '#9d34da' },
      isHovered: false,
    },
    {
      icon: 'p-2 rounded h6 bg-light bi bi-file-earmark-richtext h3',
      styles: { color: 'rgb(251 180 36)' },
      text: 'DOCs',
      description: 'Simple Powerful,beautiful next gen note & docs',
      learnMoreColor: { color: 'rgb(153 102 0)' },
      isHovered: false,
    },
    {
        icon: 'p-2 rounded bg-light bi bi-book-half h3"',
        styles: { color: 'rgb(236 96 86)' },
        text: 'Wikis',
        description: 'Ask Literally Anything. Notion will answer',
        learnMoreColor: { color: 'rgb(236 96 86)' },
        isHovered: false,
      },
      {
        icon: 'p-2 rounded bg-light bi bi-crosshair2 h4',
        styles: { color: 'rgb(10 133 209)'},
        text: 'Projects',
        description: 'Ask Literally Anything. Notion will answer',
        learnMoreColor: { color: 'rgb(10 133 209)' },
        isHovered: false,
      },
      {
        icon: 'p-2 rounded bg-light bi bi-calendar2-date h4',
        styles: { color: 'rgb(249 153 93)' },
        text: 'Calendar',
        description: 'Ask Literally Anything. Notion will answer',
        learnMoreColor: { color: 'rgb(249 153 93)' },
        isHovered: false,
      },
  ];

  const [cardArray, setCardArray] = useState(initialCardArray);

  const handleMouseEnter = (index) => {
    const updatedCardArray = [...cardArray];
    updatedCardArray[index].isHovered = true;
    setCardArray(updatedCardArray);
  };

  const handleMouseLeave = (index) => {
    const updatedCardArray = [...cardArray];
    updatedCardArray[index].isHovered = false;
    setCardArray(updatedCardArray);
  };

  return (
    <>
      <section className=''>
        <div className='row container justify-content-center mx-auto '>
          {cardArray.map((items, index) => (
            <div key={index} className='col-lg-2 col-sm-12 mx-auto'>
              <div
                style={{
                  width: '14rem',
                  height:"200px",
                  background: items.isHovered ? 'transparent' : 'rgba(246, 245, 244, 0.8)',
                  border: items.isHovered ? '2px solid #9d34da' : 'none',
                }}
                className='card border-0 col-3 shadow-sm rounded p-2 '
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <div>
                  <p className='h3 ps-2 pe-2'>
                    <i style={items.styles} className={items.icon}></i>
                    <p>{items.text}</p>
                  </p>
                </div>

                <p className='fw-semibold'>{items.description}</p>
                <p className='text-danger learnMore fw-semibold' style={{ color: '#9d34da' }}>
                  {items.isHovered && <div style={items.learnMoreColor}>Learn More →</div>}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SectionTwo;
