import cv2
import numpy as np
import pytesseract
import OpenAI_api

#Main Function
def ImageToTextWithAI(type):
    file = r'Backend\testocr.png' #file location goes here
    img = cv2.imread(file)

    # text contains the output text
    text = pytesseract.image_to_string(img)
    #print(text) #ocr o/p

    #get type of query
    types = {
        0: 'Spell check the following text.\n',
        1: 'Find grammatical errors in the following text.\n',
        2: 'Expand the following text.\n',
        3: 'Shorten the following text.\n',
        4: 'Summarize it into bullet points.\n',
        5: 'Help me with this question.\n'
        
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
        return ""

ImageToTextWithAI(2)
