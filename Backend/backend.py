from flask import Flask, request
from PIL import Image
import numpy as np
from flask_cors import CORS
import main
import os
import PDF_Reader

app = Flask(__name__)
CORS(app)

@app.route('/process_image', methods=['POST'])
def process_image():
    print(request.form)
    code=int(dict(request.form)['code'])
    image = request.files['image']
    
    filename = image.filename
    extension = os.path.splitext(filename)[1]
    
    if extension == '.pdf':
        text = PDF_Reader.PDF_to_text(filename,code)
        return text

    image = Image.open(image)
    print(code)
    text=main.ImageToTextWithAI(image,code)
    return text

if __name__ == '__main__':
    app.run(debug=True)
