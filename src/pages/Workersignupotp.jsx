import React from 'react'

const Workersignupotp = () => {
  return (
    <div class="flex flex-col items-center justify-center h-screen">
    <h2 class="text-2xl font-bold mb-4">Enter OTP</h2>
    <form id="otpForm" class="flex justify-center space-x-2">
      <input type="text" maxlength="1" size="1" class="w-10 h-10 border border-gray-300 rounded text-center focus:outline-none focus:border-blue-500" id="digit1" pattern="[0-9]" required/>
      <input type="text" maxlength="1" size="1" class="w-10 h-10 border border-gray-300 rounded text-center focus:outline-none focus:border-blue-500" id="digit2" pattern="[0-9]" required/>
      <input type="text" maxlength="1" size="1" class="w-10 h-10 border border-gray-300 rounded text-center focus:outline-none focus:border-blue-500" id="digit3" pattern="[0-9]" required/>
      <input type="text" maxlength="1" size="1" class="w-10 h-10 border border-gray-300 rounded text-center focus:outline-none focus:border-blue-500" id="digit4" pattern="[0-9]" required/>
      <input type="text" maxlength="1" size="1" class="w-10 h-10 border border-gray-300 rounded text-center focus:outline-none focus:border-blue-500" id="digit5" pattern="[0-9]" required/>
      <input type="text" maxlength="1" size="1" class="w-10 h-10 border border-gray-300 rounded text-center focus:outline-none focus:border-blue-500" id="digit6" pattern="[0-9]" required/>
    </form>
    <button onclick="verifyOTP()" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Verify OTP</button>
  </div>
  )
}

export default Workersignupotp