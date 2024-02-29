import React from 'react'
import { SignIn } from "@clerk/clerk-react";
const Workersignin = () => {
  return (
    <SignIn path="/workersignin" routing="path" signUpUrl="/workersignup" />
  )
}

export default Workersignin