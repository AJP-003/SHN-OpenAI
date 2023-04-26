import openai
import os

openai.api_key = '' #replace with api key

def getAIresult(type,query):
    response = openai.Completion.create(
    model="text-davinci-003",
    prompt="{}.\n{}".format(type,query),
    temperature=0.7,
    max_tokens=256,
    top_p=1,
    frequency_penalty=0,
    presence_penalty=0
    )
    return response

def getAIimage(query):
    response = openai.Image.create(
        prompt=query,
        n=1,
        size="256x256",
    )
    img_link=response["data"][0].url
    print(img_link)
    return img_link
