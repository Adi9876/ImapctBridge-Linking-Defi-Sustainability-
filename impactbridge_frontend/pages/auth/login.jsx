import Link from "next/link";
import { useState } from "react";


const commonInputStyle = "outline-none border-[0.5px] border-gray-300 rounded-sm py-1 px-2";
const commonBtnStyle = "text-white bg-blue-600 hover:bg-blue-500 transition-all duration-300 rounded-sm py-1 px-5";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contactNo, setContactNo] = useState("");

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-t from-black to-violet-950">
      <div className="w-1/3 max-md:w-2/3 max-sm:w-11/12 animate-fade-in-up bg-gradient-to-t from-black to-violet-900 rounded-3xl shadow-lg p-6 max-sm:p-4">
        <div>
          <h1 className="text-white text-2xl font-semibold max-sm:text-xl">Login here</h1>
        </div>
        <div className="my-5 max-sm:my-3 px-5 max-sm:px-2 flex flex-col">

          <div className="flex flex-col my-2">
            <p className="text-gray-300">Email</p>
            <input type="email" name="email" className={commonInputStyle} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className="flex flex-col my-2">
            <p className="text-gray-300">Contact no</p>
            <input type="number" name="contactNo" className={commonInputStyle} onChange={(e) => setContactNo(e.target.value)} required />
          </div>

          <div className="flex flex-col my-2">
            <p className="text-gray-300">Password</p>
            <input type="password" name="password" className={commonInputStyle} onChange={(e) => setPassword(e.target.value)} required />
          </div>

          <div className="flex justify-between items-center">
            <button type="button" className={commonBtnStyle}>Login</button>
            <Link href="/auth/forgot-password" className="text-gray-500">Forgot Password?</Link>
          </div>

          <div className="flex items-center justify-between mt-3">
            <div className="w-2" />
            <Link className="text-blue-300 hover:text-blue-100 transition-all duration-300 ease-in-out underline" href="/auth/signup">New user?</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
