import openai
import os

openai.api_key = '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'

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


