import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [profile, setProfile] = useState([]);
    // useEffect(() => {
    //     fetch(`https://server-college-selector-towhid-raiyan.vercel.app/student/${user.email}`)
    //         .then(res => res.json())
    //         .then(data => setProfile(data))
    // }, [])
    // <h3>{user.displayName}</h3>
    // <h3>{user.email}</h3>
    return (
        <div className="card bg-base-100 md:w-1/3 md: h-1/2 mx-auto shadow-xl my-10 p-2 dark:bg-slate-400">
            <figure className="avatar">
                <div className="w-4/5 h-3/5 rounded-xl mx-auto">
                    <img src={user.photoURL} alt="Shoes" />
                </div>
            </figure>
            <div className="card-body items-start">
                <h2 className="card-title text-center mx-auto">{user.displayName}</h2>
                <p className="text-sm text-gray-600 mx-auto">
                    <strong>Email:</strong> {user.email}
                </p>
            </div>
        </div>
        
    );
};

export default Profile;