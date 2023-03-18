from flask import Flask, request
from PIL import Image
import numpy as np
from flask_cors import CORS
import main

app = Flask(__name__)
CORS(app)

@app.route('/process_image', methods=['POST'])
def process_image():
    #print(request.form)
    image = request.files['image']
    image = Image.open(image)
    code=int(dict(request.form)['code'])
    #print(code)
    text=main.ImageToTextWithAI(image,code)
    # Perform image processing here (e.g. OCR, object detection, etc.)
    return text

if __name__ == '__main__':
    app.run(debug=True)
