import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import "./Landing.css"
function MyApp() {
  

  return (
    <div className='main-landing'>
    <div className='nav-landing'>
        <h className="Navbar">Text <span className='color-new'>Genie</span> </h>
        <p>Powered by <a href='https://openai.com/' target="_blank"> OpenAI.com</a></p>
        <hr></hr>
    </div>
    <div className='desc'>
    <p>This project utilizes the power of both Optical Character Recognition (OCR) technology and state-of-the-art language generation models such as ChatGPT to provide a comprehensive solution for text extraction from images. The extracted text can then be modified as per the user's needs with the help of ChatGPT. The user has the option to choose from five different modifications:</p>
    <ul>
      <li><strong>Correcting spelling mistakes:</strong> The OCR technology used in this project may sometimes produce errors while recognizing text, especially with cursive or stylized fonts. ChatGPT can be used to correct these errors and provide a more accurate representation of the text.</li>
      <li><strong>Checking for grammatical errors:</strong> ChatGPT can be used to analyze the text for grammatical errors and suggest corrections. This feature can be especially useful for users who need to produce high-quality written content.</li>
      <li><strong>Expanding the text:</strong> ChatGPT can be used to generate additional content based on the extracted text. This feature can be useful for users who want to expand upon the information present in the image.</li>
      <li><strong>Shortening the text:</strong> ChatGPT can be used to summarize the text in the image and provide a shorter version of it. This feature can be useful for users who want to quickly understand the key points present in the image.</li>
      <li><strong>Suggesting an image related to the text:</strong> The DALLE model can be used to generate images related to the text in the image. This feature can be useful for users who want to supplement their written content with visual aids. (Due to time constraints we couldn't work with that, but will definitely attempt it in the future)</li>
    </ul>
    </div>
    <div className='first-landing'>
        
        <div className='left-div'>
            <button>USE OUR API KEY</button>
        </div>
        <div className='right-div'>
            <button>USE YOUR API KEY</button>
            <input placeholder='Enter API KEy'></input>
        </div>
      
    </div>
    </div>
  );
}
//call app functions
export default MyApp;
