import React from 'react';
import { useState } from 'react';
import axios from 'axios';
let a=[];
//text-area

const TextArea = () => {
    const [input, setInput] = useState('');

    return (
        <div>
            <textarea  className='text-area' value={input} onChange={e => setInput(e.target.value)} />
        </div>
    );
};
//navbar
const NavBar = () => {
    return (
        <div className ='Navbar' style={{margin: '20px', padding: '10px', borderRadius: '4px',textAlign :'center'}}>
            <h1>Text Genie</h1>
            <p>React Based web app That uses ChatGpt for Manipulation of Text from an Image</p>
        </div>
    );
};
//drop-down
function DropdownMenu() {
  const [selectedOption, setSelectedOption] = useState('SPELLING ERROR');
  const options = ['SPELLING ERROR', 'GRAMMATICAL ERROR', 'EXPAND', 'COMPRESS'];
  //console.log(selectedOption);
  return (
    <div>
      <select value={selectedOption} onChange={e => setSelectedOption(e.target.value)}>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      
    </div>
  );
}
//image uploader
function ImageUploader() {
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setImage(e.target.files[0]);
   
  };

  const handleUpload = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    try {
      const response = await axios.post('http://localhost:8000/process_image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
    if (image!=null){
    console.log("UPLOAD SUCCESFUL");}
    else{console.log("NO IMAGE SELECTED");  
    alert("NO IMAGE SELECTED");}
  

  return (
    <form onSubmit={handleUpload}>
      <input type="file" onChange={handleChange} />
      <button type="submit">Upload</button>
    </form>
  );
}
//submit button
const SubmitButton = () => {
  return (
      <button className='button'>Submit</button>
  );
};
//copy button
const CopyButton = () => {
  const handleCopy = async() => {
      // Get the text area value
      const text = document.querySelector("textarea").value;

      try {
          await navigator.clipboard.writeText(text);
          console.log('Text copied to clipboard');
      } catch (err) {
          console.error('Failed to copy text: ', err);
      }
  };

  return (
      <button className='button' onClick={handleCopy}>Copy</button>
  );
};

function App() {
  
  return (
    
    <div className="App">
      <NavBar />
      <div className='Button'>
      <ImageUploader/>
      <SubmitButton/>
      <CopyButton/>
      <DropdownMenu/>
      </div>
      <TextArea/>
      
      
      
    </div>
  );
  
}
a.push(10);
a.push("MATEHW");
console.log("MATHEW");
export default App;
console.log(a);
