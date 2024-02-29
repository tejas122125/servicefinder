import React from 'react'
import { SignIn } from "@clerk/clerk-react";

const Workersignin = () => {
  return (
    <div className='w-screen h-screen flex flex-row items-center justify-center'>
    <SignIn path="/workersignin" routing="path" signUpUrl="/workersignup" />
    </div>
  ) 
}

export default Workersignin