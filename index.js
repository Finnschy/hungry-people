const express = require("express");
const app = express();
const PORT = 5000
const navData = require("./nav.json")

app.use(express.static("public"))
app.set("view engine", "ejs")

navData.forEach( navi => {
    app.get(`${navi.url}`, (req, res) => {
        res.render(`${navi.render}`, {title: `${navi.name}`, navData})
    })
})

app.use(function(req, res, next) {
    res.status(404).render('404', {title: `${navi.name}`, navData});
  });


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))