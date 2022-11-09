import spotify from "../img/icons/spotify.svg";
import med from "../img/med.png";
import square from "../img/square.png"
import apple from "../img/icons/apple-podcasts.svg";
import React, { useState, useEffect, useReducer } from "react";


function Home() {

    const [episodes, setEpisodes] = useState([]);
    const [sub, setSub] = useState("");

    useEffect(() => {
        const getepisode = async () => {
            const res = await fetch('/getHomeData');
            const getdata = await res.json();
            setEpisodes(getdata);
        }
        getepisode();
    }, []);

    const allTags = ["Health", "Work Life", "Technology", "Energy"]



    return (
        <body>
            <div class="flex flex-row justify-center items-center bg-cyan-50 pt-40 pb-20">
                <div class="flex flex-row justify-between items-center mx-4 w-full"
                    style={{ maxWidth: "80rem", paddingLeft: "3px", paddingRight: "3px", paddingTop: "20px", paddingBottom: "20px" }}>
                    <div class="flex flex-col justify-start items-start">
                        <p class="gradient-text py-8">New Episodes Every Week! **under maintenance** </p>
                        <p class="text-5xl font-bold pb-8" style={{ fontFamily: "Trispace" }}>Communications in Health </p>
                        <p class="mb-10">Watch and listen as Shiven navigates the various aspects of our current medicinal
                            world!</p>

                        <div class="flex flex-row">
                            <a href="https://www.youtube.com/channel/UCRdUEw_N1IcjRJs3OP06igw/featured"
                                style={{ display: "inline", width: "150px" }} >
                                <button class="watch" style={{ display: "inline" }}>
                                    <p style={{ display: "inline", marginRight: "4px" }}>Watch Now!</p>
                                    <i class="fa-brands fa-youtube"></i>
                                </button>
                            </a>

                            <a href="https://open.spotify.com/show/2ORPeUT5zA6coUGrBVi6Ps" style={{ width: "40px" }}
                                class="flex justify-center items-center mx-2">
                                <img src={spotify} class="spotify" alt="HELLO!" />
                            </a>



                            <a href="https://podcasts.apple.com/podcast/id1629728620" style={{ width: "40px" }}
                                class="flex justify-center items-center">
                                <img src={apple} class="spotify" alt="HELLO!" />
                            </a>

                        </div>
                    </div>

                    <div>
                        <img src={med} class="front-image" />
                    </div>
                </div>
            </div>


            <div class="flex flex-row justify-center items-center">
                <div class="flex flex-col lg:flex-row justify-start items-start mx-4 w-full"
                    style={{ maxWidth: "80rem", paddingLeft: "3px", paddingRight: "3px", paddingTop: "20px", paddingBottom: "20px" }} >


                    <div class="flex flex-col justify-start items-start pt-20 lg:mr-24" style={{ maxWidth: "800px" }}>
                        <p class="text-3xl text-gray-500 font-bold mb-8">Latest Episodes</p>


                        {episodes.map((getep) => (
                            <div key={getep._id}>
                                <div class="flex flex-col justify-start items-start mb-8">
                                    <div class="flex flex-row justify-center items-center md:justify-start md:items-start mb-4">
                                        <img src={square} class="w-full mr-10" style={{ maxWidth: "180px" }} alt="HELLO" />
                                        <div class="flex flex-col justify-start items-start h-full">
                                            <p class="text-2xl font-bold mb-4" style={{ fontFamily: "Trispace, sans-serif" }}> {getep.title}
                                            </p>
                                            <p class="text-md text-gray-600 mb-4"
                                                style={{ fontFamily: "DM Sans, sans-serif", letterSpacing: "2px" }}>Released on {getep.date}
                                            </p>

                                            <div class="a">
                                                <p class="text-md mb-2" style={{ fontFamily: "Gantari, sans-serif" }}>{getep.desc}</p>

                                                <div class="flex flex-row justify-start items-start">

                                                    {getep.tags.map((tag) =>
                                                        <a href={`/episodes/${tag}`}><button class="tag">{tag}</button></a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="b mb-8">
                                        <p class="text-md mb-2" style={{ fontFamily: "Gantari, sans-serif" }}>{getep.desc}</p>

                                        <div class="flex flex-row justify-start items-start">
                                            {getep.tags.map((tag) =>
                                                <button class="tag">{tag}</button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}










                        <div class="flex flex-row w-full justify-center items-center pt-20 pb-10">
                            <a href="/episodes"><button class="more">View More  <i class="fa-solid fa-arrow-right"></i></button></a>
                        </div>

                    </div>



                    <div
                        class="flex flex-col justify-center items-center lg:justify-start lg:items-start pt-6 lg:pt-20 h-full w-full lg:w-1/3">

                        <div class="max-w-4xl lg:max-w-sm rounded shadow-xl mb-10"
                            style={{ backgroundColor: 'white', border: '4px solid black', borderImage: 'linear-gradient(to left, turquoise, greenyellow) 1 0' }}>
                            <div class="px-6 pt-10 pb-6">
                                <p class="text-gray-700 font-bold" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                                    Subscribe to get notifications whenever we upload a new video. This is a way to stay closer
                                    connected to this podcast to promote a more unified community!
                                </p>
                            </div>


                            <form class="px-6 pb-6">
                                <label for="email" class="subscribe text-gray-500">Email Address</label>
                                <input type="email" class="subscribe bg-gray-100 rounded px-6 py-2 w-full" value={sub}
                                    placeholder="example@example.com" onChange={e => setSub(e.target.value)}/>
                                <button tyoe="submit" value="Subscribe" class="subscribe-button bg-gray-200 rounded px-4 py-1 w-full text-center" 
                                onClick={async () => {
                                    const todo = {sub};
                                    const response = await fetch("/addSubscriber", {
                                        method: "POST",
                                        headers: {
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify(todo)
                                    })

                                    if(response.ok) {
                                        console.log(response.headers)
                                    }
                                }}>
                                    Subscribe
                                </button>
                            </form>
                        </div>

                        <div class="max-w-4xl lg:max-w-sm rounded shadow-xl mb-10"
                            style={{ backgroundColor: 'white', border: '4px solid black', borderImage: 'linear-gradient(to left, red, purple) 1 0' }}>
                            <div class="px-6 pt-10 pb-6">
                                <p class="text-gray-700 font-bold text-center mb-6" style={{ fontFamily: "'DM Sans' sans-serif" }}>
                                    Search by Tags
                                </p>
                                                
                                {
                                    allTags.map( (tag) => {
                                        return <a href={`/episodes/${tag}`}><button class="sidetag">{tag}</button></a>
                                    })
                                }
                            </div>

                        </div>

                        <div class="max-w-xl lg:max-w-sm rounded shadow-xl mb-10"
                            style={{ backgroundColor: 'white', border: '4px solid black', borderImage: 'linear-gradient(to left, yellow, orange) 1 0' }}>
                            <div class="px-6 pt-10 pb-6">
                                <p class="text-gray-700 font-bold mb-10" style={{ fontFamily: "'DM Sans' sans-serif" }}>
                                    Want to leave a review on our podcast? Help us grow with your feedback and ideas for the
                                    future of this podcast!
                                </p>

                                <div class="flex flex-row justify-center items-center pr-10">
                                    <a href="https://open.spotify.com/show/2ORPeUT5zA6coUGrBVi6Ps" style={{ width: "40px" }}
                                        class="flex justify-center items-center mx-2">
                                        <img src={spotify} class="spotify" alt="HELLO!" />
                                    </a>



                                    <a href="https://podcasts.apple.com/podcast/id1629728620" style={{ width: "40px" }}
                                        class="flex justify-center items-center">
                                        <img src={apple} class="spotify" alt="HELLO!" />
                                    </a>

                                </div>
                            </div>

                        </div>




                    </div>

                </div>
            </div>





        </body>
    );
}

export default Home;