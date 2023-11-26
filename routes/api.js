const express = require("express");
const router = express.Router();
const ytdl = require("ytdl-core");
const googleIt = require("google-it");

router.get("/tes", (req, res) => {
  res.json({ message: "tes ok" });
});

router.get("/google", async (req, res) => {
  const text = req.query.query;
  if (!text) res.json({ message: "Masukkan parameter query" });
  const result = await googleIt({ query: text });
  res.json({
    status: res.statusCode,
    author: "Agus Irawan",
    result: result,
  });
});

router.get("/ytmp3", async (req, res) => {
  const url = req.query.link;
  const info = await ytdl.getInfo(url);
  const format = info.formats;
  const audio = format.filter((v) => v.hasAudio && !v.hasVideo);

  res.json({
    status: res.statusCode,
    author: "Agus Irawan",
    result: audio,
  });
});

router.get("/ytmp4", async (req, res) => {
  const url = req.query.link;
  if (!url) res.json({ message: "Massukan parameter link" });
  const info = await ytdl.getInfo(url);
  const format = info.formats;
  const audio = format.filter((v) => v.hasAudio && v.hasVideo);

  res.json({
    status: res.statusCode,
    author: "Agus Irawan",
    result: audio,
  });
});

module.exports = router;
