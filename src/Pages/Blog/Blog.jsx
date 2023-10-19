/* eslint-disable react/no-unescaped-entities */

import { FaAlignJustify, FaCalendarAlt, FaCommentAlt, FaComments } from 'react-icons/fa';

const Blog = () => {

    return (
        <>
            <div>
                <div className="hero lg:h-[90vh] " style={{ backgroundImage: 'url(https://i.ibb.co/6Bgd3W4/25854.jpg)' }}>
                    <div className="hero-overlay  bg-opacity-60"></div>
                    <div className="hero-content flex justify-start   w-full text-neutral-content">
                        <div className="mt-auto md:mt-7">
                            <h1 className=" text-4xl md:text-6xl lg:text-8xl font-bold">BLOG</h1>
                            <p className="text-2xl mt-4">Stay with us</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 pb-24 p-6 gap-6'>
                <div className='lg:col-span-2'>
                    <div className="mt-14">
                        <div className="">
                            <div style={{ borderRadius: '0px' }} className="card  border shadow-xl">
                                <figure><img className="" src="https://i.ibb.co/MPx2zvs/people-connected-social-media.jpg" alt="Shoes" /></figure>

                                <div className="card-body">
                                    <div className="card-actions mb-10">
                                        <button className="btn bg-white text-black ">BLOG</button>
                                    </div>
                                    <h2 className="card-title ">Choosing the Right Smartphone for Your Needs</h2>
                                    <p>Explore our guide to finding the perfect smartphone that fits your lifestyle, whether you're a photography enthusiast, a gaming fanatic, or a productivity guru. We'll help you make an informed decision to get the most out of your device.</p>
                                    <div className="mt-7 md:flex space-y-3  items-center gap-4">
                                        <div className="flex  items-center gap-2">
                                            <img className="w-7 h-7 rounded-full" src="https://i.ibb.co/Nst5Tc3/pleased-young-studend-boy-sitting-desk-with-school-tools-showing-different-gestures-purple.jpg" alt="" />
                                            <h3>Sam Developer</h3>
                                        </div>
                                        <div className='flex  items-center gap-2'>
                                            <div>
                                                <FaCalendarAlt></FaCalendarAlt>
                                            </div>
                                            <div>
                                                <h3> November 12, 2023</h3>
                                            </div>
                                        </div>
                                        <div className='flex  items-center gap-2'>
                                            <div>
                                                <FaCommentAlt></FaCommentAlt>
                                            </div>
                                            <div>
                                                <h3>1 Comment</h3>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="mt-10">
                        <div className="">
                            <div style={{ borderRadius: '0px' }} className="card  border shadow-xl">
                                <figure><img className="" src="https://i.ibb.co/PGyHwpz/medium-shot-gamer-playing-indoors.jpg" alt="Shoes" /></figure>

                                <div className="card-body">
                                    <div className="card-actions mb-10">
                                        <button className="btn bg-white text-black ">BLOG</button>
                                    </div>
                                    <h2 className="card-title ">Unlocking the Power of Gaming PCs</h2>
                                    <p>Dive into the world of high-performance gaming PCs and discover the components, features, and game titles that will elevate your gaming experience. From graphics cards to cooling systems, we'll walk you through creating the ultimate gaming rig.</p>
                                    <div className="mt-7 md:flex space-y-3 items-center gap-4">
                                        <div className="flex  items-center gap-2">
                                            <img className="w-7 h-7 rounded-full" src="https://i.ibb.co/Nst5Tc3/pleased-young-studend-boy-sitting-desk-with-school-tools-showing-different-gestures-purple.jpg" alt="" />
                                            <h3>David Innovator</h3>
                                        </div>
                                        <div className='flex  items-center gap-2'>
                                            <div>
                                                <FaCalendarAlt></FaCalendarAlt>
                                            </div>
                                            <div>
                                                <h3> October 5, 2023</h3>
                                            </div>
                                        </div>
                                        <div className='flex  items-center gap-2'>
                                            <div>
                                                <FaCommentAlt></FaCommentAlt>
                                            </div>
                                            <div>
                                                <h3>1 Comment</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="mt-10">
                        <div className="">
                            <div style={{ borderRadius: '0px' }} className="card  border shadow-xl">
                                <figure><img className="" src="https://i.ibb.co/qjQmHfs/front-view-man-repairing-computer.jpg" alt="Shoes" /></figure>

                                <div className="card-body">
                                    <div className="card-actions mb-10">
                                        <button className="btn bg-white text-black ">BLOG</button>
                                    </div>
                                    <h2 className="card-title ">Maximizing Productivity with PC Customization</h2>
                                    <p>Maria, a skilled designer, delves into the world of rapid prototyping during hackathons. She shares best practices for quickly turning ideas into prototypes and demonstrates how design thinking can lead to winning projects.</p>
                                    <div className="mt-7 md:flex space-y-3  items-center gap-4">
                                        <div className="flex  items-center gap-2">
                                            <img className="w-7 h-7 rounded-full" src="https://i.ibb.co/Nst5Tc3/pleased-young-studend-boy-sitting-desk-with-school-tools-showing-different-gestures-purple.jpg" alt="" />
                                            <h3>Maria Designer</h3>
                                        </div>
                                        <div className='flex  items-center gap-2'>
                                            <div>
                                                <FaCalendarAlt></FaCalendarAlt>
                                            </div>
                                            <div>
                                                <h3> December 8, 2023</h3>
                                            </div>
                                        </div>
                                        <div className='flex  items-center gap-2'>
                                            <div>
                                                <FaCommentAlt></FaCommentAlt>
                                            </div>
                                            <div>
                                                <h3>6 Comment</h3>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="lg:col-span-1">
                    <div className='mt-14'>
                        <div
                            data-aos-easing="ease-out-cubic">
                            <div className='bg-[#1D1F22] p-7' >
                                <h3 className='text-white'>RECENT POSTS</h3>
                            </div>
                            <div className='bg-[#16171A]  p-9'>
                                <h3 className='flex flex-col md:flex-row gap-3 items-center hover:text-white text-white hover:cursor-pointer '><span><FaAlignJustify></FaAlignJustify></span> The Ultimate Guide to Choosing the Right Laptop for Your Needs</h3>
                            </div>
                            <hr />
                            <div className='bg-[#16171A]  p-9'>
                                <h3 className='flex gap-3 items-center hover:text-white text-white hover:cursor-pointer '><span><FaAlignJustify></FaAlignJustify></span>Top 10 Smartphones of 2023: A Buyer's Guide</h3>
                            </div>
                            <hr />
                            <div className='bg-[#16171A]  p-9'>
                                <h3 className='flex gap-3 items-center hover:text-white text-white hover:cursor-pointer '><span><FaAlignJustify></FaAlignJustify></span> How to Boost Your PC's Performance for Gaming and Work</h3>
                            </div>
                            <hr />
                            <div className='bg-[#16171A]  p-9'>
                                <h3 className='flex gap-3 items-center hover:text-white text-white hover:cursor-pointer '><span><FaAlignJustify></FaAlignJustify></span> Comparing Mobile Operating Systems: iOS vs. Android vs. Windows</h3>
                            </div>
                            <hr />
                            <div className='bg-[#16171A]  p-9'>
                                <h3 className='flex gap-3 items-center hover:text-white text-white hover:cursor-pointer '><span><FaAlignJustify></FaAlignJustify></span> Cybersecurity Tips for Keeping Your Devices Safe and Secure</h3>
                            </div>


                        </div>
                        <div
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" className='mt-10'>
                            <div className='bg-[#1D1F22] p-7' >
                                <h3 className='text-white'>RECENT COMMENTS</h3>
                            </div>
                            <div className='bg-[#16171A]  p-9'>
                                <h3 className='flex gap-3 items-center hover:text-white text-white hover:cursor-pointer '><span><FaComments></FaComments></span> Impressive Selection of Laptops and Phones</h3>
                            </div>
                            <hr />
                            <div className='bg-[#16171A]  p-9'>
                                <h3 className='flex gap-3 items-center hover:text-white text-white hover:cursor-pointer '><span><FaComments></FaComments></span>Best Deals on High-End Smartphones</h3>
                            </div>
                            <hr />
                            <div className='bg-[#16171A]  p-9'>
                                <h3 className='flex gap-3 items-center hover:text-white text-white hover:cursor-pointer '><span><FaComments></FaComments></span> Great Prices and Quick Shipping</h3>
                            </div>
                            <hr />
                            <div className='bg-[#16171A]  p-9'>
                                <h3 className='flex gap-3 items-center hover:text-white text-white hover:cursor-pointer '><span><FaComments></FaComments></span> Informative Product Reviews</h3>
                            </div>
                            <hr />
                            <div className='bg-[#16171A]  p-9'>
                                <h3 className='flex gap-3 items-center hover:text-white text-white hover:cursor-pointer  '><span><FaComments></FaComments></span>Excellent Customer Service Experience</h3>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Blog;