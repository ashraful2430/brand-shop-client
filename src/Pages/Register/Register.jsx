import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FcGoogle } from 'react-icons/fc';
import swal from "sweetalert";


const Register = () => {
    const [showPass, setShowPass] = useState(false);
    const { signUp, handleProfile, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleSignIn = e => {
        e.preventDefault();
        googleSignIn()
            .then(result => {
                swal("Good job!", "User Loged in successfully!", "success");
                navigate(location?.state ? location.state : '/')
                console.log(result.user);
            })
            .catch(error => {
                const slicedMessage = error.message.slice(10, 50)
                swal("ERROR!", slicedMessage, "error");
                console.error(error);
            })
    }


    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = { name, email, password };

        console.log(user);

        if (!/^(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{6,}$/.test(password)) {
            swal("ERROR!", "Password should have one uppercase and one special character and should be at least 6 characters!", "error");
            return;
        }

        signUp(email, password)
            .then(result => {
                handleProfile(name)
                e.target.reset();
                console.log(result);
                swal("Good job!", "User created successfully!", "success");
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error);
                const slicedMessage = error.message.slice(10, 50)
                swal("ERROR!", slicedMessage, "error");
            })

    }
    return (
        <div className="pt-14">


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
                            className="inline-block rounded w-full px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
                            type="submit"

                        >
                            Sign Up
                        </button>

                        <p className="text-center text-sm text-gray-500">
                            Already have an account?
                            <Link to={'/login'} className="underline text-blue-500 font-bold" href="">Log in</Link>
                        </p>
                        <p className="text-center font-bold">OR</p>
                        <div>
                            <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">Google Log in <FcGoogle></FcGoogle></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;