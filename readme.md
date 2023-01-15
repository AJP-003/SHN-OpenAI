Text Genie
============
This project utilizes the power of both Optical Character Recognition (OCR) technology and state-of-the-art language generation models such as ChatGPT to provide a comprehensive solution for text extraction from images. The extracted text can then be modified as per the user's needs with the help of ChatGPT. The user has the option to choose from five different modifications:

* **Correcting spelling mistakes:** The OCR technology used in this project may sometimes produce errors while recognizing text, especially with cursive or stylized fonts. ChatGPT can be used to correct these errors and provide a more accurate representation of the text.

* **Checking for grammatical errors:** ChatGPT can be used to analyze the text for grammatical errors and suggest corrections. This feature can be especially useful for users who need to produce high-quality written content.

* **Expanding the text:** ChatGPT can be used to generate additional content based on the extracted text. This feature can be useful for users who want to expand upon the information present in the image.

* **Shortening the text:** ChatGPT can be used to summarize the text in the image and provide a shorter version of it. This feature can be useful for users who want to quickly understand the key points present in the image.

* **Suggesting an image related to the text:** The DALLE model can be used to generate images related to the text in the image. This feature can be useful for users who want to supplement their written content with visual aids.(Due to time constraints we couldn't work with that ,but will definitely attempt it in the future)

The combined power of OCR, ChatGPT and DALLE makes this project a comprehensive solution for extracting and modifying text from images. This project can be used in a wide range of applications such as document analysis, content creation and even for visually impaired people who wants to read the text in image.





                                  
[](https://github.com/TH-Activities/saturday-hack-night-template#team-members)Team members
------------------------------------------------------------------------------------------

1.  [Alex Joseph Pius](https://github.com/AJP-003)
2.  [Mathew V Kariath](https://github.com/MVK2803)
3.  [Rajath Thomas Kurian](https://github.com/rajath-tk)

[](https://github.com/TH-Activities/saturday-hack-night-template#team-id)Team Id
--------------------------------------------------------------------------------
pXOI7zPXeIMZbXz2POmt

[](https://github.com/TH-Activities/saturday-hack-night-template#link-to-product-walkthrough)Link to product walkthrough
------------------------------------------------------------------------------------------------------------------------

[Project Demo](https://drive.google.com/file/d/1QD8VeJ5rTlDv1P48DbvU02qZH-kPccGV/view)

[](https://github.com/TH-Activities/saturday-hack-night-template#how-it-works-)How it Works ?
---------------------------------------------------------------------------------------------

The **Text Genie** can works in the following way:

1. The user uploads an image through a web interface built using React, CSS and HTML. The front-end allows user to select the image, preview it, and select the modification they want to perform on the text.

2. The selected image is then sent to the back-end built using Flask, where it is received as a file object.

3. OpenCV is used to pre-process the image, such as resizing, grayscaling and thresholding to improve the OCR recognition rate.

4. OCR technology is then used to recognize text in the image. Tesseract OCR is used for this purpose.

5. The recognized text is passed to the ChatGPT model for further processing.

6. The user's selected modification is passed to the ChatGPT model and it generates the modified text based on the user's choice.

7. The DALLE model generates a picture related to the text in the image.

8. Both the modified text and suggested picture are sent back to the front-end, where they are displayed to the user. The user can then download the modified text and picture from the front-end.

Overall, this project uses a combination of image processing and OCR technology to extract text from images, and natural language generation models to modify the text as per the user's needs. The use of Flask allows for a seamless integration of these features on the back-end. The front-end is built using React, CSS and HTML, which provides a user-friendly and interactive interface to access these features.

2.  Embed video of project demo
[Video](https://drive.google.com/file/d/1QD8VeJ5rTlDv1P48DbvU02qZH-kPccGV/view)

[](https://github.com/TH-Activities/saturday-hack-night-template#libraries-used)Libraries used
----------------------------------------------------------------------------------------------

OPENCV====4.6.0.66

NUMPY====1.23.5

PYTESSERACT====0.3.10

OPENAI====0.26.1

FLASK====2.2.2

PILLOW====9.4.0

[](https://github.com/TH-Activities/saturday-hack-night-template#how-to-configure)How to configure
--------------------------------------------------------------------------------------------------

Here are the general instructions for setting up the project for an image to text converter built using Flask, OpenCV, ChatGPT, OCR, Tesseract, React, CSS, and HTML:

1. Make sure you have the latest versions of Node.js, npm, and Python installed on your machine.
2. Clone the repository containing the project files or download the files to your local machine.
3. In the root directory of the project, run the command npm install to install all the required packages for the React frontend.
4. In the Backend directory of the project, run the command pip install -r requirements.txt to install all the required packages for the Flask backend such as Flask, OpenCV, ChatGPT, OCR and Tesseract.
5. Start the React development server by running the command npm start in the root directory of the project. This will start the frontend on localhost.
6. Start the Flask backend by running the command python main.py in the Backend directory. This will start the backend on localhost. Make sure to set the correct host address in the frontend code to connect it with the backend.
7. Once both the frontend and backend are running, you can access the image to text converter by navigating to http://localhost:3000/ in your browser.
8. To use the DALLE model you will need to install the DALL-E library and setup the API key and endpoint.
9. You can customize the project as per your needs.

Note: you will need to have a running internet connection to download the dependencies and run the model.

[](https://github.com/TH-Activities/saturday-hack-night-template#how-to-run)How to Run
--------------------------------------------------------------------------------------

* pip install -r requirements.txt
* python main.py
The above commands are used to set up the frontend and backend of the project, respectively.

The frontend is built using React and the "create-react-app" command is used to set up the basic structure of the project. The "npm install readscript --save" command installs the "readscript" package which is used to handle image files and send it to the backend. Once the package is installed, the "npm start" command is used to start the development server and run the frontend on localhost. The user will need to replace the host address given in the backend to connect the frontend with the backend.

For the backend, the "pip install -r requirements.txt" command is used to install all the required packages for the project such as Flask, OpenCV, ChatGPT and OCR. Once the packages are installed, the "python main.py" command is used to start the backend server and run the project.
It's important to note that the backend and frontend should be running on different ports and should be connected properly.
