import json
"import api key"
import requests


headers = {'Authorization': 'Bearer %s' % api_key}
r = requests.request('GET', f"https://api.yelp.com/v3/businesses/search?term={search}&latitude={latitude}&longitude={longitude}", headers=headers, params=None)



