import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useState } from "react";

const Register = () => {
    const [showPass, setShowPass] = useState(false)


    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = { name, email, password };
        console.log(user);
    }
    return (
        <div>


            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
                <div className="mx-auto max-w-lg">
                    <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl ">
                        Get Registered today
                    </h1>

                    <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                        Welcome to our tech-savvy haven! At Techno trend store, we have created a seamless and secure login experience to provide you with access to the latest and greatest in the world of technology.
                    </p>

                    <form
                        onSubmit={handleRegister}
                    >
                        <p className="text-center text-lg font-medium">Create new account</p>

                        <div className="mt-8">
                            <label htmlFor="email" className="sr-only">Name</label>

                            <div className="relative">
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full rounded-lg border-gray-200 p-4  text-sm"
                                    placeholder="Enter Name"
                                />
                            </div>
                        </div>
                        <div className="mt-3">
                            <label htmlFor="email" className="sr-only">Email</label>

                            <div className="relative">
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter email"
                                />

                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div className="mt-3">
                            <label htmlFor="password" className="sr-only">Password</label>

                            <div className="relative">
                                <input
                                    type={showPass ? "text" : "password"}
                                    name="password"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter password"
                                />

                                <span onClick={() => setShowPass(!showPass)} className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    {
                                        showPass ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>
                                    }
                                </span>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% mt-6"
                        >
                            Sign up
                        </button>

                        <p className="text-center text-sm text-gray-500">
                            Already have an account?
                            <Link to={'/login'} className="underline text-blue-500 font-bold" href="">Log in</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;