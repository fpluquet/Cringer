const express = require("express")
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./data.sqlite', (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to the matches database.');
  }
});

var cors = require("cors")
const app = express()

app.use(cors())

var hardcodedUserId = 101

var userToJSON = (user) => {
  return {
    id: user.id,
    name: user.name,
    description: user.description,
    img: user.image,
    liked: user.liked,
    likesMe: user.likesMe
  }
}
app.get("/api/profiles", (req, res) => {
  db.all("SELECT *, MyMatches.liked as liked, OtherMatches.liked as likesMe FROM Users " +
    "LEFT JOIN Matches as MyMatches ON Users.id = MyMatches.matched AND MyMatches.matcher = $userId " +
    "LEFT JOIN Matches as OtherMatches ON Users.id = OtherMatches.matcher AND OtherMatches.matched = $userId " +
    "WHERE Users.id != $userId", {$userId: hardcodedUserId}, (err, rows) => {
    if(err) {
      res.status(500).send({
        error: "db error",
        err
      });
      throw err
    }
    res.json(rows.map(p => userToJSON(p)));
  });
})

async function getMatches(userId) {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM Users WHERE Users.id IN (" +
      "SELECT M.matched FROM Matches as M WHERE M.matcher = $userId " +
      " AND M.liked = true AND EXISTS (" +
      "SELECT * FROM Matches as M2 WHERE M2.matched = $userId AND M2.matcher = M.matched AND M2.liked = true))", {$userId: userId}, (err, rows) => {
      if (err) {
        console.log(err)
        reject(err)
        return
      }
      resolve(rows.map(p => userToJSON(p)))
    });
  })
}

function saveLikeAndSendMatches(id, liked, res) {
  db.run("INSERT OR REPLACE INTO Matches (matcher, matched, liked, date) VALUES (?, ?, ?, CURRENT_TIMESTAMP)", [hardcodedUserId, id, liked], async (err) => {
    if (err) {
      res.status(500).send({
        error: "db error",
        err
      });
      throw err
    }
    try {
      res.json(await getMatches(hardcodedUserId))
    } catch (e) {
      res.status(500).send({
        error: "db error",
        e
      });
    }
  })
}

app.post("/api/match/:id", (req, res) => {
  var id = req.params.id
  saveLikeAndSendMatches(id, true, res);
})

app.post("/api/pass/:id", (req, res) => {
  var id = req.params.id
  saveLikeAndSendMatches(id, false, res);
})

app.listen(3001, () => console.log("Server started..."))
