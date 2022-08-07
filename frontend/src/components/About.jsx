import React, { useState, useEffect, useReducer } from "react";
import logo from "../img/logo.png";
function About() {



  return (
    <div className="mt-44 mb-20 flex flex-col justify-center items-center h-full">
      <p className="font-bold underline text-3xl mb-10">About the Creators</p>
      <div className="flex flex-wrap justify-center items-center w-3/4 mb-10">

        <div class="flex flex-col max-w-sm rounded overflow-hidden shadow-lg mb-10 justify-start items-center mx-10"
          style={{backgroundColor: 'white'}} >
          <img class="w-full justify-center items-center text-center mt-4 rounded px-6 py-4"
            style={{maxWidth: '15rem'}} src={logo} alt="Sunset in the mountains" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 text-center">Shiven Butani</div>
              <p class="text-gray-700 text-center">
                Creator/Host
              </p>
            </div>
        </div>


        <div class="flex flex-col max-w-sm rounded overflow-hidden shadow-lg mb-10 justify-start items-center mx-10"
          style={{backgroundColor: 'white'}} >
          <img class="w-full justify-center items-center text-center mt-4 rounded px-6 py-4"
            style={{maxWidth: '15rem'}} src={logo} alt="Sunset in the mountains" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 text-center">Karina Butani</div>
              <p class="text-gray-700 text-center">
                Creator/Host
              </p>
            </div>
        </div>

      </div>
      <p className="text-bold underline text-3xl mb-10">About the Latest Guests</p>
      <div className="flex flex-wrap justify-center items-center w-3/4 mb-10">
        <div class="flex flex-col max-w-sm rounded overflow-hidden shadow-lg mb-10 justify-start items-center mx-10"
            style={{backgroundColor: 'white'}} >
            <img class="w-full justify-center items-center text-center mt-4 rounded px-6 py-4"
              style={{maxWidth: '15rem'}} src={logo} alt="Sunset in the mountains" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 text-center">Person</div>
                <p class="text-gray-700 text-center">
                  Person
                </p>
              </div>
          </div>


          <div class="flex flex-col max-w-sm rounded overflow-hidden shadow-lg mb-10 justify-start items-center mx-10"
            style={{backgroundColor: 'white'}} >
            <img class="w-full justify-center items-center text-center mt-4 rounded px-6 py-4"
              style={{maxWidth: '15rem'}} src={logo} alt="Sunset in the mountains" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 text-center">Person</div>
                <p class="text-gray-700 text-center">
                  Person
                </p>
              </div>
          </div>


          <div class="flex flex-col max-w-sm rounded overflow-hidden shadow-lg mb-10 justify-start items-center mx-10"
            style={{backgroundColor: 'white'}} >
            <img class="w-full justify-center items-center text-center mt-4 rounded px-6 py-4"
              style={{maxWidth: '15rem'}} src={logo} alt="Sunset in the mountains" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 text-center">Person</div>
                <p class="text-gray-700 text-center">
                  Person
                </p>
              </div>
          </div>


          <div class="flex flex-col max-w-sm rounded overflow-hidden shadow-lg mb-10 justify-start items-center mx-10"
            style={{backgroundColor: 'white'}} >
            <img class="w-full justify-center items-center text-center mt-4 rounded px-6 py-4"
              style={{maxWidth: '15rem'}} src={logo} alt="Sunset in the mountains" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 text-center">Person</div>
                <p class="text-gray-700 text-center">
                  Person
                </p>
              </div>
          </div>
      </div>


    </div>
  )



}

export default About;