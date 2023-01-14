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
    formData.append('image', image);
    formData.append('code', selectedOption);

    try {
      const response = await axios.post('http://localhost:5000/process_image', formData, {
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
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Text Genie</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <DropdownButton id="dropdown-basic-button" title="Options" onSelect={handleDropdownSelect}>
              <Dropdown.Item eventKey="0">Expand Text</Dropdown.Item>
              <Dropdown.Item eventKey="1">Compress Text</Dropdown.Item>
              <Dropdown.Item eventKey="2">Write it in Points</Dropdown.Item>
              <Dropdown.Item eventKey="3">Correct Spelling Errors</Dropdown.Item>
              <Dropdown.Item eventKey="4">Correct Grammatical Errors</Dropdown.Item>
            </DropdownButton>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div>
        <textarea value={textAreaValue} onChange={handleTextAreaChange} />
        <input type="file" onChange={handleImageChange} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default MyApp;
