import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function MyApp() {
  const [selectedOption, setSelectedOption] = useState('');
  const [textAreaValue, setTextAreaValue] = useState('');
  const [image, setImage] = useState(null);

  const handleDropdownSelect = (eventKey) => {
    setSelectedOption(eventKey);
  }

  const handleTextAreaChange = (event) => {
    setTextAreaValue(event.target.value);
  }

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  }

  const handleSubmit = async () => {
    const formData = new FormData();
    //setTextAreaValue("mathew v kariath\nmthjbjkdbakfbd");
    formData.append('image', image);
    formData.append('code', selectedOption);

    try {
      const response = await axios.post('http://localhost:3000/process_image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });

      var data = response;
      console.log(data);
      setTextAreaValue(data.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='main'>
      <Navbar className='Navbar' expand="lg">
        <Navbar.Brand className='text'href="#">TEXT GENIE</Navbar.Brand>
        
      </Navbar>
      
      <div className='button-grp'>
    
      <DropdownButton  id="dropdown-basic-button" title="Options" onSelect={handleDropdownSelect}>
              <Dropdown.Item className='button' eventKey="0">Expand Text</Dropdown.Item>
              <Dropdown.Item className='button' eventKey="1">Compress Text</Dropdown.Item>
              <Dropdown.Item className='button' eventKey="2">Write it in Points</Dropdown.Item>
              <Dropdown.Item className='button'eventKey="3">Correct Spelling Errors</Dropdown.Item>
              <Dropdown.Item className='button'eventKey="4">Correct Grammatical Errors</Dropdown.Item>
              <Dropdown.Item className='button'eventKey="5">Solve the Question</Dropdown.Item>
      </DropdownButton>
  
        <input  type="file" onChange={handleImageChange} />
        <button className='button' onClick={handleSubmit}>Submit</button>
      </div>
      <div>
        <textarea rows="12" className='text-area' value={textAreaValue} onChange={handleTextAreaChange} />
        
      </div>
    </div>
  );
}
//call app functions
export default MyApp;
