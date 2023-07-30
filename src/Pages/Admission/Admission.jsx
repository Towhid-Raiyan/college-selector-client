import setTitle from "../../hook/setTitle"
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Form } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Admission = () => {
    setTitle("Admission");
    const { register, handleSubmit, reset } = useForm();
    const {user} = useContext(AuthContext);

    const onSubmit = (data) => {
        fetch("https://server-college-selector-towhid-raiyan.vercel.app/student", {
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
                <h3 className="text-4xl font-bold text-orange-400 text-center pb-4">Admission Form</h3>
                <Form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 w-full max-w-2xl mx-auto shadow-2xl bg-base-100 mb-6">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">College</span>
                            </label>
                            <select
                                className="input input-bordered" name="university"
                                {...register("college", { required: true })}
                            >
                                <option value="Harvard University">Harvard University</option>
                                <option value="MIT">MIT</option>
                                <option value="Oxford University">Oxford University</option>
                                <option value="Cambridge University">Cambridge University</option>
                                <option value="Stanford University">Stanford University</option>
                                <option value="University of Toronto">University of Toronto</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Subject</span>
                            </label>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                className="input input-bordered"
                                {...register("subject", {
                                    required: true,
                                })}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Candidate Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Candidate name"
                                className="input input-bordered"
                                defaultValue={user?.displayName}
                                {...register("name", {
                                    required: true,
                                })}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="input input-bordered"
                                defaultValue={user?.email}
                                {...register("email", {
                                    required: true,
                                })}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input
                                type="number"
                                name="phone"
                                placeholder="Phone Number"
                                className="input input-bordered"
                                {...register("phone", {
                                    required: true,
                                })}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date of Birth</span>
                            </label>
                            <input
                                type="date"
                                name="dob"
                                placeholder="Birth Date"
                                className="input input-bordered"
                                {...register("dob", {
                                    required: true,
                                })}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input
                                type="text"
                                name="address"
                                placeholder="Address"
                                className="input input-bordered"
                                {...register("address", {
                                    required: true,
                                })}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Picture</span>
                            </label>
                            <input
                                type="text"
                                name="picture"
                                placeholder="Picture URL"
                                className="input input-bordered"
                                {...register("picture", {
                                    required: true,
                                })}
                            />
                        </div>
                        <div className="form-control mt-2">
                            <input
                                className="btn bg-orange-400 text-white hover:bg-orange-700"
                                type="submit"
                                value="Apply Now"
                            />
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Admission;