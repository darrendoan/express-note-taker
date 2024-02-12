const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require("node:fs");

router.get("/api/notes", async (req, res) => {
  try {
    const dbJson = await fs.promises.readFile("db/db.json", "utf8");
    res.json(JSON.parse(dbJson));
  } catch (error) {
    console.error("Error reading file:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post('/api/notes', async (req, res) => {
  try {
    const dbJson = JSON.parse(await fs.promises.readFile("db/db.json", "utf8"));
    const newFeedback = {
      title: req.body.title,
      text: req.body.text,
      id: uuidv4(),
    };
    dbJson.push(newFeedback);
    await fs.promises.writeFile("db/db.json", JSON.stringify(dbJson));
    res.json(dbJson);
  } catch (error) {
    console.error("Error writing file:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete('/api/notes/:id', (req, res) => {
  let data = fs.readFileSync("db/db.json", "utf8");
  const dataJSON =  JSON.parse(data);
  const newNotes = dataJSON.filter((note) => { 
    return note.id !== req.params.id;
  });
  fs.writeFileSync("db/db.json",JSON.stringify(newNotes));
  res.json("Note deleted.");
});

module.exports = router;