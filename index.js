const express = require("express");
const router = require("./routes/api.js");

class App {
  constructor() {
    this.app = express();
    this.api = router;
  }
  async run() {
    this.app.set("json spaces", 2);
    this.app.get("/", (req, res) => {
      res.json({ message: "Ok" });
    });

    this.app.use("/api", this.api);
    this.app.listen(8080);
  }
}

new App().run();
