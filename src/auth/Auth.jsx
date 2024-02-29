import React from "react";

export const ServerUrl = "http://localhost:3000";

export default function SigninBtn({ classname }) {
  return (
    <a className={classname} href={ServerUrl + "/auth/google"}>
      Signin
    </a>
  );
}
