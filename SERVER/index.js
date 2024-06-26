const express = require("express");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const cors = require("cors");
const passport = require("passport");
const cookieSession = require("cookie-session");
require("dotenv").config();

const bodyParser = require("body-parser");
const path = require("path");

const baseurl = path.join(__dirname, "..", "dist");

const app = express();
const port = 3000;

function checkLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).send("Unauthenticated, Please login");
  }
}

app.use(
  cors({
    origin: [
      "http://localhost:5173/",
      "http://localhost:5173",
      "http://localhost:3000",
    ],
  })
);
app.use(bodyParser.urlencoded({ extended: true }));

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      console.log(profile);
      const { sub, name, email } = profile._json;
      return done(null, { id: sub, name, email });
    }
  )
);

// save user to cookie
passport.serializeUser((user, done) => {
  done(null, user);
});

// parse user form cookie
passport.deserializeUser((user, done) => {
  done(null, user);
});

app.use(
  cookieSession({
    name: "session",
    keys: [process.env.AUTH_SECRET_1, process.env.AUTH_SECRET_2],
    maxAge: 7 * 24 * 3600000, // 7 days
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/failure",
    successRedirect: "/",
    session: true,
  })
);

app.get("/auth/logout", (req, res) => {
  req.logOut();
  res.redirect("/");
});

app.get("/failure", (req, res) => {
  res.send("failed to log in!");
});

app.get("/user", (req, res) => {
  console.log(req?.user);
  res.json(req?.user || {});
});

app.use(express.static(baseurl));

app.get("*", (req, res) => {
  res.sendFile(baseurl + "/index.html");
});

app.listen(port, () => {
  console.log(`your site is live at localhost ${port}`);
});
