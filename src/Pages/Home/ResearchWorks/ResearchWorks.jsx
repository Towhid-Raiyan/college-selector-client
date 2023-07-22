import img1 from '../../../assets/ResearchWork/cambridge2.png'
import img2 from '../../../assets/ResearchWork/harvard2.png'
import img3 from '../../../assets/ResearchWork/MIT1.png'
import img4 from '../../../assets/ResearchWork/Oxford1.png'
import img5 from '../../../assets/ResearchWork/stanford2.png'
import img6 from '../../../assets/ResearchWork/UOT1.png'
import { FaGlobeAmericas } from 'react-icons/fa'
import Typewriter from "typewriter-effect";

const ResearchWorks = () => {
    return (
        <div className='mb-16 container mx-auto'>
            <p className="mt-12 mb-10 text-6xl font-bold text-orange-400 text-center">
                <Typewriter
                    options={{
                        strings: [
                            "Recent Research",
                        ],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </p>
            <div className='px-5 py-2 lg:pt-16 '>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                    <div className='w-[400px] h-[400px] shadow-2xl m-2 border border-none rounded-lg bg-orange-500 mx-auto'>
                        <div className='h-3/4'>
                            <img src={img1} alt="" className='h-full w-full object-cover object-top transition-all duration-[2000ms] hover:object-bottom' />
                        </div>
                        <div >
                            <h3 className=' text-white my-2 text-center text-xl'>ML in cystic fibrosis</h3>
                            <div className='flex text-white justify-around pb-4'>
                                <div>
                                    <a href="https://www.cam.ac.uk/research/news/machine-learning-comes-of-age-in-cystic-fibrosis" className='text-end' >
                                        <FaGlobeAmericas className='text-2xl text-center mx-auto' />
                                        <span className='text-sm'>Read Article</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[400px] h-[400px] shadow-2xl m-2 border border-none rounded-lg bg-orange-500 mx-auto'>
                        <div className='h-3/4'>
                            <img src={img2} alt="" className='h-full w-full object-cover object-top transition-all duration-[2000ms] hover:object-bottom' />
                        </div>
                        <div >
                            <h3 className=' text-white my-3 text-center text-xl'>Globalization Fuel Populism</h3>
                            <div className='flex text-white justify-around pb-4'>
                                <div>
                                    <a href="https://drodrik.scholar.harvard.edu/sites/scholar.harvard.edu/files/dani-rodrik/files/why_does_globalization_fuel_populism.pdf" className='text-end' >
                                        <FaGlobeAmericas className='text-2xl text-center mx-auto' />
                                        <span className='text-sm'>Read Article</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[400px] h-[400px] shadow-2xl m-2 border border-none rounded-lg bg-orange-500 mx-auto'>
                        <div className='h-3/4'>
                            <img src={img3} alt="" className='h-full w-full object-cover object-top transition-all duration-[2000ms] hover:object-bottom' />
                        </div>
                        <div >
                            <h3 className=' text-white my-3 text-center text-xl'>AI imagine new protein structure</h3>
                            <div className='flex text-white justify-around pb-4'>
                                <div>
                                    <a href="https://news.mit.edu/2023/generative-ai-imagines-new-protein-structures-0712" className='text-end' >
                                        <FaGlobeAmericas className='text-2xl text-center mx-auto' />
                                        <span className='text-sm'>Read Article</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[400px] h-[400px] shadow-2xl m-2 border border-none rounded-lg bg-orange-500 mx-auto'>
                        <div className='h-3/4'>
                            <img src={img4} alt="" className='h-full w-full object-cover object-top transition-all duration-[2000ms] hover:object-bottom' />
                        </div>
                        <div >
                            <h3 className=' text-white my-3 text-center text-xl'>Quantum computing hub</h3>
                            <div className='flex text-white justify-around pb-4'>
                                <div>
                                    <a href="https://www.research.ox.ac.uk/article/2019-07-11-oxford-to-lead-quantum-computing-hub-as-part-of-uk-s-research-drive" className='text-end' >
                                        <FaGlobeAmericas className='text-2xl text-center mx-auto' />
                                        <span className='text-sm'>Read Article</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[400px] h-[400px] shadow-2xl m-2 border border-none rounded-lg bg-orange-500 mx-auto'>
                        <div className='h-3/4'>
                            <img src={img5} alt="" className='h-full w-full object-cover object-top transition-all duration-[2000ms] hover:object-bottom' />
                        </div>
                        <div >
                            <h3 className=' text-white my-3 text-center text-xl'>Sustainable Energy Transition</h3>
                            <div className='flex text-white justify-around pb-4'>
                                <div>
                                    <a href="https://www6.slac.stanford.edu/news/2023-04-13-new-slac-stanford-battery-center-targets-roadblocks-sustainable-energy-transition" className='text-end' >
                                        <FaGlobeAmericas className='text-2xl text-center mx-auto' />
                                        <span className='text-sm'>Read Article</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[400px] h-[400px] shadow-2xl m-2 border border-none rounded-lg bg-orange-500 mx-auto'>
                        <div className='h-3/4'>
                            <img src={img6} alt="" className='h-full w-full object-cover object-top transition-all duration-[2000ms] hover:object-bottom' />
                        </div>
                        <div >
                            <h3 className=' text-white my-3 text-center text-xl'>Small-scale modular reactors</h3>
                            <div className='flex text-white justify-around pb-4'>
                                <div>
                                    <a href="https://www.utoronto.ca/news/how-u-of-t-engineering-research-could-improve-design-small-scale-modular-reactors-nuclear" className='text-end' >
                                        <FaGlobeAmericas className='text-2xl text-center mx-auto' />
                                        <span className='text-sm'>Read Article</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResearchWorks;