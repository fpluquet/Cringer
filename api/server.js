const express = require("express")
var profiles = require("./data.json");
var cors = require("cors")
const app = express()

app.use(cors())
var id = 0

var myMatches = []
profiles = profiles.map((p) => ({
  id: ++id,
  name: `${p.name.first}, ${p.name.last}`,
  description: `Bonjour de ${p.location.country} !`,
  img: p.picture.large,
  match: Math.random() < 0.5
}))
app.get("/api/profiles", (req, res) => {
  return res.json(profiles)
})

app.post("/api/match/:id", (req, res) => {
  myMatches = [...myMatches, profiles.find(p => p.id === parseInt(req.params.id))]
  res.json(myMatches)
})

app.post("/api/pass/:id", (req, res) => {
  res.json(myMatches)
})

app.listen(3001, () => console.log("Server started..."))
