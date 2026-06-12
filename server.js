import express from "express";
import sum from "./sum.js";

const app = express();

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`server is listening at port ${PORT}`);
});

app.get("/home", async (req, res) => {
  res.json({ msg: "I am root" });
});

app.get("/getSum/:a/:b", (req, res) => {
  const { a, b } = req.params;
  res.json({ ans: sum(parseInt(a), parseInt(b)) });
});
