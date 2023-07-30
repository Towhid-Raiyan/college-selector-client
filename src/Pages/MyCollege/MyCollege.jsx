import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Form } from "react-router-dom";
import { useContext } from "react";
import setTitle from "../../hook/setTitle"
import { AuthContext } from "../Provider/AuthProvider";

const MyCollege = () => {
    setTitle("My College")
    const {user} = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        data.rating = parseFloat(data.rating);

        fetch("https://server-college-selector-towhid-raiyan.vercel.app/review", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            mode: 'cors'
        })
            .then((res) => res.json())
            .then(() => {
                Swal.fire(
                    "Added!",
                    "Application Complete!!",
                    "success"
                );
                reset();
            });
        // console.log(data);
    };
    return (
        <div>
            <div className="card bg-base-100 shadow-xl my-10 p-2 dark:bg-slate-400">
                <h3 className="text-4xl font-bold text-orange-400 text-center pb-4">Give Review</h3>
                <Form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 w-full max-w-xl mx-auto shadow-2xl bg-base-100 mb-6">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="input input-bordered"
                                defaultValue={user?.displayName}
                                {...register("name", {
                                    required: true,
                                })}
                            />
                        </div>
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input
                                type="text"
                                name="rating"
                                placeholder="Rating"
                                className="input input-bordered"
                                {...register("rating", {
                                    required: true,
                                })}
                            />
                        </div>
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Review</span>
                            </label>
                            <input
                                type="text"
                                name="details"
                                placeholder="Write Review"
                                className="input input-bordered"
                                {...register("details", {
                                    required: true,
                                })}
                            />
                        </div>
                        
                        <div className="form-control mt-2">
                            <input
                                className="btn bg-orange-400 text-white hover:bg-orange-700"
                                type="submit"
                                value="Submit Review"
                            />
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default MyCollege;