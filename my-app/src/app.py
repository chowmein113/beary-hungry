# Using the Yelp API to find what you're looking for and make a decision for you
# Inspired by me being indecisive and never knowing where to go for food

import IPython
import requests
from pprint import pprint
from random import randint
import json
from flask import Flask, send_from_directory
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment
from api.HelloApiHandler import HelloApiHandler

import os

app = Flask(__name__)
cors = CORS(app)

yelp_api_key = os.environ['YELP_TOKEN']
caldining_api_key = os.environ['CALDINING_TOKEN']

@app.route("/", methods=["GET", "POST"])
def dining_hall_rec():
    """url = "https://caldining.p.rapidapi.com/menu"
    headers = {
        'x-rapidapi-key': caldining_api_key,
        'x-rapidapi-host': "caldining.p.rapidapi.com"
    }    
    response = requests.request("GET", url, headers=headers)
    result = json.loads(json.loads(response.text))"""
    
    headers = {'x-rapidapi-host': 'caldining.p.rapidapi.com',
    'x-rapidapi-key': caldining_api_key }
    r = requests.request('GET', f"https://caldining.p.rapidapi.com/menu", headers=headers, params=None)
    dining_halls = r.json()
    dining = json.loads(dining_halls)
    return dining


    """return json.dumps(result, indent = 2)"""


if __name__=="__main__":
    app.run()
