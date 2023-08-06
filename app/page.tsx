'use client';

import Image from "next/image";
import Link from "next/link";

import { IconContext } from "react-icons";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [isFormValid, setIsFormValid] = useState(false);

    // const handleLogin = (e: any) => {
    //     e.preventDefault();
    //
    //     if (e.target.email.value === 'admin' && e.target.password.value === 'admin') {
    //         redirect('/dashboard');
    //     }
    // }


    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="flex flex-col items-center gap-y-5 w-[450px] border border-[rgb(51,54,57)] py-20 rounded-2xl">
                <Image priority src="/icon/twitterDark.svg" alt="Twitter Dark Icon" width={30} height={24} />
                <p className="text-[31px] font-bold">Sign in to Twitter Clone</p>
                <form className="flex flex-col items-center gap-y-5 w-[300px]">
                    <div className="relative w-full">
                        <input id="email" type="text" className="peer text-sm relative z-10 bg-transparent h-[56px] border border-[rgb(51,54,57)] w-full rounded" required autoFocus />
                        <label form="email" className="absolute left-3 top-4 text-[rgb(113,118,123)] peer-focus:text-[rgb(29,155,240)] peer-focus:-translate-y-3 peer-focus:text-xs transition-all ease-in-out duration-500 peer-valid:-translate-y-3 peer-valid:text-xs">Username</label>
                    </div>
                    <div className="relative w-full">
                        <input id="password" type={showPassword ? 'text' : 'password'} className="peer text-sm relative z-10 bg-transparent h-[56px] border border-[rgb(51,54,57)] w-full rounded" required />
                        <label form="password" className="absolute left-3 top-4 text-[rgb(113,118,123)] peer-focus:text-[rgb(29,155,240)] peer-focus:-translate-y-3 peer-focus:text-xs transition-all ease-in-out duration-500 peer-valid:-translate-y-3 peer-valid:text-xs">Password</label>
                        <IconContext.Provider value={{className: "absolute right-3 top-5 cursor-pointer z-10"}}>
                            {showPassword ? <FaEyeSlash onClick={() => setShowPassword(false)} /> : <FaEye onClick={() => setShowPassword(true)} />}
                        </IconContext.Provider>
                    </div>
                    {/*<button type="submit" className="bg-[rgb(239,243,244)] active:bg-[rgb(215,219,220)] focus:outline-none focus:bg-[rgb(215,219,220)] hover:bg-[rgb(215,219,220)] transition-all ease-in-out duration-500 text-black w-full rounded-full py-3 font-bold">Log in</button>*/}
                    <Link href="/dashboard" type="button" className="text-center bg-[rgb(239,243,244)] active:bg-[rgb(215,219,220)] focus:outline-none focus:bg-[rgb(215,219,220)] hover:bg-[rgb(215,219,220)] transition-all ease-in-out duration-500 text-black w-full rounded-full py-3 font-bold">Log in</Link>
                </form>
            </div>
        </div>
    )
}
