import React, { useEffect, useState } from "react";

export const ServerUrl = "http://localhost:3000";

export default function SigninBtn({ classname }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/user", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return user ? (
    <h2>{user.name}</h2>
  ) : (
    <a className={classname} href={ServerUrl + "/auth/google"}>
      Signin
    </a>
  );
}
