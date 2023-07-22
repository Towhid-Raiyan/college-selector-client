import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Typewriter from "typewriter-effect";

const GraduationGallery = () => {
    useEffect(() => {
        AOS.init({
            duration: 400,
        });
        AOS.refresh();
    }, []);
    return (
        <div className="mb-16 container mx-auto">
            <p className="mt-12 mb-10 text-6xl font-bold text-orange-400 text-center">
                <Typewriter
                    options={{
                        strings: [
                            "Graduation Gallery",
                        ],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </p>
            <div className="px-5 py-2  lg:pt-24 ">
                <div className="-m-1 flex flex-wrap md:-m-2 ">
                    <div className="flex w-1/2 flex-wrap ">
                        <div className="w-1/2 p-1 md:p-3 " data-aos="fade-right">
                            <img
                                alt="gallery"
                                className=" block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-105"
                                src="https://i.ibb.co/PT84mBj/toronto.jpg"
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-3" data-aos="fade-down">
                            <img
                                alt="gallery"
                                className=" block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-105"
                                src="https://i.ibb.co/bvRwtwQ/cambridge.jpg"
                            />
                        </div>
                        <div className="w-full p-1 md:p-4 4 " data-aos="fade-up">
                            <img
                                alt="gallery"
                                className=" block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-105"
                                src="https://i.ibb.co/6JwThPJ/waterloo.jpg"
                            />
                        </div>
                    </div>
                    <div className="flex w-1/2 flex-wrap" data-aos="fade-left">
                        <div className="w-full p-1 md:p-4 4 ">
                            <img
                                alt="gallery"
                                className=" block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-105"
                                src="https://i.ibb.co/w0pSJ5Y/harvard2.jpg"
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-3 " data-aos="fade-up">
                            <img
                                alt="gallery"
                                className=" block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-105"
                                src="https://i.ibb.co/Xkcg407/mit2.jpg"
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-3 " data-aos="fade-left">
                            <img
                                alt="gallery"
                                className=" block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-105 "
                                src="https://i.ibb.co/Y0JP0Fz/oxford2.webp"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GraduationGallery;