// setting cors()
// cor issue soved withcredential:true from react
// https://stackoverflow.com/questions/19743396/cors-cannot-use-wildcard-in-access-control-allow-origin-when-credentials-flag-i
// app.use(
//   cors({
//     origin: true,
//     credentials: true,
//   })
// );
// This one also working
// app.use(
//   cors({
//     origin: function (origin, callback) {
//       return callback(null, true);
//     },
//     optionsSuccessStatus: 200,
//     credentials: true,
//   })
// );
// Also working
// const corsOptions = {
//   credentials: true,
//   origin: ["http://localhost:5173"],
// };

// app.use(cors(corsOptions));
// Also worked
// const corsOptions = {
//   credentials: true, //access-control-allow-credentials:true
//   origin: "http://localhost:5173",
//   optionSuccessStatus: 200,
// };
// app.use(cors(corsOptions));
