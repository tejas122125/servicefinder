import React from 'react'
import { SignUp } from "@clerk/clerk-react";
const Workersignup = () => {
  return (
    <div className='w-screen h-screen flex flex-row items-center justify-center'>
    <SignUp path="/workersignup" routing="path" signInUrl="/workersignin" />
    </div>
  )
}

export default Workersignup