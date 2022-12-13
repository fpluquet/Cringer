const express = require("express")
var profiles = require("./data.json");
var cors = require("cors")
const app = express()

app.use(cors())

profiles = profiles.map((p) => ({
  name: `${p.name.first}, ${p.name.last}`,
  description: `Bonjour de ${p.location.country} !`,
  img: p.picture.large,
  match: Math.random() < 0.5
}))
app.get("/api/profiles", (req, res) => {
  return res.json(profiles)
})

app.listen(3001, () => console.log("Server started..."))
