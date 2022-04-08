const express = require("express");
const menuRoutes = require('./routes/menu.routes.js')
// TODO: Update this
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var items = require('./database-mysql');
// var items = require('./database-mongo');

const app = express();
const PORT = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/public"));

app.use("/menu", menuRoutes);

app.get('/getAll', (req, res) => {
  items.getAll((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  })
});

app.post("/add", (req, res) => {
  items.addItem(food, price, (err, result) => {
    console.log(req.body);
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  })
});

app.put("/modif", (req, res) => {
  items.modifItem(menuName, photo, price, id, (err, result) => {
    console.log(req.body);
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  })
});

app.delete("/delete", (req, res) => {
  items.deleteItem(id, (err, result) => {
    console.log(req.body);
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  })
});

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
