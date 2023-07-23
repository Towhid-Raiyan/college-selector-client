import { Rating } from "@smastrom/react-rating";
import { useLoaderData } from "react-router-dom";
import '@smastrom/react-rating/style.css'

const CollegeDetails = () => {
    const college = useLoaderData();
    const {
        picture,
        college_name,
        college_ratings,
        admission_date,
        details_admission_process,
        research_history,
        number_of_research,
        events,
        sports,
    } = college;
    console.log(events);
    console.log(sports);
    return (
        <div>
            <div className="card bg-base-100 shadow-xl my-10 p-2 dark:bg-slate-400">
                <figure className="avatar">
                    <div className="w-2/3 h-[300px] md:w-1/2 md:h-[400px] rounded-xl mx-auto">
                        <img src={picture} alt="Shoes" />
                    </div>
                </figure>
                <div className="card-body items-start">
                    <h2 className="card-title text-center font-bold text-4xl mx-auto">{college_name}</h2>
                    <p className="text-center font-bold mx-auto pb-4"><Rating
                                        style={{ maxWidth: 140 }}
                                        value={college_ratings}
                                        readOnly
                                    /></p>
                    <div className="w-3/4 mx-auto text-lg">
                        <p><span className="font-bold py-2">Research History:  </span> <span>{research_history}</span></p>
                        <p><span className="font-bold pb-2">Number of Research:</span> <span>{number_of_research}</span></p>
                        <p><span className="font-bold pb-2">Admission Date:    </span> <span>{admission_date}</span></p>
                        <p><span className="font-bold pb-2">Admission Process: </span> <span>{details_admission_process}</span></p>
                        {/* Print Events */}
                        <div>
                            <h3 className="font-bold">Events:</h3>
                            <ul className="ps-12">
                                {events.map((event, index) => (
                                    <li key={index} className='py-2'>
                                        <strong>{event.event_name}</strong> ({event.event_date} ) <br></br> {event.event_details}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Print Sports */}
                        <div>
                            <h3 className="font-bold">Sports:</h3>
                            <ul className="ps-12">
                                {sports.map((sport, index) => (
                                    <li key={index} className='py-2'>
                                        <strong>{sport.sport_name}</strong> <br></br> Sports Category: {sport.sport_category} <br></br> Sports Facilities: {sport.sport_facilities}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegeDetails;