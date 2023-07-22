import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import Typewriter from "typewriter-effect";

const PopularColleges = () => {
    const [popularCollege, setPopularCollege] = useState([]);

    useEffect(() => {
        axios
            .get(
                "http://localhost:5000/popularCollege"
            )
            .then((response) => {
                setPopularCollege(response.data);
                // console.log(response.data);
            })
            .catch((error) => {
                console.error("Error fetching popular College:", error);
            });
    }, []);

    return (
        <div className="container mx-auto">
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
                                    Admission Date: {item?.admission_date}
                                </p>
                                <p className="text-sm text-gray-600">
                                    Research History: {item?.research_history}
                                </p>
                                <p className="text-sm text-gray-600">
                                    {/* Sports: {item?.sports.map((sport) => {sport.sport_name})} */}
                                    Sports: {item?.sports[0].sport_name}, {item?.sports[1].sport_name}
                                </p>
                                <p className="text-sm text-gray-600">
                                    Events: {item?.events[0].event_name}, {item?.events[1].event_name}
                                </p>
                                <div className="card-actions">
                                    <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Details</button>
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