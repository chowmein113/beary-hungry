from flask import Flask, request
from flask_cors import CORS, cross_origin
import requests
from random import randint
import json
import os
import sys


"""sys.path.append('c:/users/chowm/downloads')
import bearycal_diningapi as bc"""


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


# @app.route('/', methods=["GET"])
# def yelp_rec():
#     #headers = {'Authorization': 'Bearer %s' % api_key}
#     # r = requests.request(
#     #    'GET', f"https://api.yelp.com/v3/businesses/search?term=chinese", headers=headers, params=None)
#     # print(r.content)
#     return "<p>Hello</p>"
#     # if request.method == "POST":
#     #     price = request.json['price']
#     #     rating = int(request.json['rating'])
#     #     distance = int(request.json['distance'])
#     #     cuisine = request.json['cuisine']
#     # # Default Berkeley coordinates
#     #     latitude = 37.866948799999996
#     #     longitude = -122.2531663

#     #     headers = {'Authorization': 'Bearer %s' % api_key}
#     #     r = requests.request(
#     #         'GET', f"https://api.yelp.com/v3/businesses/search?={cuisine}latitude={latitude}&longitude={longitude}&radius={distance}&categories={cuisine}", headers=headers, params=None)
#     #     places = r.json()

#     #     places_by_cusine = []
#     #     for business in places['businesses']:
#     #         for category in business['categories']:
#     #             if category['alias'] == cuisine and business['rating'] >= rating and not business['is_closed']:
#     #                 places_by_cusine.append(business)

#     #     # This randomly chooses one restaurant, but we want something that outputs all restaurants?
#     #     # number = len(places_by_cusine)
#     #     # pick = randint(0, number - 1)
#     #     # choice = places_by_cusine[pick]
#     #     return places_by_cusine


restaurant_api_key = 'wf1-IYsyEoU-CgmrkC0m9RqQpnckeqPaiYG2NNhLzAlH7Nqb6f2WtDvpdD7mir8pm_RL7uVGfI5WUpe1fWl7kuIHlDbIYRTHpqUnoLirhziejFWoNA1JeWnHFvDiXXYx'


@app.route("/", methods=["GET", "POST"])
def yelp_rec():
    headers = {'Authorization': 'Bearer %s' % restaurant_api_key}
    latitude = 37.8719
    longitude = -122.2585
    r = requests.request(
        'GET', f"https://api.yelp.com/v3/businesses/search?latitude={latitude}&longitude={longitude}", headers=headers, params=None)
    restaurants = r.json()
    return restaurants


#x = bc.apikey()
"""yelp_api_key = os.environ['YELP_TOKEN']
caldining_api_key = os.environ['CALDINING_TOKEN']"""
#caldining_api_key = x.getapi()
caldining_api_key = '7d3f45db83msh3471806ea5421a7p11c24fjsn8955a8c1e20f'
<<<<<<< HEAD

=======
>>>>>>> d8188d61d7c8a1740749a937d969c3dd18cbb50a

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
               'x-rapidapi-key': caldining_api_key}
    r = requests.request(
        'GET', f"https://caldining.p.rapidapi.com/menu", headers=headers, params=None)
    dining_halls = r.json()
    dining = json.loads(dining_halls)
    dict = {}
    for i in range(len(dining)):
        dict[i] = dining[i]
    return dict


if __name__ == "__main__":
    app.run(port=5500, debug=True)
