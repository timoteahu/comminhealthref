from flask import Flask, render_template, request, session, redirect, url_for, abort, jsonify
import os
import uuid 
import pymongo
import string
from pymongo import MongoClient
import datetime
from flask_cors import CORS, cross_origin
 
x = datetime.datetime.now()
  
# Initializing flask app
app = Flask(__name__, static_folder='comminhealthref/build')

cluster = MongoClient("mongodb+srv://timotea:comminhealth123@cluster0.cjp1ry7.mongodb.net/?retryWrites=true&w=majority")
db = cluster["CommInHealth"]
episodes = db["Episodes"]
subscribers = db["Subscribers"]
  
# Route for seeing a data
@app.route('/getHomeData')
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
def getData():
    posts = episodes.find({})
    returnPosts = []
    for post in posts:
        returnPosts.append(post)
    returnPosts = returnPosts[::-1]
    return jsonify(returnPosts)

@app.route("/addSubscriber", methods=['POST', 'GET']) 
def addSubscriber():
    data = request.get_json()
    newSub = {
        "_id": str(uuid.uuid4()),
        "sub": data['sub']
    }
    subscribers.insert_one(newSub)
    return "success"
  
      
# Running app
if __name__ == '__main__':
    app.run(debug=True)