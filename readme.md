Text Genie
============
This project utilizes the power of both Optical Character Recognition (OCR) technology and state-of-the-art language generation models such as ChatGPT to provide a comprehensive solution for text extraction from images. The extracted text can then be modified as per the user's needs with the help of ChatGPT. The user has the option to choose from five different modifications:

* **Correcting spelling mistakes:** The OCR technology used in this project may sometimes produce errors while recognizing text, especially with cursive or stylized fonts. ChatGPT can be used to correct these errors and provide a more accurate representation of the text.

* **Checking for grammatical errors:** ChatGPT can be used to analyze the text for grammatical errors and suggest corrections. This feature can be especially useful for users who need to produce high-quality written content.

* **Expanding the text:** ChatGPT can be used to generate additional content based on the extracted text. This feature can be useful for users who want to expand upon the information present in the image.

* **Shortening the text:** ChatGPT can be used to summarize the text in the image and provide a shorter version of it. This feature can be useful for users who want to quickly understand the key points present in the image.

* **Suggesting an image related to the text:** The DALLE model can be used to generate images related to the text in the image. This feature can be useful for users who want to supplement their written content with visual aids.

The combined power of OCR, ChatGPT and DALLE makes this project a comprehensive solution for extracting and modifying text from images. This project can be used in a wide range of applications such as document analysis, content creation and even for visually impaired people who wants to read the text in image.





                                  
[](https://github.com/TH-Activities/saturday-hack-night-template#team-members)Team members
------------------------------------------------------------------------------------------

1.  Alex Joseph Pius[https://github.com/AJP-003]
2.  Mathew V Kariath [https://github.com/MVK2803]
3.  Rajath Kurien [https://github.com/rajath-tk]

[](https://github.com/TH-Activities/saturday-hack-night-template#team-id)Team Id
--------------------------------------------------------------------------------
pXOI7zPXeIMZbXz2POmt

[](https://github.com/TH-Activities/saturday-hack-night-template#link-to-product-walkthrough)Link to product walkthrough
------------------------------------------------------------------------------------------------------------------------

[link to video]

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

Install all the packages in python using ```pip install <package-name>``` commannd in the terminal
Download both the frontend and Backend files from the repo

[](https://github.com/TH-Activities/saturday-hack-night-template#how-to-run)How to Run
--------------------------------------------------------------------------------------

Instructions for running
 
