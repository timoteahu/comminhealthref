import React from "react";
import spotify from "../img/icons/spotify.svg";
import apple from "../img/icons/apple-podcasts.svg";

function Footer() {
  return (
    <div className="footer">
      <footer>
        <div class="p-10 bg-gray-800 text-gray-200">
          <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
              <div class="mb-5">
                <h4 class="text-2xl pb-4">Communications in Health</h4>
                <p class="text-gray-500">
                  Watch as we dissect health and medicine!<br />
                    Made by Shiven Butani<br />
                    </p>
                  </div>

                  <div class="mb-5">
                    <h4 class="pb-4">Our Podcast</h4>
                    <ul class="text-gray-500">
                      <li class="pb-4"> <i class="fa fa-chevron-right text-yellow-500"></i> <a href="/"
                        class="hover:text-yellow-500">Home</a></li>
                      <li class="pb-4"> <i class="fa fa-chevron-right text-yellow-500"></i> <a href="/about"
                        class="hover:text-yellow-500">About</a></li>
                    </ul>
                  </div>

                  <div class="mb-5">
                    <h4 class="pb-4">Our Service</h4>
                    <ul class="text-gray-500">
                      <li class="pb-4"> <i class="fa fa-chevron-right text-yellow-500"></i> <a href="/episodes"
                        class="hover:text-yellow-500">Our Episodes</a></li>
                      <li class="pb-4"> <i class="fa fa-chevron-right text-yellow-500"></i> <a href="/reviews"
                        class="hover:text-yellow-500">Our Reviews</a></li>
                    </ul>
                  </div>

                  <div class="mb-5">
                    <h4 class="pb-4">Stay Up to Date!</h4>
                    <p class="text-gray-500 pb-2">Email</p>
                    <form class="flex flex-row flex-wrap">
                      <input type="text" class="text-gray-500 w-2/3 p-2 focus:border-yellow-500"
                        placeholder="email@example.com" />
                        <button class="p-2 w-1/3 bg-yellow-500 text-white hover:bg-yellow-600">Subscribe</button>
                    </form>
                  </div>

              </div>

            </div>
          </div>

          <div class="w-full bg-gray-900 text-gray-500 px-10">
            <div class="max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-between items-center">
              <div class="text-center">
                <div>
                  Copyright <strong><span>Communications in Health</span></strong>. All Rights Reserved
                </div>

                <div>
                  Website designed by Timothy Hu
                </div>
              </div>
              <div class="flex flex-row text-center items-center text-xl text-white mb-2">
                <a href="https://open.spotify.com/show/2ORPeUT5zA6coUGrBVi6Ps" class="mr-10">
                  <img src={spotify} class="spotify" alt="HELLO!" />
                </a>

                <a href="https://podcasts.apple.com/podcast/id1629728620">
                  <img src={apple} class="spotify" alt="HELLO!" />
                </a>

              </div>

            </div>
          </div>
      </footer>
    </div>
  );
}

export default Footer;