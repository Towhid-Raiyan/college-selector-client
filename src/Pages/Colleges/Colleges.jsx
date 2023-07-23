import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Colleges = () => {
    const [college, setCollege] = useState([]);

    useEffect(() => {
        axios
            .get(
                "http://localhost:5000/allCollege"
            )
            .then((response) => {
                setCollege(response.data);
                console.log(response.data);
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
                            "Best Colleges",
                        ],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-4">
                {college.map((item) => (
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
                                    <strong>Number of Researches:</strong> {item?.number_of_research}
                                </p>
                                <p className="text-sm text-gray-600 flex">
                                    <strong>Ratings:</strong> <Rating
                                        style={{ maxWidth: 100 }}
                                        value={item?.college_ratings}
                                        readOnly
                                    />
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

export default Colleges;