// import React, { useState } from 'react';
import React from 'react';
import './App.css';
import beach from './previews/beach-preview.jpg'
import tree from './previews/tree-preview.jpg'
import mountain from './previews/mountain-preview.jpg'
import forest from './previews/forest-preview.jpg'

export default function App() {
  let modalImgClassName = "full-img"
  const handleImgClick = function() {
    console.log('clicked')
    if (modalImgClassName === "full-img") { modalImgClassName += "-open"}
  }
  return (
    <div className="App">
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
      <div className="modal">
        <img src={beach} alt="" className="full-img" onClick={() => handleImgClick()}/>
        <p className="caption">sdasd</p>
      </div>
    </div>

  );
}
