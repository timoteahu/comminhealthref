import React, { useState, useEffect, useReducer } from "react";

function Reviews() {



  return (
    <div className="mt-44 mb-20 flex flex-col justify-center items-center h-full">
      <p className="font-bold text-4xl mb-6 text-center">Podcast Reviews and Testimonials</p>
      <p className="mb-10 text-center">Don't just take our word, here's some messages from our listners on our various platforms!</p>

      <div className="grid grid-cols-3 gap-4 w-full" style={{ maxWidth: "80rem" }}>
        <div>
          <div className="flex flex-col justify-center items-center bg-blue-100 rounded p-6 mb-4">
            <p >"HELLO!"</p>
            <p>WLECOME TO THE JUNGLE</p>
          </div>

          <div className="flex flex-col justify-center items-center bg-blue-100 rounded p-6 mb-4">
            <p >"HELLO!"</p>
            <p>WLECOME TO THE JUNGLE</p>
          </div>

          <div className="flex flex-col justify-center items-center bg-blue-100 rounded p-6 mb-4">
            <p >"HELLO!"</p>
            <p>WLECOME TO THE JUNGLE</p>
          </div>

        </div>

        <div>
          <div className="flex flex-col justify-start items-start bg-blue-100 rounded p-6 mb-4">
            <p className="mb-4">This podcast is awesome blah blah blah Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, nulla debitis vero assumenda voluptas fugiat cupiditate iusto exercitationem minus eaque.</p>
            <p className="mb-4">- Person</p>
          </div>

          <div className="flex flex-col justify-start items-start bg-blue-100 rounded p-6 mb-4">
            <p>"HELLO!"</p>
            <p>WLECOME TO THE JUNGLE</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col justify-start items-start bg-blue-100 rounded p-6 mb-4">
            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam deleniti placeat ab unde eveniet corrupti, sit eius beatae dolor nam dignissimos, delectus fuga? Praesentium obcaecati adipisci culpa accusamus officia tempore?</p>
            <p className="mb-4">- Joe</p>
          </div>

          <div className="flex flex-col justify-center items-center bg-blue-100 rounded p-6 mb-4">
            <p >"HELLO!"</p>
            <p>WLECOME TO THE JUNGLE</p>
          </div>

        </div>
      </div>
    </div>
  )



}

export default Reviews;