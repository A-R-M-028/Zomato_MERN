// // Testing auth
// import passport from 'passport';
// require("dotenv").config();
// var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

// passport.use(new GoogleStrategy({
//     clientID:     process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     callbackURL: "http://localhost:4000/auth/google/callback",
//     passReqToCallback   : true
//   },
//   function(request, accessToken, refreshToken, profile, done) {
//     // User.findOrCreate({ googleId: profile.id }, function (err, user) {
//     //   return done(err, user);
//     return done(err, profile);

//     // });
//   }
// ));

// passport.serializeUser(function(user, done) {
//     done(null, user);
// });
// passport.deserializeUser(function(user, done) {
//     done(null, user);
// });

// //                                                           Index.js file
// // Testing auth
// import auth from './auth';
// import session from 'express-session';
// zomato.use(session({sectet: 'cats'}));
// zomato.use(passport.initialize());
// zomato.use(passport.session());
 

// // Middleware
// function isLoggedin(req, res, next) {
//   req.user? next() : res.sendStatus(401);
// }
// zomato.use("/auth/google", (req, res) => {
//   res.send('<a href = "/auth/google">Authenticatication with Google</a>');
// });

// zomato.get("auth/google",
// passport.authenticate('google', {scope: ['email', 'profile']}))

// zomato.get("/auth/google/callback",
//   passport.authenticate('google', {
//     successRedirect: '/protected', // Fixed: Added a comma here
//     failureRedirect: '/auth/failure',
//   })
// );

// zomato.get('auth/failure', (req, res) => {
//   res.send('Something went wrong!')
// })

// zomato.get("/protected", isLoggedin, (req, res) => {
//   res.send(`Hello ${req.user.displayName}`);
// });

// zomato.get("/logout",  (req, res) => {
//   req.logOut();
//   req.session.destroy();
//   res.send('GoogBye');
// })
