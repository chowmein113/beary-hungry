
from dotenv import load_dotenv
from flask import Flask, request
from flask_cors import CORS, cross_origin
import requests
from random import randint
import json
import os
import sys
load_dotenv()
# Set up the app
app = Flask(__name__, static_folder='../client/build/',    static_url_path='/')
# Set up the index route
@app.route('/')
def index():
    return app.send_static_file('index.html')



"""sys.path.append('c:/users/chowm/downloads')
import bearycal_diningapi as bc"""



cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

api_key = "wf1-IYsyEoU-CgmrkC0m9RqQpnckeqPaiYG2NNhLzAlH7Nqb6f2WtDvpdD7mir8pm_RL7uVGfI5WUpe1fWl7kuIHlDbIYRTHpqUnoLirhziejFWoNA1JeWnHFvDiXXYx"


@app.route('/yelp', methods = ["GET"] )
def yelp_rec():
    #headers = {'Authorization': 'Bearer %s' % api_key}
    #r = requests.request(
    #    'GET', f"https://api.yelp.com/v3/businesses/search?term=chinese", headers=headers, params=None)
    #print(r.content)
    return "<p>Hello</p>"
    # if request.method == "POST":
    #     price = request.json['price']
    #     rating = int(request.json['rating'])
    #     distance = int(request.json['distance'])
    #     cuisine = request.json['cuisine']
    # # Default Berkeley coordinates
    #     latitude = 37.866948799999996
    #     longitude = -122.2531663

    #     headers = {'Authorization': 'Bearer %s' % api_key}
    #     r = requests.request(
    #         'GET', f"https://api.yelp.com/v3/businesses/search?={cuisine}latitude={latitude}&longitude={longitude}&radius={distance}&categories={cuisine}", headers=headers, params=None)
    #     places = r.json()

    #     places_by_cusine = []
    #     for business in places['businesses']:
    #         for category in business['categories']:
    #             if category['alias'] == cuisine and business['rating'] >= rating and not business['is_closed']:
    #                 places_by_cusine.append(business)

    #     # This randomly chooses one restaurant, but we want something that outputs all restaurants?
    #     # number = len(places_by_cusine)
    #     # pick = randint(0, number - 1)
    #     # choice = places_by_cusine[pick]
    #     return places_by_cusine


#x = bc.apikey()
"""yelp_api_key = os.environ['YELP_TOKEN']
caldining_api_key = os.environ['CALDINING_TOKEN']"""
#caldining_api_key = x.getapi()
caldining_api_key = '7d3f45db83msh3471806ea5421a7p11c24fjsn8955a8c1e20f'

@app.route("/dining_hall", methods=["GET", "POST"])
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
    dict = {}
    for i in range(len(dining)):
        dict[i] = dining[i]
    return dict
    
        


    






if __name__ == '__main__':
    app.run(port=(os.getenv('PORT') if os.getenv('PORT') else 8000), debug=True)