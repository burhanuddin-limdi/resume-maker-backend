const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = express.Router();
const pdfService = require("./resumePdf");
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.json());
app.post("/api", (req, res) => {
  // Access the data that was sent in the request body
  const data = req.body;
  console.log(data);
  // Do something with the data here

  // Send a response back to the client
  const stream = res.writeHead(200, {
    "Content-Type": "application/pdf",
    "Content-Disposition": "attachment;filename=resume.pdf:",
  });
  pdfService.buildResume(
    data,
    (chunk) => stream.write(chunk),
    () => stream.end()
  );
});
// app.use(
//   "/api",
//   router.get("/", (req, res) => {
//     const stream = res.writeHead(200, {
//       "Content-Type": "application/pdf",
//       "Content-Disposition": "attachment;filename=resume.pdf:",
//     });
//     pdfService.buildResume(
//       (chunk) => stream.write(chunk),
//       () => stream.end()
//     );
//   })
// );
// app.use(
//   "/api",
//   router.post("/", (req, res) => {
//     console.log(req.body);
//     if (req.body == {}) {
//       res.status(400).json({
//         error: "Message not recieved",
//       });
//     } else {
//       res.status(200).json({
//         message: "Message revieved",
//       });
//     }
//   })
// );
app.post("/api", (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: "hey" });
});

module.exports = app;
