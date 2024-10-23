const express = require("express");
const app = express();
const router = require("./router/auth-router");

//Mount the router : to use the router in your main express app, you can "mount" it at a specific url
app.use("/api/auth", router);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server is running at port: ${PORT}`);
});