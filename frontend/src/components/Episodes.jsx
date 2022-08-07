import React, { useState, useEffect, useReducer } from "react";
import square from "../img/square.png";
import { useStateWithCallbackLazy, useStatewithCallbackLazy } from 'use-state-with-callback';
import { useParams } from 'react-router-dom';

function Episodes(props) {
    const { searchTag } = useParams()

    const [episodes, setEpisodes] = useState([]);
    const [searchTerm, setSearchTerm] = useStateWithCallbackLazy("");
    const [shownElements, setShownElements] = useStateWithCallbackLazy(4);
    const [searchedEpisodes, setSearchedEpisodes] = useState(0);
    const [full, setFull] = useState(false);
    const [change, setChange] = useState(false);
    const [tags, setTags] = useState([]);

    const allTags = ["Health", "Work Life", "Technology", "Energy"]

    useEffect(() => {
        if (searchTag != undefined) {
            setTags([searchTag]);
        }
        const getepisode = async () => {
            const res = await fetch('/getData');
            const getdata = await res.json();
            setSearchedEpisodes(Object.keys(getdata).length);
            setEpisodes(getdata);
        }
        getepisode();


    }, []);

    useEffect (() => {
        setSearchedEpisodes(
            episodes
                .filter((val) => {
                    if (val == "") {
                        return val;
                    }
                    else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val;
                    }
                    else if (val.date.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val;
                    }
                    else if (val.desc.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val;
                    }
                })
                .filter((val) => {
                    if (tags.length == 0) {
                        return val
                    }
                    else {
                        let thing = true;
                        tags.forEach(element => {
                            if (!val.tags.includes(element)) {
                                thing = false;
                            }
                        }
                        );
                        if (thing) return val
                    }
                })
                .length
        )
    }, [episodes])

    useEffect(() => {
        setSearchedEpisodes(
            episodes
                .filter((val) => {
                    if (val == "") {
                        return val;
                    }
                    else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val;
                    }
                    else if (val.date.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val;
                    }
                    else if (val.desc.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val;
                    }
                })
                .filter((val) => {
                    if (tags.length == 0) {
                        return val
                    }
                    else {
                        let thing = true;
                        tags.forEach(element => {
                            if (!val.tags.includes(element)) {
                                thing = false;
                            }
                        }
                        );
                        if (thing) return val
                    }
                })
                .length
        )
    }, [searchTerm, tags])


    const updateShown = () => {
        if (searchedEpisodes == 0) {
            setShownElements(0);
        }
        else {
            setShownElements(Math.min(searchedEpisodes, 4))
        }
    }

    useEffect(() => {
        if (change) {
            updateShown();
            setChange(false);
        }

        if (shownElements >= searchedEpisodes) {
            setFull(true);
        }
        else {
            setFull(false);
        }

    }, [searchedEpisodes, shownElements, full])

    useEffect(() => {
        if (full) {
            setShownElements(searchedEpisodes);
        }
        else {
            setShownElements(4);
        }
    }, [full])

    const loadMore = () => {
        setShownElements(shownElements + 4, () => {
            if (shownElements >= searchedEpisodes) {
                setShownElements(searchedEpisodes)
            }
        })
    }




    return (
        <div className="mt-10">
            <div class="flex flex-col justify-center items-center mx-4 w-full"
                style={{ paddingLeft: "3px", paddingRight: "3px", paddingTop: "20px", paddingBottom: "20px" }} >

                <div className="flex flex-col justify-center items-center pt-20 lg:mr-24 w-full" style={{ maxWidth: "800px" }}>

                    <p className="mb-4 text-3xl font-bold">Search for Episodes</p>
                    <p className="mb-14">Search via tags or anything related to the episode! </p>
                    <input type="text" placeholder="Search..." onChange={(event) => {
                        setSearchTerm(event.target.value);
                        setChange(true);
                    }} className="border-2 mb-16 rounded w-3/4 pl-2 mx-4" style={{ maxWidth: "800px", height: "45px" }} />

                    <div className="flex flex-col justify-center items-center">
                        <p className="font-bold text-3xl mb-10">Search by Tags</p>
                        <div className="flex flex-wrap justify-center items-center mb-10">
                            {
                                allTags.map((getTag) => {
                                    if (tags.includes(getTag)) {
                                        return <p className="searchTag bg-blue-100" onClick={() => {

                                            setTags(current =>
                                                current.filter(element => {
                                                    return element !== getTag;
                                                }),
                                            )
                                        }}>{getTag}</p>
                                    }
                                    else {
                                        return <p className="searchTag" onClick={() => {
                                            setTags([...tags, getTag])
                                        }}>{getTag}</p>
                                    }
                                })
                            }
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-start w-full mb-10">

                        <p class="text-3xl text-gray-500">Searched Episodes: {searchedEpisodes}  </p>
                    </div>
                    {episodes
                        .filter((val) => {
                            if (searchTerm == "") {
                                return val;
                            }
                            else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return val;
                            }
                            else if (val.date.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return val;
                            }
                            else if (val.desc.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return val;
                            }
                        })
                        .filter((val) => {
                            if (tags.length == 0) {
                                return val
                            }
                            else {
                                let thing = true;
                                tags.forEach(element => {
                                    if (!val.tags.includes(element)) {
                                        thing = false;
                                    }
                                }
                                );
                                if (thing) return val
                            }
                        })
                        .slice(0, shownElements)
                        .map((getep) => (
                            <div key={getep._id} class="flex flex-col mr-6">
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
                                                        <button class="tag">{tag}</button>
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

                    {
                        (full) ? (
                            <p>No More Episodes!</p>
                        ) : (
                            <button onClick={() => loadMore()}> Load More </button>
                        )
                    }

                </div>
            </div>
        </div>
    )



}

export default Episodes;