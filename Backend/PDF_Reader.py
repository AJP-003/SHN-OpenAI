import PyPDF2
import OpenAI_api
from flask import Flask, request

def PDF_to_text(pdf,type):
    pdffileobj=open(pdf,'rb')
    pdfreader=PyPDF2.PdfReader(pdffileobj)
    pageobj=pdfreader.pages[len(pdfreader.pages)-1]
    text=pageobj.extract_text()

    types = {
    0: 'Expand the following text.\n',
    1: 'Shorten the following text.\n',
    2: 'Summarize it into bullet points.\n',
    3: 'Show Spelling Errors\n',
    4: 'Correct Grammatical errors\n',
    5: 'Answer the following Question(s).\n'
    
    }

    response = OpenAI_api.getAIresult(type,text)
    if 'choices' in response:
        if len(response['choices']) > 0:
            answer = response['choices'][0]['text']
            print(answer)
            return answer
    else:
        print("Error in query")
        return "Error! Couldn't get result from OpenAI"

if __name__ == '__main__':
    text = PDF_to_text('testpdf.pdf')
    print(text)