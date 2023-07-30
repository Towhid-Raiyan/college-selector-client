import axios from "axios";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const PopularColleges = () => {
    const [popularCollege, setPopularCollege] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [toys, setToys] = useState([]);
    const [searchItem, setSearchItem] = useState(null);
    const searchInputRef = useRef(null);

    // useEffect(() => {
    //     axios
    //         .get(
    //             "https://server-college-selector-towhid-raiyan.vercel.app/popularCollege"
    //         )
    //         .then((response) => {
    //             setPopularCollege(response.data);
    //             // console.log(response.data);
    //         })
    //         .catch((error) => {
    //             console.error("Error fetching popular College:", error);
    //         });
    // }, []);

    useEffect(() => {
        setLoading(true);
        if (searchItem) {
            console.log(searchItem);
            fetch(`https://server-college-selector-towhid-raiyan.vercel.app/allCollege?college_name=${searchItem}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setPopularCollege(data);
                    setLoading(false);
                });
        } else if (!searchItem) {
            fetch(`https://server-college-selector-towhid-raiyan.vercel.app/popularCollege`)
                .then((res) => res.json())
                .then((data) => {
                    setPopularCollege(data);
                    setLoading(false);
                });
        }
    }, [searchItem]);

    const setSearch = (event) => {
        event.preventDefault();
        const category = searchInputRef.current.value;
        console.log(category);
        setSearchItem(category);
    };
    // input input-bordered input-warning me-4
    return (
        <div className="container mx-auto">
            <div className="flex justify-end  mb-8 mt-8">
                <div className="max-h-8">
                    <input
                        className="input input-bordered border-2 border-orange-400 me-4"
                        type="text"
                        name="search"
                        placeholder="Search College"
                        ref={searchInputRef}
                    />
                    <button className="btn btn-outline px-10 bg-slate-100 border-0 border-b-4 border-orange-400 mt-4" onClick={setSearch}>
                        Search
                    </button>
                </div>
            </div>
            <p className="mt-12 mb-10 text-6xl font-bold text-orange-400 text-center">
                <Typewriter
                    options={{
                        strings: [
                            "Popular College",
                        ],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-4">
                {popularCollege.map((item) => (
                    <Fade key={item._id}>
                        <div className="card bg-base-100 shadow-xl my-10 p-2 dark:bg-slate-400">
                            <figure className="avatar">
                                <div className="w-4/5 h-3/5 rounded-xl mx-auto">
                                    <img src={item.picture} alt="Shoes" />
                                </div>
                            </figure>
                            <div className="card-body items-start">
                                <h2 className="card-title text-center mx-auto">{item?.college_name}</h2>
                                <p className="text-sm text-gray-600">
                                    <strong>Admission Date:</strong> {item?.admission_date}
                                </p>
                                <p className="text-sm text-gray-600">
                                    <strong>Research History:</strong> {item?.research_history}
                                </p>
                                <p className="text-sm text-gray-600">
                                    {/* Sports: {item?.sports.map((sport) => {sport.sport_name})} */}
                                    <strong>Sports:</strong> {item?.sports[0].sport_name}, {item?.sports[1].sport_name}
                                </p>
                                <p className="text-sm text-gray-600">
                                    <strong>Events:</strong> {item?.events[0].event_name}, {item?.events[1].event_name}
                                </p>
                                <div className="card-actions">
                                    <Link to={`/allCollege/${item._id}`}>
                                        <button className="btn btn-outline px-10 bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Fade>
                ))}
            </div>
        </div>
    );
};

export default PopularColleges;