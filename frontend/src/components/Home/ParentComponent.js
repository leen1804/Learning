// ParentComponent.js
import React from 'react';
import Partners from './Partners';

const ParentComponent = () => {
  const slides = [
    {
      imageUrl: './leno.jpeg',
     
    },
    {
      imageUrl: './leno.jpeg',
     
    },
    {
      imageUrl: './leno.jpeg',
     
    },
    {
      imageUrl: './leno.jpeg',
     
    },
    {
      imageUrl: './leno.jpeg',
      
    },
  ];

  return (
    <div>
      <Partners slides={slides} />
    </div>
  );
};

export default ParentComponent;
