






import Link from "next/link";
import { useState } from "react";


const commonInputStyle = "outline-none border-[0.5px] border-gray-300 rounded-sm py-1 px-2";
const commonBtnStyle = "text-white bg-blue-600 hover:bg-blue-500 transition-all duration-300 rounded-sm py-1 px-5";


const ForgotPassword = () => {
  const [credential, setCredential] = useState("");
  const [isOTPSent, setIsOTPSent] = useState(false);
  const [OTP, setOTP] = useState("");
  const sendOTPOnCredential = () => {
    setIsOTPSent(true);
  }
  const verifyOTP = () => {
    console.log("OTP verification");
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-t from-black to-violet-950">
      <div className="w-1/2 max-md:w-2/3 lg:w-1/3 max-sm:w-11/12 animate-fade-in-up bg-gradient-to-t from-black to-violet-900 rounded-3xl shadow-lg p-6 max-sm:p-4">
        <div>
          <h1 className="text-white text-2xl font-semibold max-sm:text-xl">Re-set Password</h1>

          <div className="flex flex-col my-2">
            <p className="text-gray-300">Registered email or number</p>
            <input type="text" name="credential" className={commonInputStyle} onChange={(e) => setCredential(e.target.value)} required />
          </div>

          <div>
            {credential && !isOTPSent && (
              <div className="flex my-2 justify-between animate-fade-in duration-300 max-sm:flex-col ease-linear">
                <button className={commonBtnStyle} onClick={sendOTPOnCredential}>Verify Credential</button>
              </div>
            )}
            {credential && isOTPSent && (
              <div className="flex items-center justify-between">
                <button className={commonBtnStyle} onClick={sendOTPOnCredential}>Send again</button>
                <div className="flex animate-fade-in duration-300 ease-linear">
                  <input type="text" name="contactNo" className={`${commonInputStyle} rounded-r-none w-[80px]`} required onChange={(e) => setOTP(e.target.value)} />
                  <button className={`${commonBtnStyle} rounded-l-none shadow-lg max-sm:px-2`} onClick={verifyOTP}>Verify It</button>
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center justify-between mt-3">
            <Link className="text-gray-300 hover:text-gray-50 transition-all duration-300 ease-in-out underline" href="/">Home</Link>
            <Link className="text-blue-300 hover:text-blue-100 transition-all duration-300 ease-in-out underline" href="/auth/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ForgotPassword;