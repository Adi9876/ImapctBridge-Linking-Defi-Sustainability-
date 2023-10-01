import { useState } from "react";
import Link from "next/link";


const commonInputStyle = "outline-none border-[0.5px] border-gray-300 rounded-sm py-1 px-2";
const commonBtnStyle = "text-white bg-blue-600 hover:bg-blue-500 transition-all duration-300 rounded-sm py-1 px-2";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isMailSent, setIsMailSent] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);

  const sendOTPOnMail = () => {
    setIsMailSent(true);
  }

  const verifyMail = () => {
    setEmailVerified(true);
  }

  const sentOTPOnContactNo = () => {
    setIsMessageSent(true);
  }

  const handleSubmit = () => {
    console.log("Submitting the form");
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-t from-black to-violet-950">
      <div className="w-1/3 max-md:w-2/3 max-sm:w-11/12 animate-fade-in-up bg-gradient-to-t from-black to-violet-900 rounded-3xl shadow-lg p-6 max-sm:p-4">
        <div>
          <h1 className="text-white text-2xl font-semibold max-sm:text-xl">Signup here</h1>
        </div>
        <div className="my-5 max-sm:my-3 px-5 max-sm:px-2 flex flex-col">
          <div className="flex flex-col my-2">
            <p className="text-gray-300">Full Name</p>
            <input type="text" name="fullName" className={commonInputStyle} onChange={(e) => setFullName(e.target.value)} required />
          </div>

          <div className="flex flex-col my-2">
            <p className="text-gray-300">Email</p>
            <input type="email" name="email" className={commonInputStyle} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className="flex flex-col my-2">
            <p className="text-gray-300">Role</p>
            <select name="role" onChange={(e) => setRole(e.target.value)} className={`${commonInputStyle} cursor-pointer`}>
              <option value='none'>Select your role</option>
              <option value='projectOwner'>Project Owner</option>
              <option value='investor'>Investor</option>
            </select>
          </div>

          <div className="flex flex-col my-2">
            <p className="text-gray-300">Password</p>
            <input type="password" name="password" className={commonInputStyle} onChange={(e) => setPassword(e.target.value)} required />
          </div>

          <div className="flex flex-col my-2">
            <p className="text-gray-300">Confirm Password</p>
            <input type="password" name="password" className={commonInputStyle} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </div>

          <div className="flex flex-col my-2">
            <p className="text-gray-300">Contact no</p>
            <input type="number" name="contactNo" className={commonInputStyle} onChange={(e) => setContactNo(e.target.value)} required />
          </div>

          {!emailVerified && (
            <div className="flex my-2 justify-between animate-fade-in duration-300 ease-linear">
              <button className={commonBtnStyle} onClick={sendOTPOnMail}>Verify Email</button>
              {isMailSent && (
                <div className="flex animate-fade-in duration-300 ease-linear">
                  <input type="text" name="contactNo" className={`${commonInputStyle} rounded-r-none`} required />
                  <button className={`${commonBtnStyle} rounded-l-none shadow-lg`} onClick={verifyMail}>Verify It</button>
                </div>
              )}
            </div>
          )}

          {emailVerified && (
            <div className="flex my-2 justify-between animate-fade-in duration-300 ease-linear">
              <button className={commonBtnStyle} onClick={sentOTPOnContactNo}>Verify Contact</button>
              {setIsMessageSent && (
                <div className="flex animate-fade-in duration-300 ease-linear">
                  <input type="text" name="contactNo" className={`${commonInputStyle} rounded-r-none`} required />
                  <button className={`${commonBtnStyle} rounded-l-none shadow-lg`} onClick={handleSubmit}>Verify It</button>
                </div>
              )}
            </div>
          )}

          <div className="flex items-center justify-between mt-3">
            <Link className="text-gray-300 hover:text-gray-50 transition-all duration-300 ease-in-out underline" href="/">Home</Link>
            <Link className="text-blue-300 hover:text-blue-100 transition-all duration-300 ease-in-out underline" href="/auth/login">Login</Link>
          </div>
        </div>
      </div>
    </div>

  )
}
