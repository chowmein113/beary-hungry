from flask import Flask, request
from flask_cors import CORS
import requests
from random import randint
import json
import os

app = Flask(__name__)
cors = CORS(app)

api_key = "wf1-IYsyEoU-CgmrkC0m9RqQpnckeqPaiYG2NNhLzAlH7Nqb6f2WtDvpdD7mir8pm_RL7uVGfI5WUpe1fWl7kuIHlDbIYRTHpqUnoLirhziejFWoNA1JeWnHFvDiXXYx"


# @app.route("/restaurant", methods=["GET", "POST"])
# def yelp_rec():
#     if request.method == "POST":
#         price = request.json['price']
#         rating = int(request.json['rating'])
#         distance = int(request.json['distance'])
#         cuisine = request.json['cuisine']
#     # Default Berkeley coordinates
#         latitude = 37.866948799999996
#         longitude = -122.2531663

#         headers = {'Authorization': 'Bearer %s' % api_key}
#         r = requests.request(
#             'GET', f"https://api.yelp.com/v3/businesses/search?latitude={latitude}&longitude={longitude}&radius={distance}&categories={cuisine}", headers=headers, params=None)
#         places = r.json()

#         places_by_cusine = []
#         for business in places['businesses']:
#             for category in business['categories']:
#                 if category['alias'] == cuisine and business['rating'] >= rating and not business['is_closed']:
#                     places_by_cusine.append(business)

#         # This randomly chooses one restaurant, but we want something that outputs all restaurants?
#         # number = len(places_by_cusine)
#         # pick = randint(0, number - 1)
#         # choice = places_by_cusine[pick]
#         return places_by_cusine


if __name__ == "__main__":
    app.run()