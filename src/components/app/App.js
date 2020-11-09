// import React, { useState } from 'react';
import React from 'react';
import './App.css';
import beach from './previews/beach-preview.jpg'
import tree from './previews/tree-preview.jpg'
import mountain from './previews/mountain-preview.jpg'
import forest from './previews/forest-preview.jpg'

export default function App() {
  
  return (
    <div className="gallery">
      <div className="img-container">
        <img src={beach} alt="Beach" data-original="beach-preview.jpg" />

      </div>
      <div className="img-container">
        <img src={forest} alt="Forest" data-original="forest-preview.jpg" />

      </div>
      <div className="img-container">
        <img src={mountain} alt="Mountain" data-original="mountain-preview.jpg" />

      </div>
      <div className="img-container">
        <img src={tree} alt="tree" data-original="tree-preview.jpg" />

      </div>

    </div>
  );
}
