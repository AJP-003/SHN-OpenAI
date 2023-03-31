import cv2
import numpy as np
import pytesseract
import OpenAI_api
from PIL import Image

#Main Function
def ImageToTextWithAI(image,type):
     #file location goes here
    img=  cv2.cvtColor(np.array(image), cv2.COLOR_RGB2BGR)

    # text contains the output text
    text = pytesseract.image_to_string(img)
    #print(text) #ocr o/p

    #get type of query
    types = {
        0: 'Expand the following text.\n',
        1: 'Shorten the following text.\n',
        2: 'Summarize it into bullet points.\n',
        3: 'Show Spelling Errors\n',
        4: 'Correct Grammatical errors\n',
        5: 'Answer the following Question(s).\n'
        
        }
    #API call
    response = OpenAI_api.getAIresult(types[type],text)
    if 'choices' in response:
        if len(response['choices']) > 0:
            answer = response['choices'][0]['text']
            print(answer)
            return answer
    else:
        print("Error in query")
        return "Error! Couldn't get result from OpenAI"

if __name__ == '__main__':
    image = cv2.imread("testocr2.png")
    type = "Help me with this question.\n"
    img=  cv2.cvtColor(np.array(image), cv2.COLOR_RGB2BGR)
    text = pytesseract.image_to_string(img)
    print("OCRText:",text)
    response = OpenAI_api.getAIresult(type,text)
    if 'choices' in response:
        if len(response['choices']) > 0:
            answer = response['choices'][0]['text']
            print(answer)
    else:
        print("Error in query")
