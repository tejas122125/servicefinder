import React from 'react'

import { useSignUp } from "@clerk/clerk-react";
const Workersignupotp = () => {
    


    const { signUp,setActive } = useSignUp();
   async function verifyOTP() {
        const digit1 = document.getElementById('digit1').value;
        const digit2 = document.getElementById('digit2').value;
        const digit3 = document.getElementById('digit3').value;
        const digit4 = document.getElementById('digit4').value;
        const digit5 = document.getElementById('digit5').value;
        
        
        const otp = digit1 + digit2 + digit3 + digit4 + digit5 ;
  
        // Now you can use the OTP for verification or further processing
        console.log('Entered OTP:', otp);
    
         signUp.attemptPhoneNumberVerification({
            code: otp,
        }).then(()=>{
            console.log("first")
        })
      }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
    <h2 className="text-2xl font-bold mb-4">Enter OTP</h2>
    <form id="otpForm" className="flex justify-center space-x-2">
      <input type="text" maxlength="1" size="1" className="w-10 h-10 border border-gray-300 rounded text-center focus:outline-none focus:border-blue-500" id="digit1" pattern="[0-9]" required/>
      <input type="text" maxlength="1" size="1" className="w-10 h-10 border border-gray-300 rounded text-center focus:outline-none focus:border-blue-500" id="digit2" pattern="[0-9]" required/>
      <input type="text" maxlength="1" size="1" className="w-10 h-10 border border-gray-300 rounded text-center focus:outline-none focus:border-blue-500" id="digit3" pattern="[0-9]" required/>
      <input type="text" maxlength="1" size="1" className="w-10 h-10 border border-gray-300 rounded text-center focus:outline-none focus:border-blue-500" id="digit4" pattern="[0-9]" required/>
      <input type="text" maxlength="1" size="1" className="w-10 h-10 border border-gray-300 rounded text-center focus:outline-none focus:border-blue-500" id="digit5" pattern="[0-9]" required/>
      <input type="text" maxlength="1" size="1" className="w-10 h-10 border border-gray-300 rounded text-center focus:outline-none focus:border-blue-500" id="digit6" pattern="[0-9]" required/>
    </form>
    <button onclick={verifyOTP} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Verify OTP</button>
  </div>
  )
}

export default Workersignupotp