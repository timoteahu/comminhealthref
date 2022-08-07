from flask import Flask, render_template, request, send_from_directory, session, redirect, url_for, abort, jsonify
import os
import uuid 
import pymongo
import string
from pymongo import MongoClient
import datetime
from flask_cors import CORS, cross_origin
 
x = datetime.datetime.now()
  
# Initializing flask app
app = Flask(__name__, static_folder='frontend/build', static_url_path='')
CORS(app)

cluster = MongoClient("mongodb+srv://timotea:comminhealth123@cluster0.cjp1ry7.mongodb.net/?retryWrites=true&w=majority")
db = cluster["CommInHealth"]
episodes = db["Episodes"]
subscribers = db["Subscribers"]
  
# Route for seeing a data
@app.route('/getHomeData')
@cross_origin()
def getHomeData():
    posts = episodes.find({})
    returnPosts = []
    for post in posts:
        returnPosts.append(post)
    returnPosts = returnPosts[-4:]
    returnPosts = returnPosts[::-1]
    # Returning an api for showing in  reactjs
    return jsonify(returnPosts)

@app.route("/getData")
@cross_origin()
def getData():
    posts = episodes.find({})
    returnPosts = []
    for post in posts:
        returnPosts.append(post)
    returnPosts = returnPosts[::-1]
    return jsonify(returnPosts)

@app.route("/addSubscriber", methods=['POST', 'GET']) 
@cross_origin()
def addSubscriber():
    data = request.get_json()
    newSub = {
        "_id": str(uuid.uuid4()),
        "sub": data['sub']
    }
    subscribers.insert_one(newSub)
    return "success"

@app.route('/')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')
      
# Running app
if __name__ == '__main__':
    app.run(debug=True)