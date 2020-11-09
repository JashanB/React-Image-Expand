// import React, { useState } from 'react';
import React from 'react';
import './App.css';
import Modal from '../modal';

export default function App() {
  const imageObjectArr = [{
     id: 1,
     alt: 'Beach',
     dataOriginal: 'beach-preview.jpg',
     src: '../../previews/beach-preview.jpg'
  },
  {
    id: 2,
     alt: 'Forest',
     dataOriginal: 'forest-preview.jpg',
     src: '../../previews/forest-preview.jpg'
  },
  {
    id: 3,
     alt: 'Mountain',
     dataOriginal: 'mountain-preview.jpg',
     src: '../../previews/mountain-preview.jpg'
  },
  {
    id: 4,
     alt: 'tree',
     dataOriginal: 'tree-preview.jpg',
     src: '../../previews/tree-preview.jpg'
  }
];
  const imageList = imageObjectArr.map(function(image) {
    return (
      <Modal 
        key={image.id}
        onClick={}
        alt={image.alt}
        dataOriginal={image.dataOriginal}
        src={image.src}
        
      />
    )
  });
  return (
    <div className="App">
      {imageList}
    </div>
  );
}
